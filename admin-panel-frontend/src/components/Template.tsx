import styles from "./Template.module.css"

interface TemplateProps {
    children: React.ReactNode
}

export function Template({ children }: TemplateProps) {
    return (
        <>
            <Header />
            <div className={styles.GlobalContainer}>{children}</div>
        </>
    )
}

function Header() {
    return (
        <div className={styles.HeaderContainer}>
            <header className={styles.Header}>
                <h3>Painel Administrativo</h3>
            </header>
        </div>
    )
}
