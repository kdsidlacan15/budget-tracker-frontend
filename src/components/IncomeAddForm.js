import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function IncomeAddForm() {
  const [input, setInput] = useState({
    category: "",
    entry: "",
    value: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let access = localStorage.getItem("token");
    fetch("https://stark-reef-70845.herokuapp.com/api/income", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    //reset the form
    setInput({
      category: "",
      entry: "",
      value: "",
    });
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card className="smaller-input">
            <Card.Title className="m-auto">Add Income</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="smaller-input m-auto" controlId="category">
                <Form.Label className="smaller-input">Category</Form.Label>
                <Form.Control
                  className="smaller-input"
                  type="text"
                  placeholder="Enter category"
                  onChange={handleChange}
                  value={input.category}
                  size="sm"
                />
              </Form.Group>

              <Form.Group className="smaller-input" controlId="entry">
                <Form.Label className="smaller-input">Entry</Form.Label>
                <Form.Control
                  className="smaller-input"
                  type="text"
                  placeholder="Entry"
                  onChange={handleChange}
                  value={input.entry}
                  size="sm"
                />
              </Form.Group>

              <Form.Group className="smaller-input" controlId="value">
                <Form.Label className="smaller-input">Value</Form.Label>
                <Form.Control
                  className="smaller-input"
                  type="number"
                  placeholder="Enter Amount"
                  onChange={handleChange}
                  value={input.value}
                  size="sm"
                />
              </Form.Group>

              <Button
                variant="success"
                type="submit"
                size="sm"
                className="smaller-input mr-1"
              >
                Submit
              </Button>
              <Button
                as={Link}
                to="IncomeTable"
                variant="secondary"
                size="sm"
                className="smaller-input"
              >
                Check Incomes
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
