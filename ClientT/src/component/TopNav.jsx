import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const TopNav = ()=>{
    return(
        <>
          <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link}  to="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="home">Home</Nav.Link>
            <Nav.Link as={Link}  to="country">Add Country</Nav.Link>
            <Nav.Link  as={Link}  to="state">Add State</Nav.Link>
            <Nav.Link  as={Link}  to="city">Add City</Nav.Link>
            <Nav.Link  as={Link}  to="display">Display Page</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default TopNav;