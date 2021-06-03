import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function UpdateIncome({ income, setLastUpdatedIncome }) {
  const [currentIncome, setCurrentIncome] = useState({});

  const handleChange = (e) => {
    setCurrentIncome({
      ...currentIncome,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://stark-reef-70845.herokuapp.com/api/income/${income._id}`, {
      method: "PUT",
      body: JSON.stringify(currentIncome),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setLastUpdatedIncome(data))
      .catch((err) => console.log(err));
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="category">
            <Form.Label>Category:</Form.Label>
            <Form.Control type="text" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="entry">
            <Form.Label>Entry:</Form.Label>
            <Form.Control type="text" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="value">
            <Form.Label>Value:</Form.Label>
            <Form.Control type="number" min="0" onChange={handleChange} />
          </Form.Group>

          <Button type="submit" size="sm">
            Update
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
