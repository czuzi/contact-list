import React, { Component } from "react"

class AddNew extends Component {
  render() {
    return (
      <div className="AddNew">
        <h2>Add New Contact</h2>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input name="name" type="text" className="form-control" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Email address</label>
            <input name="email" type="text" className="form-control" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Phone number</label>
            <input name="phone" type="text" className="form-control" id="phone" required />
          </div>
          <input type="submit" className="btn btn-outline-dark" />
        </form>
      </div>
    )
  }
}

export default AddNew
