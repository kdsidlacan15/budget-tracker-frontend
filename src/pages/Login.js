import LoginForm from './../components/LoginForm'
import {Container,Row,Col} from 'react-bootstrap'
export default function Login(){
	return(

	<Container className="my-5">
		<Row>
			<Col className="mx-auto" xs={12} sm={10} md={6}>
					<LoginForm />
			</Col>
		</Row>
	</Container>	
	)
}
