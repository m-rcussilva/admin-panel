"use client"

import { Template } from "@/components/Template"
import { Employee } from "@/resources/employee/employee.resource"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function EmployeeDetails() {
    const [employeeData, setEmployeeData] = useState<Employee[]>([])
    const [employee, setEmployee] = useState<Employee | null>(null)

    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        if (
            id &&
            parseInt(id as string) >= 0 &&
            parseInt(id as string) < employeeData.length
        ) {
            const getEmployeeDetails = employeeData[parseInt(id as string)]
            setEmployee(getEmployeeDetails)
        }
    }, [id])

    if (!employee) {
        return <p>Carregando...</p>
    }

    return (
        <Template>
            <div>
                <button onClick={() => router.back()}>Voltar</button>
            </div>
            <div>
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
