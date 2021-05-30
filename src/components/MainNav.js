import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MainNav() {
	return (
		<Navbar bg="light" expand="md">
		  <Navbar.Brand as={Link} to="#home">Home</Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="ml-auto">
		      <Nav.Link as={Link} to="/login">Login</Nav.Link>
		      <Nav.Link as={Link} to="/register">Register</Nav.Link>
		      <Nav.Link>Logout</Nav.Link>
		    </Nav>
		    
		  </Navbar.Collapse>
		</Navbar>
	)
}
