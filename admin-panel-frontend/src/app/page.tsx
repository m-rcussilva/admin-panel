import styles from "./page.module.css"

export default function Home() {
    return (
        <div className={styles.HomeContainer}>
            <main className={styles.HomeMain}>
                <h1 className={styles.HomeTitle}>
                    Olá, bem vindo(a) ao Painel Administrativo
                </h1>
                <h3>Faça o seu Login</h3>
            </main>
        </div>
    )
}
