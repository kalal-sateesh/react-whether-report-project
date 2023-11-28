import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const AppHeader = () => {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Weather Report</Navbar.Brand>
          <Navbar.Brand>
            <img
              src="https://cdn-icons-png.flaticon.com/128/12276/12276416.png"
              width="25%"
              height="25%"
            />
          </Navbar.Brand>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </header>
  );
};
export default AppHeader;
