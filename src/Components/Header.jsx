import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link className="header_Link" to="/">
              Logo
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
              <Link className="header_Link" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="header_Link" to="/users">
                Users
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
