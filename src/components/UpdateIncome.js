import { Card, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function UpdateIncome({ income }) {
  const [currentIncome, setCurrentIncome] = useState({});

  const handleChange = (e) => {
    setCurrentIncome({
      ...currentIncome,
      [e.target.id]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch(`http://localhost:4000/api/income/${income._id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(currentIncome),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setCurrentIncome(data))
  //     .catch((err) => console.log(err));
  // };

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Category:</Form.Label>
            <Form.Control type="text" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Entry:</Form.Label>
            <Form.Control type="text" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="price">
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
