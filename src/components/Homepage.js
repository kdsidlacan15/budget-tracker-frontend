import { Container, Row, Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BudgetTracker() {
  return (
    <Container className="my-5 p-5">
      <Row>
        <Jumbotron>
          <h1>Simple Transactions Tracker</h1>
          <p>
            This Simple Transaction Tracker app lets you record your income and
            expenses with ease.
          </p>
          <p>
            <Button variant="primary" size="sm" as={Link} to="/register">
              Register Now!
            </Button>
          </p>
        </Jumbotron>
      </Row>
    </Container>
  );
}
