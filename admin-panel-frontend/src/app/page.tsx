import styles from "./page.module.css"

export default function Home() {
    return (
        <div className={styles.HomeContainer}>
            <main className={styles.HomeMain}>
                <h1 className={styles.HomeTitle}>Painel Administrativo</h1>
                <h3>Faça o seu Login</h3>

                <form action="">
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="" />

                    <label htmlFor="">Senha</label>
                    <input type="password" name="" id="" />
                </form>
            </main>
        </div>
    )
}
