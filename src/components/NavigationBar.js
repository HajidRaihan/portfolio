import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="/">HARA</Navbar.Brand>
          <Nav>
            <Nav.Link href="#profile">PROFILE</Nav.Link>
            <Nav.Link href="#project">PROJECT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
