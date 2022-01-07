import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'
function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          {/* <div className="navigation"> */}
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/product">Products</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/sign">Sign In</Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
          {/* </div> */}
        </Container>
      </Navbar>
    </>
  )
}

export default Header

