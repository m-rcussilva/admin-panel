import { Employee } from "./employee.resource"

export class EmployeeService {
    baseURL: string = "http://localhost:8080/api/v1/employees"

    createEmployee(data: Employee) {
        return fetch(this.baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
}
