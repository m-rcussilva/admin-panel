package app.netlify.marcussilva.adminpanelapi.domain.services;

import java.util.List;

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

}
