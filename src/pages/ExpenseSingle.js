import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateExpense from "./../components/UpdateExpense";
import ExpenseListItem from "./../components/ExpenseListItem";

export default function ExpenseSingle() {
  const { id } = useParams();
  const [expense, setExpense] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdatedExpense, setLastUpdatedExpense] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/api/expenses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setExpense(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [lastUpdatedExpense]);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={10} md={6} className="mx-auto">
          {isLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden"></span>
            </Spinner>
          ) : (
            <ExpenseListItem expense={expense} />
          )}
        </Col>
        <Col>
          <UpdateExpense
            expense={expense}
            setLastUpdatedExpense={setLastUpdatedExpense}
          />
        </Col>
      </Row>
    </Container>
  );
}
