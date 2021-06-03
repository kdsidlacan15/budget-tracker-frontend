import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function IncomeTableComp() {
  const [income, setIncome] = useState([]);
  const [lastDeletedIncome, setLastDeletedIncome] = useState({});
  useEffect(() => {
    let access = localStorage.getItem("token");
    fetch("https://stark-reef-70845.herokuapp.com/api/income/", {
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
      fetch(`https://stark-reef-70845.herokuapp.com/api/income/${income._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
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
          <td>{income.createdAt}</td>
          <td>
            {" "}
            <Button
              variant="outline-danger"
              className="mx-1 smaller-input"
              size="sm"
              as={Link}
              to="/IncomeTable"
              onClick={handleClickDelete}
            >
              Delete
            </Button>{" "}
            <Button
              variant="outline-info"
              className="mx-1, smaller-input"
              size="sm"
              as={Link}
              to={`/income/${income._id}`}
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
                <th>Date</th>
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
            {incomeDisplay}
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
