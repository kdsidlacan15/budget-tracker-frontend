import {Form, Button, Jumbotron} from 'react-bootstrap'
import {useState} from 'react'

export default function RegisterForm () {
	const [credentials, setCredentials] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: ""
	})
	const [isLoading, setIsLoading] = useState(false)


	const handleSubmit = e => {
		e.preventDefault()
		setIsLoading(true)
		fetch('http://localhost:4000/api/users', {
			method: "POST",
			body: JSON.stringify(credentials),
			headers: {
				"Content-Type" : "application/json"
			}
		})
		.then(res=> res.json())
		.then(data=> {
			setIsLoading(false)
			console.log(data)
		})
		.catch(err=> console.log(err))

		// reset the form
		setCredentials({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: ""
		})
	}
	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.id] : e.target.value
		})
	}
	return(
		<Jumbotron>
			
		<Form onSubmit={handleSubmit}>
	 	 <Form.Group controlId="firstName">
	   		<Form.Label>First Name:</Form.Label>
	    	<Form.Control 
	    		type="text"
	    		placeholder="First Name"
	    		onChange={handleChange}
	    		value={credentials.firstName}
	    		size="sm"
	    	 />
	 	 </Form.Group>

	 	 <Form.Group controlId="lastName">
	    	<Form.Label>Last Name:</Form.Label>
	    	<Form.Control 
	    		type="text" 
	    		placeholder="Last Name" 
	    		onChange={handleChange}
	    		value={credentials.lastName}
	    		size="sm" 
	    	/>
	 	 </Form.Group>

	 	 <Form.Group controlId="email">
	    	<Form.Label>Email:</Form.Label>
	    	<Form.Control 
	    		type="email" 
	    		placeholder="Email" 
	    		onChange={handleChange} 
	    		value={credentials.email}
	    		size="sm"
	    	/>
	 	 </Form.Group>

	 	 <Form.Group controlId="password">
	    	<Form.Label>Password:</Form.Label>
	    	<Form.Control 
	    		type="password" 
	    		placeholder="Password" 
	    		onChange={handleChange} 
	    		value={credentials.password}
	    		size="sm"
	    	/>
	 	 </Form.Group>

	 	 <Form.Group controlId="confirmPassword">
	    	<Form.Label>Confirm Password:</Form.Label>
	    	<Form.Control 
	    		type="password" 
	    		placeholder="Confirm Password" 
	    		onChange={handleChange} 
	    		value={credentials.confirmPassword}
	    		size="sm"
	    	/>
	 	 </Form.Group>

	 	 {
	 	 	isLoading ? 
	  		<Button type="submit"disabled size="sm">Submit</Button>
	  	 :  <Button type="submit" size="sm">Submit</Button>
	  	
	 	 }

		</Form>
		</Jumbotron>
	)
}