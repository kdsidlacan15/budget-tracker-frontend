import { Col, Table } from "react-bootstrap";
import ExpenseListItem from "./ExpenseListItem";
import { useEffect, useState } from "react";

export default function ExpenseList() {
  const [expense, setExpense] = useState([]);
  const [lastDeletedExpense, setLastDeletedExpense] = useState({});

  useEffect(() => {
    let access = localStorage.getItem("token");
    fetch("http://localhost:4000/api/expenses/", {
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
  }, [lastDeletedExpense]);

  const expenseDisplay = expense.map((expense) => {
    return (
      <Col xs={12} sm={6} md={4} lg={3} key={expense._id}>
        <ExpenseListItem
          expense={expense}
          setLastDeletedExpense={setLastDeletedExpense}
        />
      </Col>
    );
  });

  return <Col>{expenseDisplay}</Col>;
}
