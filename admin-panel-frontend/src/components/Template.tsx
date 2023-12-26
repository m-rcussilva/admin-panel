"use client"

import { useState } from "react"
import styles from "./Template.module.css"
import { MdAdminPanelSettings } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import { MdDashboard } from "react-icons/md"
import { MdOutlineSettings } from "react-icons/md"
import { FaPowerOff } from "react-icons/fa"
import { useRouter } from "next/navigation"

interface TemplateProps {
    children: React.ReactNode
}

export function Template({ children }: TemplateProps) {
    return (
        <>
            <Sidebar />
            <div className={styles.GlobalContainer}>{children}</div>
        </>
    )
}

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const router = useRouter()

    const toggleMenu = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const handleLogout = () => {
        router.push("/login")
    }

    return (
        <aside
            className={`${styles.SidebarContainer} ${
                isSidebarOpen ? "" : styles.OpenSidebar
            }`}
        >
            <button className={styles.Toggle} onClick={toggleMenu}>
                <span>
                    {isSidebarOpen ? (
                        <GiHamburgerMenu size={24} title={"Open"} />
                    ) : (
                        <IoMdClose size={24} title={"Close"} />
                    )}
                </span>
            </button>

            <header className={styles.HeaderLogo}>
                <MdAdminPanelSettings size={38} />
                <h3>Painel Administrativo</h3>
            </header>

            <ul className={styles.SidebarUl}>
                <li className={styles.SidebarLi}>
                    <button className={styles.ButtonLogout}>
                        <MdDashboard /> <span>Dashboard</span>
                    </button>
                </li>

                <li className={styles.SidebarLi}>
                    <button className={styles.ButtonLogout}>
                        <MdOutlineSettings /> <span>Configurações</span>
                    </button>
                </li>

                <li className={styles.SidebarLi}>
                    <button
                        className={styles.ButtonLogout}
                        onClick={handleLogout}
                    >
                        <FaPowerOff /> <span>Sair</span>
                    </button>
                </li>
            </ul>
        </aside>
    )
}
