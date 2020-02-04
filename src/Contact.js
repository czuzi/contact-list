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
      <div className="Contact-data">
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Contact
