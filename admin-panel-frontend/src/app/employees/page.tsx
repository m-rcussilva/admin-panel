"use client"

import { Template } from "@/components/Template"
import styles from "./employees.module.css"
import { useEffect, useState } from "react"
import { RegisterEmployee } from "@/components/register/page"
import { Employee } from "@/resources/employee/employee.resource"
import { EmployeeService } from "@/resources/employee/employee.service"

export default function EmployeeListPage() {
    const [showForm, setShowForm] = useState(false)
    const [employeeData, setEmployeeData] = useState<Employee[]>([])

    const employeeService = new EmployeeService()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await employeeService.getAllEmployees()

                console.log("Status da resposta: ", response.status)

                if (response.ok) {
                    const employeeDataFromAPI: Employee[] =
                        await response.json()

                    setEmployeeData(employeeDataFromAPI)
                } else {
                    console.error(
                        "Erro ao buscar funcionários do backend:",
                        response.status
                    )
                }
            } catch (error) {
                console.error("Erro ao buscar funcionários do backend:", error)
            }
        }

        fetchData()
    }, [])

    const handleShowForm = () => {
        setShowForm(!showForm)
    }

    const addEmployee = (employee: Employee) => {
        setEmployeeData([...employeeData, employee])
    }

    const handleDeleteEmployee = async (id: number | undefined) => {
        if (id !== undefined) {
            try {
                await employeeService.deleteEmployee(id)
                setEmployeeData(
                    employeeData.filter((employee) => employee.id !== id)
                )
            } catch (error) {
                console.error("Erro ao excluir funcionário:", error)
            }
        }
    }

    return (
        <Template>
            <div className={styles.EmployeeListPageContainer}>
                <div className={styles.EmployeeListPageAddEmployeBtn}>
                    <h2 className={styles.EmployeeListPageTitle}>
                        Registre um novo funcionário
                    </h2>

                    <button
                        onClick={handleShowForm}
                        className={styles.ToggleBtnAddCancelEmployee}
                    >
                        {showForm ? "Cancelar" : "+ Funcionário"}
                    </button>
                </div>

                {/* curto-circuito */}
                {showForm && <RegisterEmployee onRegister={addEmployee} />}

                <div className={styles.EmployeesListTitle}>
                    <header>
                        <h3>Lista de Funcionários:</h3>
                    </header>
                </div>

                {employeeData.map((employee, index) => (
                    <details key={index} className={styles.Details}>
                        <summary className={styles.Summary}>
                            <span>Nome do funcionário: </span>
                            {employee.firstName} {employee.lastName}
                        </summary>
                        <div className={styles.DetailsContent}>
                            <p>
                                <span>Nome completo: </span>
                                {employee.firstName} {employee.lastName}
                            </p>
                            <p>
                                <span>Sexo: </span>
                                {employee.enumGender}
                            </p>
                            <p>
                                <span>Email: </span>
                                {employee.email}
                            </p>
                            <p>
                                <span>Data de Nascimento: </span>
                                {employee.birthDate}
                            </p>
                            <p>
                                <span>RG: </span>
                                {employee.rg}
                            </p>
                            <p>
                                <span>CPF: </span>
                                {employee.cpf}
                            </p>
                            <p>
                                <span>Cargo: </span>
                                {employee.enumRole}
                            </p>
                            <p>
                                <span>Salário: </span>
                                {employee.salary}
                            </p>
                            <p>
                                <span>CEP: </span>
                                {employee.cep}
                            </p>
                            <p>
                                <span>Cidade: </span>
                                {employee.localidade}
                            </p>
                            <p>
                                <span>Estado: </span>
                                {employee.uf}
                            </p>
                            <p>
                                <span>Data de Admissão: </span>
                                {employee.admissionDate}
                            </p>
                            <p>
                                <span>Data de Registro: </span>
                                {employee.createdAt}
                            </p>

                            <div className={styles.ActionButtons}>
                                <button
                                    onClick={() =>
                                        handleDeleteEmployee(employee.id)
                                    }
                                    className={styles.DeleteButton}
                                >
                                    Deletar
                                </button>
                            </div>
                        </div>
                    </details>
                ))}
            </div>
        </Template>
    )
}
