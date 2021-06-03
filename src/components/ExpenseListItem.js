import { Card, Button, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ExpenseListItem({ expense, setLastDeletedExpense }) {
  // const { user } = useContext(ApplicationContext);

  return (
    <Container>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Expenses</Card.Title>
            <Card.Text>Category: {expense.category}</Card.Text>
            <Card.Text>Entry: {expense.entry}</Card.Text>
            <Card.Text>Value: {expense.value}</Card.Text>
            <Button
              as={Link}
              to="/ExpenseTable"
              className="my-1"
              size="sm"
              variant="outline-dark"
            >
              Back
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}
