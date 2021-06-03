import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ApplicationContext } from "../contexts/ApplicationContext";

export default function ExpenseListItem({ expense, setLastDeletedExpense }) {
  // const { user } = useContext(ApplicationContext);

  const handleClickDelete = () => {
    let access = localStorage.getItem("token");
    fetch(`http://localhost:4000/api/expenses/${expense._id}`, {
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
                <td>Expenses</td>
                <td>{expense.category}</td>
                <td>{expense.entry}</td>
                <td>{expense.value}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="light" size="sm" as={Link} to="/Profile">
            Back
          </Button>
          <Button
            size="sm"
            as={Link}
            to="/ExpenseTransactionListPage"
            variant="danger"
            onClick={handleClickDelete}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
