import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

export default function AddIncomeList(){
	return(
		<Container className="my-5">
			<Row>
				<Col xs={12} sm={6} md={4} lg={3}>
				<Card>
					<Card.Body>
						<Card.Title>Add Transaction</Card.Title>
						<Form>
  							<Form.Group controlId="formBasicEmail">
    							<Form.Label>Category</Form.Label>
   								<Form.Control type="category" placeholder="Enter Category" />
 							 </Form.Group>
 							 <Form.Group controlId="formBasicEmail">
    							<Form.Label>Entry</Form.Label>
   								<Form.Control type="entry" placeholder="Enter Entry" />
 							 </Form.Group>
 							 <Form.Group controlId="formBasicEmail">
    							<Form.Label>Amount</Form.Label>
   								<Form.Control type="entry" placeholder="Enter Amount" />
 							 </Form.Group>
 						</Form>	 
						<Button className="my-1" variant="primary" block>Add Income</Button>
						<Button className="my-1" variant="danger" block>Add Expense</Button>
					</Card.Body>
				</Card>
				</Col>
			</Row>
		</Container>
	)
}