//screens in react are just components  

import React, { Component } from 'react'

//defines component class 
class CreateContact extends Component {
	render() {
		return (
		<div>Create Contact</div>
		)
	}
}

//we export it, so when we import it in App it will work
export default CreateContact