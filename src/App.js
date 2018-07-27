import React, { Component } from 'react'
import PropTypes from 'prop-types'

// imports ListContacts component 
import ListContacts from './ListContacts'

//imports everything as contacts API
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
	
//contacts variable is mooved inside of state of our component 
//so our App component is going to manage that state 
//everytime that state changes React will be able to knowabout it 
// and will update UI based on that state change
	
//we add a state property to our class component  
	state = {
		
//instead of having data it is obviously going to be an empty array 
//adds a lifecycle event to our component (lifecycle event in which we should make API requests)
	 contacts: []
	}

//adds a lifecycle event to our component (lifecycle event in which we should make API requests)
//componentDidMount will ge invoked by react immidiately after that component gets mounted to the view	
  	componentDidMount(){
//immidiately after that happens we want to call ContactsAPI.getAll, which will return us a propmis (so we can call .then)
//this function will be invoked with contacts 
		ContactsAPI.getAll().then((contacts) => {
//sets our state, with key - contacts and value is the contacts that we are getting from the API request
			this.setState({ contacts: contacts })
		})
	} 
//method that removes the specific contact 
//(the contact which was clicked by filtering it out of the state)

	removeContact = (contact) => {
		this.setState((state) => ({
			contacts: state.contacts.filter((c) => c.id !== contact.id)
		})) 
		
		ContactsAPI.remove(contact)
	}

	render() {
		return (
		<div>
			<ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
			</div>
		)
	}
}

export default App 



