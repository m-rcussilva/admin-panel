package app.netlify.marcussilva.adminpanelapi.domain.enums;

public enum EnumGender {

    MALE("Masculino"),
    FEMALE("Feminino");

    private final String description;

    private EnumGender(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
    
}
