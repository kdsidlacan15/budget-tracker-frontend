import { Card, Button, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function IncomeListItem({ income }) {
  // const { user } = useContext(ApplicationContext);

  return (
    <Container>
      <Col>
        <Card className="background-lightseagreen">
          <Card.Body>
            <Card.Title>Incomes</Card.Title>
            <Card.Text>Category: {income.category}</Card.Text>
            <Card.Text>Entry: {income.entry}</Card.Text>
            <Card.Text>Value: {income.value}</Card.Text>
            <Button
              as={Link}
              to="/IncomeTable"
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
