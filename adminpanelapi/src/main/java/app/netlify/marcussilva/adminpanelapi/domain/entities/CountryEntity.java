package app.netlify.marcussilva.adminpanelapi.domain.entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class CountryEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String countryName;
    @OneToMany(mappedBy = "countryEntity")
    private List<EmployeeEntity> employeeCountry;

    public CountryEntity() {}

    public CountryEntity(Long id, String countryName, List<EmployeeEntity> employeeCountry) {
        this.id = id;
        this.countryName = countryName;
        this.employeeCountry = employeeCountry;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public List<EmployeeEntity> getEmployeeCountry() {
        return employeeCountry;
    }

    public void setEmployeeCountry(List<EmployeeEntity> employeeCountry) {
        this.employeeCountry = employeeCountry;
    }

}
