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
        <header>
            <h3>Painel Administrativo</h3>
        </header>
    )
}
