import React from "react"
import Logo from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">Scrimba - React Course</h4>
        </nav>
    )
}