import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../contexts/ApplicationContext";
import { useContext } from "react";
export default function IncomeListItem() {
  const { income } = useContext(ApplicationContext);
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
                <td>{income.category}</td>
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
          <Button size="sm" as={Link} to="/">
            Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
