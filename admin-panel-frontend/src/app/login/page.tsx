"use client"

import { useRouter } from "next/navigation"
import styles from "./login.module.css"
import { useState } from "react"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const adminCredentials = {
            email: "admin@email.com",
            password: "admin"
        }

        const enteredEmail = email
        const enteredPassword = password

        if (
            enteredEmail == adminCredentials.email &&
            enteredPassword == adminCredentials.password
        ) {
            router.push("/employees")
        } else {
            console.log("Email ou senha inválido")
        }
    }

    return (
        <div className={styles.HomeContainer}>
            <main className={styles.HomeMain}>
                <h1 className={styles.HomeTitle}>Painel Administrativo</h1>

                <form
                    action=""
                    className={styles.HomeLoginForm}
                    onSubmit={handleOnSubmit}
                >
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />

                    <label htmlFor="">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />

                    <div className={styles.HomeLoginFormButtonContainer}>
                        <button className={styles.LoginSubmitButton}>
                            Entrar
                        </button>
                    </div>
                </form>
            </main>
        </div>
    )
}
