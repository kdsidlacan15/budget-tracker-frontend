import { Col, Table } from "react-bootstrap";
import IncomeListItem from "./IncomeListItem";
import { useContext, useEffect, useState } from "react";
import ApplicationContext from "./../contexts/ApplicationContext";

export default function IncomeList() {
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

  const incomeDisplay = income.map((income) => {
    return (
      <Col xs={12} sm={6} md={4} lg={3} key={income._id}>
        <IncomeListItem
          income={income}
          setLastDeletedIncome={setLastDeletedIncome}
        />
      </Col>
    );
  });

  return <Col>{incomeDisplay}</Col>;
}
