package app.netlify.marcussilva.adminpanelapi.domain.entities;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;

import app.netlify.marcussilva.adminpanelapi.domain.enums.EnumGender;
import app.netlify.marcussilva.adminpanelapi.domain.enums.EnumRole;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private EnumGender enumGender;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private LocalDate birthDate;
    @Column(nullable = false)
    private String rg;
    @Column(nullable = false)
    private String cpf;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private EnumRole enumRole;
    @Column(nullable = false)
    private BigDecimal salary;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "country_id")
    private CountryEntity countryEntity;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "state_id")
    private StateEntity stateEntity;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "city_id")
    private CityEntity cityEntity;
    @Column(nullable = false)
    private LocalDate admissionDate;
    @CreatedDate
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public EmployeeEntity() {
    }

    public EmployeeEntity(Long id, String firstName, String lastName, EnumGender enumGender, String email,
            LocalDate birthDate, String rg, String cpf, EnumRole enumRole, BigDecimal salary,
            CountryEntity countryEntity,
            StateEntity stateEntity, CityEntity cityEntity, LocalDate admissionDate, LocalDateTime createdAt) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.enumGender = enumGender;
        this.email = email;
        this.birthDate = birthDate;
        this.rg = rg;
        this.cpf = cpf;
        this.enumRole = enumRole;
        this.salary = salary;
        this.countryEntity = countryEntity;
        this.stateEntity = stateEntity;
        this.cityEntity = cityEntity;
        this.admissionDate = admissionDate;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public EnumGender getEnumGender() {
        return enumGender;
    }

    public void setEnumGender(EnumGender enumGender) {
        this.enumGender = enumGender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public EnumRole getEnumRole() {
        return enumRole;
    }

    public void setEnumRole(EnumRole enumRole) {
        this.enumRole = enumRole;
    }

    public BigDecimal getSalary() {
        return salary;
    }

    public void setSalary(BigDecimal salary) {
        this.salary = salary;
    }

    public CountryEntity getCountryEntity() {
        return countryEntity;
    }

    public void setCountryEntity(CountryEntity countryEntity) {
        this.countryEntity = countryEntity;
    }

    public StateEntity getStateEntity() {
        return stateEntity;
    }

    public void setStateEntity(StateEntity stateEntity) {
        this.stateEntity = stateEntity;
    }

    public CityEntity getCityEntity() {
        return cityEntity;
    }

    public void setCityEntity(CityEntity cityEntity) {
        this.cityEntity = cityEntity;
    }

    public LocalDate getAdmissionDate() {
        return admissionDate;
    }

    public void setAdmissionDate(LocalDate admissionDate) {
        this.admissionDate = admissionDate;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

}
