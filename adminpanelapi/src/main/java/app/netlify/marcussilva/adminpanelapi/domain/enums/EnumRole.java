package app.netlify.marcussilva.adminpanelapi.domain.enums;

public enum EnumRole {

    IT("Tecnologia da Informação"),
    SALES("Vendas"),
    MARKETING("Marketing");

    private final String description;

    private EnumRole(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

}
