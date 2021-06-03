import { Card, Form, Button, Row } from "react-bootstrap";
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
    <Row>
      <Card>
        <Card.Body>
          <Form className="smaller-input" onSubmit={handleSubmit}>
            <Form.Group className="smaller-input" controlId="category">
              <Form.Label className="smaller-input">Category:</Form.Label>
              <Form.Control
                className="smaller-input"
                type="text"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="smaller-input" controlId="entry">
              <Form.Label className="smaller-input">Entry:</Form.Label>
              <Form.Control
                className="smaller-input"
                type="text"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="smaller-input" controlId="value">
              <Form.Label className="smaller-input">Value:</Form.Label>
              <Form.Control
                className="smaller-input"
                type="number"
                min="0"
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              variant="success"
              className="smaller-input"
              type="submit"
              size="sm"
            >
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
}
