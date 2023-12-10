package app.netlify.marcussilva.adminpanelapi.domain.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;

import app.netlify.marcussilva.adminpanelapi.domain.enums.EnumGender;
import app.netlify.marcussilva.adminpanelapi.domain.enums.EnumRole;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class EmployeeEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(nullable = false)
    private EnumGender enumGender;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private LocalDate birthDate;
    @Column(nullable = false)
    private String cpf;
    @Column(nullable = false)
    private String rg;
    @Column(nullable = false)
    private EnumRole enumRole;
    @Column(nullable = false)
    private LocalDate admissionDate;
    @CreatedDate
    @Column(name = "created_at")
    private LocalDateTime createdAt;

}
