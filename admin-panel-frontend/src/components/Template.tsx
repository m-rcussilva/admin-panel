import styles from "./Template.module.css"
import { MdAdminPanelSettings } from "react-icons/md"

interface TemplateProps {
    children: React.ReactNode
}

export function Template({ children }: TemplateProps) {
    return (
        <>
            <Header />
            <Sidebar />
            <div className={styles.GlobalContainer}>{children}</div>
        </>
    )
}

function Header() {
    return (
        <div className={styles.HeaderContainer}>
            <header className={styles.Header}>
                <div className={styles.HeaderLogo}>
                    <MdAdminPanelSettings size={38} />
                    <h3>Painel Administrativo</h3>
                </div>
            </header>
        </div>
    )
}

function Sidebar() {
    return (
        <aside className={styles.SidebarContainer}>
            <div className={styles.SidebarToggle}>
                <div
                    className={`${styles.Line} ${styles.LineOne}`}
                    id="lineOne"
                ></div>
                <div
                    className={`${styles.Line} ${styles.LineTwo}`}
                    id="lineTwo"
                ></div>
                <div
                    className={`${styles.Line} ${styles.LineThree}`}
                    id="lineThree"
                ></div>
            </div>

            <div>
                <h3>Dashboard</h3>
            </div>
        </aside>
    )
}
