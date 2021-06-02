import { Card, Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BudgetTracker() {
  return (
    <Container className="my-5 p-5">
      <Row>
        <Jumbotron>
          <h1>Simple Budget Tracker</h1>
          <p>
            This Simple Budget Tracker app lets you record your income and
            expenses with ease.
          </p>
          <p>
            <Button
              variant="primary"
              size="sm"
              as={Link}
              to="/register"
              Register
            >
              Register Now!
            </Button>
          </p>
        </Jumbotron>
      </Row>
    </Container>
  );
}
