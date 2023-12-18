import styles from "./login.module.css"

export default function LoginPage() {
    return (
        <div className={styles.HomeContainer}>
            <main className={styles.HomeMain}>
                <h1 className={styles.HomeTitle}>Painel Administrativo</h1>
                <h3>Faça o seu Login</h3>

                <form action="" className={styles.HomeLoginForm}>
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="" />

                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" />

                    <div className={styles.HomeLoginFormButtonContainer}>
                        <button>Submit</button>
                    </div>
                </form>
            </main>
        </div>
    )
}
