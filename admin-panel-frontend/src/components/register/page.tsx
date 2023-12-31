import { useState } from "react"
import styles from "./Register.module.css"
import { EmployeeService } from "@/resources/employee/employee.service"
import { EnumGender } from "@/types/EnumGender"
import { EnumRole } from "@/types/EnumRole"
import { format } from "date-fns"
import { Employee } from "@/resources/employee/employee.resource"

interface RegisterEmployeeProps {
    onRegister: (employeeData: Employee) => void
}

export function RegisterEmployee({ onRegister }: RegisterEmployeeProps) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        enumGender: EnumGender.MALE,
        email: "",
        birthDate: "",
        rg: "",
        cpf: "",
        enumRole: EnumRole.IT,
        salary: "",
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
        admissionDate: "",
        createdAt: ""
    })

    const employeeService = new EmployeeService()

    const handleChange = async (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const formattedDate = {
                ...formData,
                birthDate: format(new Date(formData.birthDate), "dd/MM/yyyy"),
                admissionDate: format(
                    new Date(formData.admissionDate),
                    "dd/MM/yyyy"
                ),
                createdAt: format(new Date(formData.createdAt), "dd/MM/yyyy")
            }

            console.log("Dados do formulário:", formattedDate)
            await employeeService.createEmployee(formattedDate)

            onRegister(formattedDate)
        } catch (error) {
            console.error(error)

            if (isCustomError(error)) {
                console.log("Resposta de erro:", error.message)
            }
        }
    }

    function isCustomError(error: unknown): error is { message: string } {
        return (error as { message?: string }).message !== undefined
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className={styles.FormContainer}>
                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">Nome</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>

                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">Sobrenome</label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="enumGender">Sexo</label>
                            <select
                                name="enumGender"
                                id="enumGender"
                                value={formData.enumGender}
                                onChange={handleChange}
                                className={styles.Select}
                            >
                                <option value={EnumGender.MALE}>
                                    Masculino
                                </option>
                                <option value={EnumGender.FEMALE}>
                                    Feminino
                                </option>
                            </select>
                        </div>

                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">Data de nascimento</label>
                            <input
                                type="date"
                                name="birthDate"
                                id="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">RG</label>
                            <input
                                type="text"
                                name="rg"
                                id="rg"
                                value={formData.rg}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">CPF</label>
                            <input
                                type="text"
                                name="cpf"
                                id="cpf"
                                value={formData.cpf}
                                onChange={handleChange}
                            />
                        </div>

                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="enumRole">Cargo</label>
                            <select
                                name="enumRole"
                                id="enumRole"
                                value={formData.enumRole}
                                onChange={handleChange}
                                className={styles.Select}
                            >
                                <option value={EnumRole.IT}>
                                    Tecnologia da Informação
                                </option>
                                <option value={EnumRole.SALES}>Vendas</option>
                                <option value={EnumRole.MARKETING}>
                                    Marketing
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">Salário</label>
                            <input
                                type="text"
                                name="salary"
                                id="salary"
                                value={formData.salary}
                                onChange={handleChange}
                            />
                        </div>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">CEP</label>
                            <input
                                type="text"
                                name="cep"
                                id="cep"
                                value={formData.cep}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">Estado</label>
                            <input
                                type="text"
                                name="uf"
                                id="uf"
                                value={formData.uf}
                                onChange={handleChange}
                            />
                        </div>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">Cidade</label>
                            <input
                                type="text"
                                name="localidade"
                                id="localidade"
                                value={formData.localidade}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.FormBoxContainer}>
                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginRight}`}
                        >
                            <label htmlFor="">Data de admissão</label>
                            <input
                                type="date"
                                name="admissionDate"
                                id="admissionDate"
                                value={formData.admissionDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div
                            className={`${styles.FormInput} ${styles.FormInputMarginLeft}`}
                        >
                            <label htmlFor="">Data de criação</label>
                            <input
                                type="date"
                                name="createdAt"
                                id="createdAt"
                                value={formData.createdAt}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={styles.FormButtonContainer}>
                        <button className={styles.SubmitButton}>
                            Registrar Funcionário
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
