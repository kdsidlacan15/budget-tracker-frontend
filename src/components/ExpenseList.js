import { Container, Row } from 'react-bootstrap'
import ExpenseListItem from './ExpenseListItem'
export default function ExpenseList(){
	return(
		<Container className="my-5">
			<Row>
				<ExpenseListItem />
			</Row>
		</Container>
	)
}