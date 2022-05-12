import React from 'react'
import s from "./navbar.module.scss"
export default function Navbar({handler}) {
    return (
        <nav className={s.navbar}>
            <a href="/">Student Enrollment Form</a>
        </nav>
    )
}
