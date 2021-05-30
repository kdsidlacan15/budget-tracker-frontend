import { Card, Button } from 'react-bootstrap';

export default function TransactionListItem(){
	return(
		<Card>
			<Card.Body>
				<Card.Title>Add Income</Card.Title>
				<Card.Text>__Category__</Card.Text>
				<Card.Text>__Entry__</Card.Text>
				<Card.Text>__price__</Card.Text>
				<Button className="my-1" variant="primary" block>Submit</Button>
			</Card.Body>
		</Card>
	)
}
