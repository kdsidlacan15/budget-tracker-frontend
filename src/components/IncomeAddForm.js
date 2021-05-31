import {Card, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
export default function IncomeAddForm () {

	const [input,setInput] = useState({
		category: '',
		entry: '',
		value: ''
	})

	const handleChange = e => {
		setInput({
			...input,
			[e.target.id]: e.target.value
		})
	}

	const handleSubmit = e =>{
		e.preventDefault()
		fetch('http://localhost:4000/api/income',{
			method: "POST",
			body: JSON.stringify(input),
			headers: {
				"Content-Type" : "application/json"
			}
		})
		.then(res=> res.json())
		.then(data => {
			console.log(data)
			setInput(data)
		})
	}

	return (
		<Card>
		   <Card.Title>Add Income</Card.Title>
			<Form onSubmit={handleSubmit}>
		  		<Form.Group controlId="category">
		    		<Form.Label>Category</Form.Label>
		    		<Form.Control 
		    			type="category" 
		    			placeholder="Enter category"
		    			onChange={handleChange}
		    			value={input.category}
		    		/>
		  		</Form.Group>

		  		<Form.Group controlId="entry">
		    		<Form.Label>Entry</Form.Label>
		    		<Form.Control 
		    			type="entry" 
		    			placeholder="Entry"
		    			onChange={handleChange}
		    			value={input.entry}
		    		/>
		  		</Form.Group>

		  		<Form.Group controlId="value">
		    		<Form.Label>Value</Form.Label>
		    		<Form.Control 
		    			type="value" 
		    			placeholder="Enter Value" 
		    			onChange={handleChange}
		    			value={input.value}
		    		/>
		  		</Form.Group>
		  <Button variant="info" type="submit">
		    Submit
		  </Button>
			</Form>
		</Card>
	)
}