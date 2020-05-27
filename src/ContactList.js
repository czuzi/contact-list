import React, { useState } from "react"
import { Link } from "react-router-dom"
import Contact from "./Contact"
import "./ContactList.css"

function ContactList() {
	const ContactsData = [
		{ id: 1, name: "Kiss Bence", phone: "+36707070700", email: "bence.kiss@kissbence.hu" },
		{ id: 2, name: "Kovács Ibolya", phone: "+36707070456", email: "ibolya.kovacs@kovacsibolya.hu" },
		{ id: 3, name: "Nagy Dávid", phone: "+36707070441", email: "david.nagy@nagydavid.hu" },
		{ id: 4, name: "Apro Bálint", phone: "+36707070568", email: "balint.apro@aprobalint.hu" },
		{ id: 5, name: "Czöndör László", phone: "+36707070213", email: "laszlo.czondor@czondorlaszlo.hu" },
		{ id: 6, name: "Nagy Renáta", phone: "+36707070187", email: "renata.nagy@nagyrenata.hu" },
		{ id: 7, name: "Dávid Zoltán", phone: "+36707070487", email: "zoltan.david@davidzoltan.hu" },
		{ id: 8, name: "Tóth Tamás", phone: "+36707070264", email: "tamas.toth@tothtamas.hu" },
		{ id: 9, name: "Fodor Bernadet", phone: "+36707070264", email: "bernadett.fodor@fodorbernadett.hu" },
	]

	const [searchTerm, setSearchTerm] = useState("")
	const handleChange = (e) => {
		setSearchTerm(e.target.value)
	}

	const filteredContacts = ContactsData.filter((contact) => contact.name.toLowerCase().includes(searchTerm))

	return (
		<div className="container contact-list">
			<div className="search">
				<input
					className="form-control"
					type="text"
					value={searchTerm}
					onChange={handleChange}
					placeholder="Search for contact"
				/>
			</div>
			<h1>Contacts</h1>
			<hr />
			<div className="row row-cols-1 row-cols-md-3">
				{filteredContacts.map((c) => (
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

export default ContactList
