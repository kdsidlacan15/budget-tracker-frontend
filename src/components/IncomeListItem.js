import { Container, Row, Col, Table } from 'react-bootstrap'
import IncomeAddForm from './IncomeAddForm'

export default function IncomeListItem () {
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
              <td>Income</td>
              <td>Cash</td>
              <td>Ayuda</td>
              <td>200</td>
            </tr>
              <tr>
                <td>Income</td>
                <td>Loan</td>
                <td>Debit</td>
                <td>250</td>
             </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
	)
}