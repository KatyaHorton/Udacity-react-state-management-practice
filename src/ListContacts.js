// imports React to build react componenet
// grabs the Component property out of React
import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

// builds our component using the class syntax  
// this component will map over each of contacts and display specific contact to the view    
class ListContacts extends Component {

state = {
		query: ''
	}

updateQuery = (query) => {
	this.setState({ query: query.trim() })
}
	

//method to reset our query

clearQuery = () => {
	this.setState({ query: '' })
}

// specifies the render property (required in React)
//sets how UI in this component will look like (ol in that case) 
	render() {
		
//map over ouur contacts which match the specific patternto find matching REGULAR EXPRESSIONS 
		let showingContacts  
//if this.state.query is truthy (meabibg someone has typed smth into input field)
		if (this.state.query) {
// 
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
		 	showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))
		} else {
//if nothing typed in the input field 
			showingContacts = this.props.contacts
		}
		
		showingContacts.sort(sortBy('name'));
//we access contacts array (value of the property(attribute) contacts which we assigned to the ListContacts component in the App.js file
	
		return (			
			<div className='list-contacts'>
			<div className='list-contacts-top'>
				<input 
					className='search-contacts'
					type='text'
					placeholder='Search contacts'
	//we want the value of this input to allwats be as this.setate.query
	//we want this.state.query to change whenever the input changes 
					value={this.state.query}
					onChange={(event) => this.updateQuery(event.target.value)}
			/>
			</div>
			
 {showingContacts.length !== this.props.contacts.length && (
 		<div className='showing-contacts'>
	 <span>Now showing {showingContacts.length} of {this.props.contacts.length}</span>
	 <button onClick={this.clearQuery}>Show all</button>
	 </div>
 )}

		<ol className='contact-list'>
			{showingContacts.map((contact) => 
				<li key={contact.id} className='contact-list-item'>
					
					<div className='contact-avatar' 
		   style={{ backgroundImage: `url(${contact.avatarURL})` }}/>
			
	<div className='contact-details'>
				<p>{contact.name}</p>
				<p>{contact.email}</p>
			</div>
			<button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
				Remove 
			</button>
				</li>	
		)}
			</ol>
			
			</div>
	
		)
	}
} 


export default ListContacts 