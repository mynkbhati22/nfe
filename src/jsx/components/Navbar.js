import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/image 2.png";
import SearchIcon from "@mui/icons-material/Search";

function ReactNav() {
  return (
    <Navbar bg="transparent" expand="lg" className="background">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <SearchIcon fontSize="large" className="searchicon" />
            </Nav.Link>
            <Nav.Link href="#link" className="navarea mx-2">
              Tokenization
            </Nav.Link>
            <Nav.Link href="#link" className="navarea2 mx-2">
              BUy Your Villa
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ReactNav;
