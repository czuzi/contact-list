import React from "react"
import { Link } from "react-router-dom"
import "./Contact.css"

function Contact(props) {
  const { id, name, phone, email } = props
  return (
    <div className="Contact">
      <Link to={`/${id}`}>
        <div className="card-title">{name}</div>
      </Link>
      <p className="Contact-data">{email}</p>
      <p className="Contact-data">{phone}</p>
    </div>
  )
}

export default Contact
