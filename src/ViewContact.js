import React from "react"
import ContactsData from "./ContactsData.json"
import "./ViewContact.css"

const ViewContact = props => {
  const { name, phone, email } = ContactsData.find(x => x.id === parseInt(props.match.params.id))

  return (
    <div className="ViewContact">
      <h1>{`${name}'s Contact`}</h1>
      <p>
        Name: <span>{name}</span>
      </p>
      <p>
        Phone: <span>{phone}</span>
      </p>
      <p>
        Email: <span>{email}</span>
      </p>
      <button type="button" className="btn btn-outline-danger">
        Delete
      </button>
      <button type="button" className="btn btn-outline-dark">
        Edit
      </button>
    </div>
  )
}

export default ViewContact
