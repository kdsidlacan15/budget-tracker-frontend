import {Card, Container, Row, Col, Jumbotron} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function BudgetTracker () {
	
	return (
		<Container className="my-5 p-5">
		<Row>
			<Col xs={12} sm={6} md={4} lg={3}>
				<Jumbotron>
					
				<Card style={{ width: '18rem' }}>
  					<Card.Body>
    					<Card.Title>Simple Budget Tracker</Card.Title>
    					<Card.Subtitle className="mb-2 text-muted">Track your transactions</Card.Subtitle>
    					<Card.Text>
      					This Simple Budget Tracker app lets you record your income and expenses with ease.
    					</Card.Text>
    					<Card.Link as={Link} to='/income'>Add Income</Card.Link>
    					<Card.Link as={Link} to='/expense'>Add Expense</Card.Link>
  					</Card.Body>
				</Card>
				</Jumbotron>
			</Col>	
		</Row>
	</Container>
	)
}