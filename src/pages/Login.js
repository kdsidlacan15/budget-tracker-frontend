import LoginForm from "./../components/LoginForm";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [isRedirect, setIsRedirect] = useState(false);
  return isRedirect ? (
    <Redirect to="Profile" />
  ) : (
    <div className="background-lightseagreen">
      <Container className="my-5">
        <Row>
          <Col className="mx-auto" xs={12} sm={10} md={6}>
            <LoginForm setIsRedirect={setIsRedirect} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
