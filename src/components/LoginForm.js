import {Form, Button} from 'react-bootstrap'
import {useState } from 'react'

export default function LoginForm(){
	const [credentials, setCredentials] = useState({
		email: "",
		"password": ""
	})

	
	const [isLoading, setIsLoading] = useState(false)
	const handleSubmit = e => {
		e.preventDefault()
		setIsLoading(true)
		fetch('http://localhost:4000/api/users/login',{
			method: "POST",
			body: JSON.stringify(credentials),
			headers: {
				"Content-Type" : "application/json"
			}
		})
		.then( res => res.json())
		.then(data => {
			setIsLoading(false)
			console.log(data)
		})
		.catch(err => console.log(err))
	}



		const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.id] : e.target.value
		})
	}

	return (
		<Form onSubmit={handleSubmit}>
			
			<Form.Group controlId="email">
				<Form.Label>Email:</Form.Label>
				<Form.Control 
					type="email"
					onChange={handleChange}
					value={credentials.email} 
				/>
			</Form.Group>

			<Form.Group controlId="password">
				<Form.Label>Password:</Form.Label>
				<Form.Control 
					type="password"
					onChange={handleChange}
					value={credentials.password} 
				/>
			</Form.Group>

			{
				isLoading ?
				<Button type="submit"disabled>Login</Button>
			:   <Button type="submit">Login</Button>
			}
				

		</Form>
	)
}