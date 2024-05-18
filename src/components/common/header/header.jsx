"use client"
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import HeaderLinks from './header-links'
import "./header.scss";
import SocialMedia from './social-media';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`header-navbar fixed-top ${isScrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#"> Hiya 👣</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Eda Sarikaya
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <HeaderLinks />
            <SocialMedia />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header;
