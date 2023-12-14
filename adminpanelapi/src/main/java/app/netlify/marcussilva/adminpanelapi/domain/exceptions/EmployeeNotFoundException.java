package app.netlify.marcussilva.adminpanelapi.domain.exceptions;

public class EmployeeNotFoundException extends RuntimeException {
    public EmployeeNotFoundException(Long id) {
        super("Funcionário com ID " + id + " não encontrado.");
    }
}