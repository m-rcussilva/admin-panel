package app.netlify.marcussilva.adminpanelapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import app.netlify.marcussilva.adminpanelapi.domain.entities.EmployeeEntity;

/**
 * EmployeeRepository
 */
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {

    
}