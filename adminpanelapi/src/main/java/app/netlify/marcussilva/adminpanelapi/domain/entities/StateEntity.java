package app.netlify.marcussilva.adminpanelapi.domain.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class StateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String stateName;
    @ManyToOne
    @JoinColumn(name = "country_id")
    @JsonIgnore
    private CountryEntity countryEntity;

    public StateEntity() {
    }

    public StateEntity(Long id, String stateName, CountryEntity countryEntity) {
        this.id = id;
        this.stateName = stateName;
        this.countryEntity = countryEntity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStateName() {
        return stateName;
    }

    public void setStateName(String stateName) {
        this.stateName = stateName;
    }

    public CountryEntity getCountryEntity() {
        return countryEntity;
    }

    public void setCountryEntity(CountryEntity countryEntity) {
        this.countryEntity = countryEntity;
    }

}
