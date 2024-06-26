import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';


function NavBar() {
    return (
        <Navbar expand='lg' className="bg-body-tertiary">
            <Container>
                <NavbarBrand href='/'>Coffee Calculator</NavbarBrand>
                <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <LinkContainer to='/stopwatch'>
                        <Nav.Link>Stopwatch</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;