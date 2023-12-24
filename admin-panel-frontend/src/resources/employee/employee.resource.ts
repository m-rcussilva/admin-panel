import { EnumGender } from "@/types/EnumGender"
import { EnumRole } from "@/types/EnumRole"

export class Employee {
    id?: number
    firstName?: string
    lastName?: string
    enumGender?: EnumGender
    email?: string
    birthDate?: string
    rg?: string
    cpf?: string
    enumRole?: EnumRole
    salary?: string
    cep?: string
    logradouro?: string
    complemento?: string
    bairro?: string
    localidade?: string
    uf?: string
    admissionDate?: string
    createdAt?: string
}
