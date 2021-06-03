import { Col, Container, Row } from "react-bootstrap";
import ExpenseListItem from "./ExpenseListItem";
import { useEffect, useState } from "react";

export default function ExpenseList() {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    let access = localStorage.getItem("token");
    fetch("https://stark-reef-70845.herokuapp.com/api/expenses/", {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setExpense(data);
        console.log(data);
      })

      .catch((err) => console.log(err));
  }, []);

  const expenseDisplay = expense.map((expense) => {
    return (
      <Col xs={12} sm={6} md={4} lg={3} key={expense._id}>
        <ExpenseListItem expense={expense} />
      </Col>
    );
  });

  return (
    <Container>
      <Row>{expenseDisplay}</Row>
    </Container>
  );
}
