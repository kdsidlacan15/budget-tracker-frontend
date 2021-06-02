import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ApplicationContext } from "../contexts/ApplicationContext";

export default function IncomeListItem({ income, setLastDeletedIncome }) {
  const { user } = useContext(ApplicationContext);

  const handleClickDelete = () => {
    let access = localStorage.getItem("token");
    fetch(`http://localhost:4000/api/income/${income._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
  };
  return (
    <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <th></th>
          <th>Transaction</th>
          <th>Category</th>
          <th>Entry</th>
          <th>Value</th>
          <th>
            {" "}
            <Button
              variant="outline-info"
              className="mx-2"
              size="sm"
              as={Link}
              to="/IncomeUpdate"
            >
              Update
            </Button>{" "}
          </th>
        </tr>
        <tr>
          <td>
            {" "}
            <Button
              variant="outline-dark"
              className="mx-2"
              size="sm"
              as={Link}
              to="/Profile"
            >
              Back
            </Button>{" "}
          </td>
          <td>Income</td>
          <td>{income.category}</td>
          <td>{income.entry}</td>
          <td>{income.value}</td>

          <td>
            {" "}
            <Button
              variant="outline-danger"
              size="sm"
              as={Link}
              to="/IncomeTransactionListPage"
              onClick={handleClickDelete}
            >
              Delete
            </Button>{" "}
          </td>
        </tr>
      </tbody>
    </Table>

    // <Card>
    //   <Card.Body>
    //     <Card.Title>Incomes</Card.Title>
    //     <Card.Text>Category: {income.category}</Card.Text>
    //     <Card.Text>Entry: {income.entry}</Card.Text>
    //     <Card.Text>Value: {income.value}</Card.Text>
    //     <Button className="my-1" size="sm" variant="info" block>
    //       Update
    //     </Button>
    //     <Button className="my-1" size="sm" variant="danger" block>
    //       Delete
    //     </Button>
    //   </Card.Body>
    // </Card>
  );
}
