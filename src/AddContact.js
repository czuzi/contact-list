import React, { Component } from "react"
import "./AddContact.css"

class AddNew extends Component {
  render() {
    return (
      <div className="AddNew container">
        <h2>Add New Contact</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input name="name" type="text" className="form-control" id="name" required />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input name="email" type="text" className="form-control" id="email" required />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input name="phone" type="text" className="form-control" id="phone" required />
          </div>
          <div className="input-button">
            <input type="submit" className="btn btn-outline-dark" value="Add Contact" />
          </div>
        </form>
      </div>
    )
  }
}

export default AddNew
