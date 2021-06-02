import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateIncome from "./../components/UpdateIncome";

export default function IncomeSingle() {
  const { id } = useParams();
  const [income, setIncome] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdatedIncome, setLastUpdatedIncome] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/api/income/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIncome(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [lastUpdatedIncome]);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={10} md={6} className="mx-auto">
          <UpdateIncome income={income} />
        </Col>
      </Row>
    </Container>
  );
}
