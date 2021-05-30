import { Container, Row, Col } from 'react-bootstrap';
import TransactionListItem from './TransactionListItem'

export default function TransactionList(){
	return(
		<Container className="my-5">
			<Row>
				<Col xs={12} sm={6} md={4} lg={3}>
					<TransactionListItem />
				</Col>
			</Row>
		</Container>
	)
}
