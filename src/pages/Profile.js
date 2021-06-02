import { Container, Row, Col } from "react-bootstrap";
import IncomeAddForm from "../components/IncomeAddForm";
import ExpenseAddForm from "../components/ExpenseAddForm";
export default function Profile() {
  return (
    <Container>
      <Row>
        <Col>
          <IncomeAddForm />
        </Col>
        <Col>
          <ExpenseAddForm />
        </Col>
      </Row>
    </Container>
  );
}
