import { Col, Container, Row } from "react-bootstrap";
import IncomeListItem from "./IncomeListItem";
import { useContext, useEffect, useState } from "react";

export default function IncomeList() {
  const [income, setIncome] = useState([]);

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
  }, []);

  const incomeDisplay = income.map((income) => {
    return (
      <Col xs={12} sm={6} md={4} lg={3} key={income._id}>
        <IncomeListItem income={income} />
      </Col>
    );
  });

  return (
    <Container>
      <Row>{incomeDisplay}</Row>
    </Container>
  );
}
