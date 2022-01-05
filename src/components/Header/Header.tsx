import React,{useState} from 'react';
import { Navbar,Container,NavDropdown, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';

export default function ButtonAppBar() {
  const [textFind, setTextFind] = useState('');
  console.log(textFind);
  return (
    <Navbar className="header" expand="lg">
        <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link className="hd__nav__text">
                    <Link to="/profile/123">Profile</Link>
                  </Nav.Link>
                  <Nav.Link className="hd__nav__text">
                    <Link to="/about">About</Link>
                  </Nav.Link>
                  <Nav.Link className="hd__nav__text">
                    <Link to="/contacts">Contacts</Link>
                  </Nav.Link>
                  <div className="input__search">
                      <input type="search" 
                        className="form-control rounded" 
                        placeholder="Artist, Track or Album" 
                        aria-label="Search"
                        aria-describedby="search-addon" 
                        onChange={(e)=>{setTextFind(e.target.value)}}
                      />
                      <SearchIcon className="hd__icon__search"/>
                  </div>
              </Nav>
              <div className="hd__sign_in">
                <Link to="/sign-in">
                  <div className="hd__display_flex hd__gap_sign_in">
                    <p className="hd__margin_none">Sign in</p>
                    <LoginIcon/>
                  </div>
                </Link>
              </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}