package app.netlify.marcussilva.adminpanelapi.domain.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.netlify.marcussilva.adminpanelapi.domain.entities.EmployeeEntity;
import app.netlify.marcussilva.adminpanelapi.repositories.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<EmployeeEntity> findAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<EmployeeEntity> findEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public EmployeeEntity createEmployee(EmployeeEntity employeeEntity) {
        return employeeRepository.save(employeeEntity);
    }

    public boolean deleteEmployeeById(Long id) {
        employeeRepository.deleteById(id);
        return false;
    }

    public void updateEmployee(Long id, EmployeeEntity updatedEmployee) {
        Optional<EmployeeEntity> existingEmployee = employeeRepository.findById(id);

        if (existingEmployee.isPresent()) {
            EmployeeEntity employee = existingEmployee.get();
            employee.setFirstName(updatedEmployee.getFirstName());
            employee.setLastName(updatedEmployee.getLastName());

            employeeRepository.save(employee);
        }
    }

}
