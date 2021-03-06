import React from "react"
import { Switch, Route } from "react-router-dom"
import Header from "./Header"
import ContactList from "./ContactList"
import AddContact from "./AddContact"
import ViewContact from "./ViewContact"

function App() {
	return (
		<div className="App">
			<Header />

			<Switch>
				<Route exact path="/contact-list" component={ContactList} />
				<Route exact path="/contact-list/addcontact" component={AddContact} />
				<Route path="/contact-list/:id" component={ViewContact} />
			</Switch>
		</div>
	)
}

export default App
