package app.netlify.marcussilva.adminpanelapi.application.employees;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
