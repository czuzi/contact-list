import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "./vodafone_logo.svg"
import "./Header.css"

function Header() {
	return (
		<div className="container">
			<Link to="/contact-list">
				<Logo className="header-logo" />
			</Link>
		</div>
	)
}

export default Header
