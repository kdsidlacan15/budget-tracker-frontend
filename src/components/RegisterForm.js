import { Form, Button, Jumbotron } from "react-bootstrap";
import { useState } from "react";

export default function RegisterForm({ setIsRedirect }) {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://stark-reef-70845.herokuapp.com/api/users", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        if (res.status === 200) {
          alert("Registration Successfull");
          setIsRedirect(true);
          return res.json();
        } else {
          alert("Invalid Credentials, Please Check your Input");
          throw new Error("Invalid Credentials");
        }
      })
      .catch((err) => console.log(err));

    // reset the form
    setCredentials({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <Jumbotron>
      <Form className="smaller-input" onSubmit={handleSubmit}>
        <Form.Group className="smaller-input" controlId="firstName">
          <Form.Label className="smaller-input">First Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            value={credentials.firstName}
            size="sm"
            className="smaller-input"
          />
        </Form.Group>

        <Form.Group className="smaller-input" controlId="lastName">
          <Form.Label className="smaller-input">Last Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            value={credentials.lastName}
            size="sm"
            className="smaller-input"
          />
        </Form.Group>

        <Form.Group className="smaller-input" controlId="email">
          <Form.Label className="smaller-input">Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={credentials.email}
            size="sm"
            className="smaller-input"
          />
        </Form.Group>

        <Form.Group className="smaller-input" controlId="password">
          <Form.Label className="smaller-input">Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={credentials.password}
            size="sm"
            className="smaller-input"
          />
        </Form.Group>

        <Form.Group className="smaller-input" controlId="confirmPassword">
          <Form.Label className="smaller-input">Confirm Password:</Form.Label>
          <Form.Control
            className="smaller-input"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={credentials.confirmPassword}
            size="sm"
          />
        </Form.Group>

        {isLoading ? (
          <Button className="smaller-input" type="submit" disabled size="sm">
            Submit
          </Button>
        ) : (
          <Button className="smaller-input" type="submit" size="sm">
            Submit
          </Button>
        )}
      </Form>
    </Jumbotron>
  );
}
