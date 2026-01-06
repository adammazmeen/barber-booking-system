import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Barber Booking System
        </Navbar.Brand>

        <Nav>
          <Nav.Link as={Link} to="/">
            Price List
          </Nav.Link>
          <Nav.Link as={Link} to="/bookings">
            Bookings
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
