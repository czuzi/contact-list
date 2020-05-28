import React from "react"
import "./ViewContact.css"

const ViewContact = (props) => {
	return (
		<div className="ViewContact">
			<h1>{`${props.location.name}'s Contact`}</h1>
			<div className="Contact-details">
				<p>
					Name: <span>{props.location.name}</span>
				</p>
				<p>
					Phone: <span>{props.location.phone}</span>
				</p>
				<p>
					Email: <span>{props.location.email}</span>
				</p>
			</div>
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
