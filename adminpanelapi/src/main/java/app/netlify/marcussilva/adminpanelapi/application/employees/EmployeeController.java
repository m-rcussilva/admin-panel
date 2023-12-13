package app.netlify.marcussilva.adminpanelapi.application.employees;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import app.netlify.marcussilva.adminpanelapi.domain.entities.EmployeeEntity;
import app.netlify.marcussilva.adminpanelapi.domain.services.EmployeeService;

@RestController
@RequestMapping("api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employees")
    public List<EmployeeEntity> getAllEmployees() {
        return employeeService.findAllEmployees();
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<EmployeeEntity> getEmployeeById(@PathVariable Long id) {
        Optional<EmployeeEntity> employee = employeeService.findEmployeeById(id);
        return employee.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/employees")
    public ResponseEntity<EmployeeEntity> createEmployee(@RequestBody EmployeeEntity employeeEntity) throws Exception {
        URL url = new URL("http://viacep.com.br/ws/" + employeeEntity.getCep() + "/json/");
        URLConnection urlConnection = url.openConnection();
        InputStream inputStream = urlConnection.getInputStream();
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "UTF-8"));

        String cep = "";
        StringBuilder jsonResponseBuilderForCep = new StringBuilder();

        while ((cep = bufferedReader.readLine()) != null) {
            jsonResponseBuilderForCep.append(cep);
        }

        Gson gson = new GsonBuilder().registerTypeAdapter(LocalDate.class, new EmployeeEntity.LocalDateDeserializer())
                .create();
        EmployeeEntity employeeEntityAux = gson.fromJson(jsonResponseBuilderForCep.toString(), EmployeeEntity.class);
        String cepAsString = employeeEntityAux.getCep();
        try {
            Long cepAsLong = Long.parseLong(cepAsString);
            employeeEntity.setId(cepAsLong);
        } catch (NumberFormatException e) {
            System.err.println("Error parsing cep to Long: " + cepAsString);
            e.printStackTrace();
        }
        employeeEntity.setLogradouro(employeeEntityAux.getLogradouro());
        employeeEntity.setComplemento(employeeEntityAux.getComplemento());
        employeeEntity.setBairro(employeeEntityAux.getBairro());
        employeeEntity.setLocalidade(employeeEntityAux.getLocalidade());
        employeeEntity.setUf(employeeEntityAux.getUf());

        EmployeeEntity createEmployee = employeeService.createEmployee(employeeEntity);
        return new ResponseEntity<>(createEmployee, HttpStatus.CREATED);
    }

}
