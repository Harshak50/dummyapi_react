import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";
import { Button } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";

export const Navv = () => {
  const { logout,data } = useAuth();

  const handleLogout = () => {
    logout();
  };
  
  return (
    <Navbar className="nav" bg="primary" data-bs-theme="light">
      <Navbar.Brand className="nav-brand" href="/home">Wellness Dashboard</Navbar.Brand>
      <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Nav.Link className="nav-item" href="">Employee Benifits</Nav.Link>
        <Nav.Link className="nav-item" href="">Wellness Events</Nav.Link>
        <Nav.Link className="nav-item" href="#">Enrollments</Nav.Link>
        <Button onClick={handleLogout}>Logout</Button>
      </Nav>
    </Navbar>
  );
};
