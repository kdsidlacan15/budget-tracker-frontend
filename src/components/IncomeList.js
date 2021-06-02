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
      <tr>
        <td>
          <IncomeListItem
            income={income}
            setLastDeletedIncome={setLastDeletedIncome}
          />
        </td>
      </tr>
    );
  });

  return <Col>{incomeDisplay}</Col>;
}
