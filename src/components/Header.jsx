// import React from 'react'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <Navbar className="bg-success d-flex align-items-center">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} className='text-decoration-none'><span className='fs-3 text-light'><FontAwesomeIcon icon={faStackOverflow} className='me-3' /> Project Fair</span></Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header