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

                {employeeData.map((employee, index) => (
                    <details key={index}>
                        <summary>
                            Nome do funcionário: {employee.firstName}{" "}
                            {employee.lastName}
                        </summary>
                        <div>
                            <p>
                                Nome completo: {employee.firstName}{" "}
                                {employee.lastName}
                            </p>
                            <p>Sexo: {employee.enumGender}</p>
                            <p>Email: {employee.email}</p>
                            <p>Data de Nascimento: {employee.birthDate}</p>
                            <p>RG: {employee.rg}</p>
                            <p>CPF: {employee.cpf}</p>
                            <p>Cargo: {employee.enumRole}</p>
                            <p>Salário: {employee.salary}</p>
                            <p>CEP: {employee.cep}</p>
                            <p>Cidade: {employee.localidade}</p>
                            <p>Estado: {employee.uf}</p>
                            <p>Data de Admissão: {employee.admissionDate}</p>
                            <p>Data de Registro: {employee.createdAt}</p>
                        </div>
                    </details>
                ))}
            </div>
        </Template>
    )
}
