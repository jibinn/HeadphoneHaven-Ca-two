import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown,Form,Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../action/userAction'
import SearchBox from './SearchBox'
import './Header.css'; 

function Header() {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
      dispatch(logout())
  }
  return (
    <Navbar expand="lg" bg="lightpink" variant="dark" collapseOnSelect>
    <Container fluid>
      <LinkContainer to='/'>
      <Navbar.Brand >Cosmic Grab</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
     
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
<LinkContainer to='/cart'>
  <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
</LinkContainer>
{userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}
                              

              {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}
   
   <SearchBox/>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Header
