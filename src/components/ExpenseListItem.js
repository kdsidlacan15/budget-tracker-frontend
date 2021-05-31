import {Card, Form, Button } from 'react-bootstrap'
export default function ExpenseListItem () {
	return (
		<Card>
		   <Card.Title>Add Expense</Card.Title>
			<Form>
		  		<Form.Group controlId="category">
		    		<Form.Label>Category</Form.Label>
		    		<Form.Control type="category" placeholder="Enter category" />
		  		</Form.Group>

		  		<Form.Group controlId="entry">
		    		<Form.Label>Entry</Form.Label>
		    		<Form.Control type="entry" placeholder="Entry" />
		  		</Form.Group>

		  		<Form.Group controlId="value">
		    		<Form.Label>Value</Form.Label>
		    		<Form.Control type="value" placeholder="Enter Value" />
		  		</Form.Group>
		  <Button variant="danger" type="submit">
		    Submit
		  </Button>
			</Form>
		</Card>
	)
}