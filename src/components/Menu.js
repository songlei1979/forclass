import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";


function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={'/'}>Home</Nav.Link>
            <Nav.Link href={'/login'}>Login</Nav.Link>
            <Nav.Link href={'/posts'}>Posts</Nav.Link>

            {/*<Nav.Link href={'/second'}>Second</Nav.Link>*/}
            {/*<Nav.Link href={'/form'}>Form</Nav.Link>*/}
            {/*<Nav.Link href={'/loop'}>Loop</Nav.Link>*/}
            {/*<Nav.Link href={'/counter'}>Counter</Nav.Link>*/}
            {/*<Nav.Link href="/datatype">Data Type</Nav.Link>*/}
            {/*<Nav.Link href="/count2">Counter 2</Nav.Link>*/}
            {/*<Nav.Link href="/fetchdata">Fetch Data</Nav.Link>*/}
            {/*<Nav.Link href="/fetchdatereducer">Fetch Data Reducer</Nav.Link>*/}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;