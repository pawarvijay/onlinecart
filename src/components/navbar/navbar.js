import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { computeCartCount } from '../../actions/helpers/cart'
import './navbar.scss'

export default _ => {
    return <Navbar bg="primary" variant="dark" sticky="top" className='appnavbar' >
        <Navbar.Brand variant="warning" ><Link to="/" className='whiteText'>Home</Link></Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        <Nav>
            <Link className='whiteText' to="/cart">Cart {useSelector(state => state.cart.length != 0 ? computeCartCount(state.cart) : null)}</Link>
        </Nav>
    </Navbar>
}