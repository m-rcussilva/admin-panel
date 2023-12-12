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
public class CityEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String cityName;
    @ManyToOne
    @JoinColumn(name = "state_id")
    @JsonIgnore
    private StateEntity stateEntity;

    public CityEntity() {
    }

    public CityEntity(Long id, String cityName, StateEntity stateEntity) {
        this.id = id;
        this.cityName = cityName;
        this.stateEntity = stateEntity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public StateEntity getStateEntity() {
        return stateEntity;
    }

    public void setStateEntity(StateEntity stateEntity) {
        this.stateEntity = stateEntity;
    }

}
