import { Form, Button, Jumbotron } from "react-bootstrap";
import { useState, useContext } from "react";
import { ApplicationContext } from "../contexts/ApplicationContext";

export default function LoginForm({ setIsRedirect }) {
  const { setUser } = useContext(ApplicationContext);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://stark-reef-70845.herokuapp.com/api/users/login", {
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
          alert("Login successful");
          return res.json();
        } else {
          alert("Invalid Credentials");
          throw new Error("Invalid Credentials");
        }
      })
      .then((token) => {
        let access = token.token;
        localStorage.setItem("token", access);
        // console.log(access);
        return fetch(
          "https://stark-reef-70845.herokuapp.com/api/users/details",
          {
            headers: {
              Authorization: `Bearer ${access}`,
            },
          }
        );
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { firstName, lastName, email, isAdmin } = data;
        setUser({
          userId: data._id,
          firstName,
          lastName,
          email,
          isAdmin,
        });
        setIsRedirect(true);
      })
      .catch((err) => console.log(err));
    // reset the form
    // setCredentials({
    //   email: "",
    //   password: "",
    // });
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Jumbotron>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            onChange={handleChange}
            value={credentials.email}
            size="sm"
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            onChange={handleChange}
            value={credentials.password}
            size="sm"
          />
        </Form.Group>

        {isLoading ? (
          <Button size="sm" type="submit" disabled>
            Login
          </Button>
        ) : (
          <Button size="sm" type="submit">
            Login
          </Button>
        )}
      </Form>
    </Jumbotron>
  );
}
