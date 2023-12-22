"use client"

import { Template } from "@/components/Template"
import styles from "./employees.module.css"
import { useState } from "react"
import { RegisterEmployee } from "@/components/register/page"
import { Employee } from "@/resources/employee/employee.resource"

export default function EmployeeListPage() {
    const [showForm, setShowForm] = useState(false)
    const [employeeData, setEmployeeData] = useState<Employee[]>([])

    const handleShowForm = () => {
        setShowForm(!showForm)
    }

    const addEmployee = (employee: Employee) => {
        setEmployeeData([...employeeData, employee])
    }

    return (
        <Template>
            <div className={styles.EmployeeListPageContainer}>
                <div className={styles.EmployeeListPageAddEmployeBtn}>
                    <h2 className={styles.EmployeeListPageTitle}>
                        Lista de Funcionários
                    </h2>

                    <button onClick={handleShowForm}>
                        {showForm ? "Cancelar" : "+ Funcionário"}
                    </button>
                </div>

                {/* curto-circuito */}
                {showForm && <RegisterEmployee onRegister={addEmployee} />}

                <table className={styles.EmployeeListPageTable}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Emailt</th>
                            <th>Cargo</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeData.map((employee) => (
                            <tr key={employee.email}>
                                <td>
                                    {employee.firstName} {employee.lastName}
                                </td>
                                <td>{employee.email}</td>
                                <td>{employee.enumRole}</td>
                                <td>Detalhes</td>
                                <td>Editar</td>
                                <td>Deletar</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Template>
    )
}
