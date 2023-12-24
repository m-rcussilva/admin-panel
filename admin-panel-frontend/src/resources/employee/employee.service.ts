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

    getAllEmployees() {
        return fetch(this.baseURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    getEmployeeById(id: number) {
        return fetch(`${this.baseURL}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    updateEmployee(id: number, data: Employee) {
        return fetch(`${this.baseURL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    deleteEmployee(id: number) {
        return fetch(`${this.baseURL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}
