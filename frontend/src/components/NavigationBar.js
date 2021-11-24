import React from 'react';
import {Navbar, Nav, } from 'react-bootstrap';
import logo from '../assets/logo.jpg';

export default function NavigationBar(){
    return(
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img  src={logo} width="30" height="30" className="d-inline-block align top" alt="logo"/>
                Tennis Mania
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
