import RegisterForm from "./../components/RegisterForm";
import { Container, Row, Col } from "react-bootstrap";
export default function Register() {
  return (
    <Container className="my-3">
      <Row>
        <Col className="mx-auto" xs={12} sm={10} md={6}>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
}
