import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ApplicationContext } from "../contexts/ApplicationContext";

export default function IncomeListItem({ income, setLastDeletedIncome }) {
  const { user } = useContext(ApplicationContext);

  const handleClickDelete = () => {
    let access = localStorage.getItem("token");
    fetch(`http://localhost:4000/api/income/${income._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
  };
  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Transaction</th>
                <th>Category</th>
                <th>Entry</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Income</td>
                <td>{income.category}</td>
                <td>{income.entry}</td>
                <td>{income.value}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="light" className="mx-2" size="sm" as={Link} to="/">
            Back
          </Button>
          <Button
            variant="danger"
            size="sm"
            as={Link}
            to="/"
            onClick={handleClickDelete}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </Container>
    // <Card>
    //   <Card.Body>
    //     <Card.Title>Incomes</Card.Title>
    //     <Card.Text>Category: {income.category}</Card.Text>
    //     <Card.Text>Entry: {income.entry}</Card.Text>
    //     <Card.Text>Value: {income.value}</Card.Text>
    //     <Button className="my-1" size="sm" variant="info" block>
    //       Update
    //     </Button>
    //     <Button className="my-1" size="sm" variant="danger" block>
    //       Delete
    //     </Button>
    //   </Card.Body>
    // </Card>
  );
}
