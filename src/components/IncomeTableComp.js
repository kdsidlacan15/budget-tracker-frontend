import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UpdateIncome from "./UpdateIncome";
export default function IncomeTableComp() {
  const [income, setIncome] = useState([]);
  const [lastDeletedIncome, setLastDeletedIncome] = useState({});
  useEffect(() => {
    let access = localStorage.getItem("token");
    fetch("http://localhost:4000/api/income/", {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIncome(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [lastDeletedIncome]);

  const incomeDisplay = income.map((income, index) => {
    const handleClickDelete = () => {
      let access = localStorage.getItem("token");
      fetch(`http://localhost:4000/api/income/${income._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setLastDeletedIncome(data);
        })
        .catch((err) => console.log(err));
    };
    return (
      <tbody key={index}>
        <tr>
          <td>Income</td>
          <td>{income.category}</td>
          <td>{income.entry}</td>
          <td>{income.value}</td>
          <td>
            {" "}
            <Button
              variant="outline-danger"
              className="mx-1"
              size="sm"
              as={Link}
              to="/IncomeTable"
              onClick={handleClickDelete}
            >
              Delete
            </Button>{" "}
            <Button
              variant="outline-info"
              className="mx-1"
              size="sm"
              as={Link}
              to="/IncomeSingle"
            >
              Update
            </Button>{" "}
            <Button
              className="mx-1"
              variant="outline-dark"
              size="sm"
              as={Link}
              to="/Profile"
            >
              Back
            </Button>{" "}
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <Container>
      <Row>
        <Col>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Transaction</th>
                <th>Category</th>
                <th>Entry</th>
                <th>Value</th>
                <th>Manage Transaction</th>
              </tr>
            </thead>
            {incomeDisplay}
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
