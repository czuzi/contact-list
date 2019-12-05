import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Header from "./Header"
import ContactList from "./ContactList"
import AddContact from "./AddContact"
import ViewContact from "./ViewContact"

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route exact path="/addcontact" component={AddContact} />
        <Route path="/:id" component={ViewContact} />
      </Switch>
    </div>
  )
}

export default App
