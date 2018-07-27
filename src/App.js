import React, { Component } from 'react'
import PropTypes from 'prop-types'

// imports ListContacts component 
import ListContacts from './ListContacts'


class App extends Component {
	
//contacts variable is mooved inside of state of our component 
//so our App component is going to manage that state 
//everytime that state changes React will be able to knowabout it 
// and will update UI based on that state change
	
//we add a state property to our class component  
	state = {
		
//paste contacts array inside of a state object		
	 contacts: [
  {
    "id": "ryan",
    "name": "Ryan Florence",
    "email": "ryan@reacttraining.com",
    "avatarURL": "http://localhost:5001/ryan.jpg"
  },
  {
    "id": "michael",
    "name": "Michael Jackson",
    "email": "michael@reacttraining.com",
    "avatarURL": "http://localhost:5001/michael.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "email": "tyler@reacttraining.com",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }]}
	
//method that removes the specific contact 
//(the contact which was clicked by filtering it out of the state)

	removeContact = (contact) => {
		this.setState((state) => ({
			contacts: state.contacts.filter((c) => c.id !== contact.id)
		}))
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



