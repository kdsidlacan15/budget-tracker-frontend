import { Container, Row, Col } from "react-bootstrap";
import IncomeAddForm from "../components/IncomeAddForm";
import ExpenseAddForm from "../components/ExpenseAddForm";
export default function Profile() {
  return (
    <div>
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
    </div>
  );
}
