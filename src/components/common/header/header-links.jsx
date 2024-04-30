"use client"
import Link from 'next/link'
import React from 'react'
import { Nav } from 'react-bootstrap'

const HeaderLinks = () => {
  return (
    <Nav className="justify-content-end flex-grow-1 pe-3 nav-link">
            <Nav.Link as={Link} href="#"> Home</Nav.Link>
            <Nav.Link as={Link} href="#">Resume</Nav.Link>
            <Nav.Link as={Link} href="#">Contact</Nav.Link>
        
          </Nav>
  )
}

export default HeaderLinks
