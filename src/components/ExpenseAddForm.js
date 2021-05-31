import {Card, Form, Button } from 'react-bootstrap'
import { useState } from 'react'

export default function ExpenseAddForm () {

	const [input, setInput] = useState({
		category: '',
		entry: '',
		value: ''
	})

	const handleSubmit = e => {
		e.preventDefault()
		fetch('http://localhost:4000/api/expenses' , {
			method: "POST",
			body: JSON.stringify(input),
			headers: {
				"Content-Type" : "application/json"
			}
		})
		.then(res=> res.json())
		.then(data=> {
			console.log(data)
		})
		//reset the form
		setInput({
			category: "",
			entry: "",
			value: ""
		})
	}

	const handleChange = e=> {
		setInput({
			...input,
			[e.target.id] : e.target.value
		})
	}
	return (
		<Card>
		   <Card.Title>Add Expense</Card.Title>
			<Form onSubmit={handleSubmit}>
		  		<Form.Group controlId="category">
		    		<Form.Label>Category</Form.Label>
		    		<Form.Control 
		    			type="text" 
		    			placeholder="Enter category" 
		    			onChange={handleChange}
		    			value={input.category}
		    			size="sm"
		    		/>
		  		</Form.Group>

		  		<Form.Group controlId="entry">
		    		<Form.Label>Entry</Form.Label>
		    		<Form.Control 
		    			type="text" 
		    			placeholder="Entry"
		    			onChange={handleChange}
		    			value={input.entry}
		    			size="sm"
		    		/>
		  		</Form.Group>

		  		<Form.Group controlId="value">
		    		<Form.Label>Value</Form.Label>
		    		<Form.Control 
		    			type="number" 
		    			placeholder="Enter Amount"
		    			onChange={handleChange}
		    			value={input.value}
		    			size="sm" 
		    		/>
		  		</Form.Group>
		  <Button variant="danger" type="submit" size="sm">
		    Submit
		  </Button>
			</Form>
		</Card>
	)
}