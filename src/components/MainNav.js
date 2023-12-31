import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ApplicationContext } from "./../contexts/ApplicationContext";

export default function MainNav() {
  const { user, setUser } = useContext(ApplicationContext);

  const handleClick = () => {
    setUser({
      userId: "",
      isAdmin: false,
      email: "",
      firstName: "",
      lastName: "",
    });

    localStorage.clear();
  };

  const navLinks = !user.userId ? (
    <>
      <Nav.Link as={Link} to="/">
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
      <Nav.Link as={Link} to="/register">
        Register
      </Nav.Link>
    </>
  ) : (
    <>
      <Nav.Link as={Link} to="/IncomeTable">
        Incomes
      </Nav.Link>
      <Nav.Link as={Link} to="/ExpenseTable">
        Expenses
      </Nav.Link>
      <Nav.Link as={Link} to="/Profile">
        Add Transactions
      </Nav.Link>
      <Nav.Link as={Link} to="/" onClick={handleClick}>
        Logout
      </Nav.Link>
    </>
  );

  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand>Simply™</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">{navLinks}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
