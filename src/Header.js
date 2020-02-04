import React, { Component } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "./vodafone_logo.svg"
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/">
          <Logo className="header-logo" />
        </Link>
      </div>
    )
  }
}

export default Header
