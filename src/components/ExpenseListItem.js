import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ExpenseListItem () {
	return (
		 <Container className="my-5">
      <Row className="justify-content-md-center">
       <Col md="auto">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Transaction Type</th>
              <th>Category</th>
              <th>Entry</th>
              <th>Value</th>
            </tr>
         </thead>
          <tbody>
            <tr>
              <td>Expense</td>
              <td>Food</td>
              <td>Burger</td>
              <td>200</td>
            </tr>
              <tr>
                <td>Expense</td>
                <td>Utilities</td>
                <td>Electricity</td>
                <td>5000</td>
             </tr>
            </tbody>
          </Table>
          <Button size="sm" as={Link} to='/'>Back</Button>
        </Col>
      </Row>
    </Container>
	)
}