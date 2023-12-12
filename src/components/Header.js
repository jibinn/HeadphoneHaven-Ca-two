import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
function Header() {
  return (
    <Navbar expand="lg" bg='dark' variant='dark' collapseOnSelect>
    <Container fluid>
      <LinkContainer to='/'>
      <Navbar.Brand >Health Oasis</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
           <LinkContainer to='/cart'>
          <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/login'>
          <Nav.Link ><i className="fas fa-user"></i>Login</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Header
