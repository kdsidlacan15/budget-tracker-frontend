import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function ExpenseTableComp() {
  const [expense, setExpense] = useState([]);
  const [lastDeletedExpense, setLastDeletedExpense] = useState({});
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
  }, [lastDeletedExpense]);

  const expenseDisplay = expense.map((expense, index) => {
    const handleClickDelete = () => {
      let access = localStorage.getItem("token");
      fetch(
        `https://stark-reef-70845.herokuapp.com/api/expenses/${expense._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setLastDeletedExpense(data);
        })
        .catch((err) => console.log(err));
    };
    return (
      <tbody key={index}>
        <tr>
          <td>Expense</td>
          <td>{expense.category}</td>
          <td>{expense.entry}</td>
          <td>{expense.value}</td>
          <td>
            {" "}
            <Button
              variant="outline-danger"
              className="mx-1 smaller-input"
              size="sm"
              as={Link}
              to="/ExpenseTable"
              onClick={handleClickDelete}
            >
              Delete
            </Button>{" "}
            <Button
              variant="outline-info"
              className="mx-1 smaller-input"
              size="sm"
              as={Link}
              to={`/expense/${expense._id}`}
            >
              Update
            </Button>{" "}
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <Table className="smaller-input" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Transaction</th>
                <th>Category</th>
                <th>Entry</th>
                <th>Value</th>
                <th>Manage Transaction</th>
                <th>
                  <Button
                    className="mx-1 smaller-input"
                    variant="outline-dark"
                    size="sm"
                    as={Link}
                    to="/Profile"
                  >
                    Back
                  </Button>{" "}
                </th>
              </tr>
            </thead>
            {expenseDisplay}
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
