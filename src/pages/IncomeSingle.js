import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateIncome from "./../components/UpdateIncome";
import IncomeListItem from "./../components/IncomeListItem";

export default function IncomeSingle() {
  const { id } = useParams();
  const [income, setIncome] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdatedIncome, setLastUpdatedIncome] = useState({});

  useEffect(() => {
    fetch(`https://stark-reef-70845.herokuapp.com/api/income/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIncome(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [lastUpdatedIncome]);

  return (
    <Container>
      <Row className="my-5">
        <Col xs={12} sm={10} md={6} className="mx-auto">
          {isLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden"></span>
            </Spinner>
          ) : (
            <IncomeListItem income={income} />
          )}
        </Col>
        <Col>
          <UpdateIncome
            income={income}
            setLastUpdatedIncome={setLastUpdatedIncome}
          />
        </Col>
      </Row>
    </Container>
  );
}
