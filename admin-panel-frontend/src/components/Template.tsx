"use client"

import { useState } from "react"
import styles from "./Template.module.css"
import { MdAdminPanelSettings } from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import { MdDashboard } from "react-icons/md"
import { MdOutlineSettings } from "react-icons/md"
import { FaPowerOff } from "react-icons/fa"

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

    const toggleMenu = () => {
        setIsSidebarOpen(!isSidebarOpen)
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
                    <MdDashboard />
                    <label htmlFor="">Dashboard</label>
                </li>

                <li className={styles.SidebarLi}>
                    <MdOutlineSettings />
                    <label htmlFor="">Configurações</label>
                </li>

                <li className={styles.SidebarLi}>
                    <FaPowerOff />
                    <label htmlFor="">Sair</label>
                </li>
            </ul>
        </aside>
    )
}
