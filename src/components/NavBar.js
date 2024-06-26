import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar expand='lg' className="bg-body-tertiary">
            <Container>
                <NavbarBrand href='/'>Coffee Calculator</NavbarBrand>
                <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/stopwatch'>Stopwatch</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;