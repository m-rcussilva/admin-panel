package app.netlify.marcussilva.adminpanelapi.domain.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.netlify.marcussilva.adminpanelapi.domain.entities.EmployeeEntity;
import app.netlify.marcussilva.adminpanelapi.domain.exceptions.EmployeeNotFoundException;
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

    public void deleteEmployeeById(Long id) {
        employeeRepository.deleteById(id);
    }

    public EmployeeEntity updateEmployee(Long id, EmployeeEntity updateEmployee) {
        if (employeeRepository.existsById(id)) {
            updateEmployee.setId(id);
            return employeeRepository.save(updateEmployee);
        } else {
            throw new EmployeeNotFoundException(id);
        }
    }

}
