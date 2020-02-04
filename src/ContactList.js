import React, { Component } from "react"
import { Link } from "react-router-dom"
import Contact from "./Contact"
import "./ContactList.css"
import { ContactsData } from "./ContactsData.json"

class ContactList extends Component {
  constructor() {
    super()
    this.state = { search: "" }
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) })
  }

  render() {
    let filteredContacts = ContactsData.filter(
      contact => contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    )

    return (
      <div className="container contact-list">
        <div className="search">
          <input
            className="form-control"
            type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            placeholder="Search for contract"
          />
        </div>
        <h1>Contacts</h1>
        <hr />
        <div className="row row-cols-1 row-cols-md-3">
          {filteredContacts.map(c => (
            <div className="col">
              <Contact key={c.id} id={c.id} name={c.name} phone={c.phone} email={c.email} />
            </div>
          ))}
        </div>
        <Link to="/addcontact">
          <div className="plus"></div>
        </Link>
      </div>
    )
  }
}

export default ContactList
