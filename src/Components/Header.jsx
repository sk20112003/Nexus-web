import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
<Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='italic font-semibold text-[20px] hover:caret-lime-500 cursor-pointer'>NEXUS INFO</Navbar.Brand>
          <Nav className="me-16 p-4">
            <Nav.Link href="#home" className='italic'>Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="feedback">Feedback</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>

  )
}

export default Header
