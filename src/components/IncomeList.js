import { Container, Row, Col } from 'react-bootstrap'
import IncomeListItem from './IncomeListItem'
import { useContext } from 'react'
import { ApplicationContext } from '../contexts/ApplicationContext'

export default function IncomeList(){

	let { income } = useContext(ApplicationContext)

	const incomeDisplay = income.map(income=>{
		console.log(income)
	return(
		<Col xs={12} sm={6} md={4} lg={3} key={income._id} >
			<IncomeListItem income={income} />
		</Col>

	)
	})
	return(
		<Container className="my-5">
			<Row>
				{ incomeDisplay }
			</Row>
		</Container>
	)
}