import { Container, Row, Col } from "react-bootstrap";
import IncomeAddForm from "../components/IncomeAddForm";
import ExpenseAddForm from "../components/ExpenseAddForm";
export default function Profile() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="md-auto">
            <IncomeAddForm />
          </Col>
          <Col className="md-auto">
            <ExpenseAddForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
