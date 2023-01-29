import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import SearchBox from "./SearchBox";
import { Route, useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  const navigateToViewPrescription = () => {
    history.push("/prescription");
  };

  const navigateToAddPrescription = () => {
    history.push("/add/prescription");
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <i className="fas fa-heartbeat"></i> MediCure
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Brand>
            <Route render={({ history }) => <SearchBox history={history} />} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <LinkContainer to="/posts">
                  <Nav.Link>
                    <i className="fas fa-rss-square"></i>
                    Newsfeed
                  </Nav.Link>
                </LinkContainer>
              ) : (
                ""
              )}

              {userInfo ? (
                <LinkContainer to="/all/pharmacies">
                  <Nav.Link>
                    <i class="fas fa-prescription-bottle-medical"></i>
                    View Pharmacies
                  </Nav.Link>
                </LinkContainer>
              ) : (
                ""
              )}

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>
                      <i className="far fa-user-circle"></i>Profile
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={navigateToViewPrescription}>
                    <i class="fas fa-prescription"></i>
                    View Prescription
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={navigateToAddPrescription}>
                    <i class="fas fa-plus"></i>
                    Add Prescription
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <Route render={({ history }) => <SearchBox history={history} />} />
          </Navbar.Brand>
        </Container>
              </Navbar>*/}
    </header>
  );
};

export default Header;
