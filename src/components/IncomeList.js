import { Container, Row } from 'react-bootstrap'
import IncomeListItem from './IncomeListItem'
export default function IncomeList(){
	return(
		<Container className="my-5">
			<Row>
				<IncomeListItem />
			</Row>
		</Container>
	)
}