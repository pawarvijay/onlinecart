import React from 'react'
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

import Link from 'next/link'
import './masterlayout.scss';

const MasterLayout = ({ children }) => {
  return <div>
    <Navbar bg="primary" variant="dark" sticky="top"  >
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      <Nav>
        <Button variant="primary" >Search</Button>
        <Link href="/cart">
          <Button variant="primary" >Cart</Button>
        </Link>
      </Nav>
    </Navbar>
    {children}
  </div>


}

export default MasterLayout