"use client"

import { Template } from "@/components/Template"
import styles from "./employees.module.css"
import RegisterEmployee from "./register/page"
import { useState } from "react"

export default function EmployeeListPage() {
    const [showForm, setShowForm] = useState(false)

    const handleShowForm = () => {
        setShowForm(!showForm)
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
                {showForm && <RegisterEmployee />}

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
                        <tr>
                            <td>Marcus</td>
                            <td>marcus@email.com</td>
                            <td>Tecnologia da Informação</td>
                            <td>Detalhes</td>
                            <td>Editar</td>
                            <td>Deletar</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Template>
    )
}
