// import React from 'react'
import Card from 'react-bootstrap/Card';
import projectImg from '../assets/pro.png'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ProductCard() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={projectImg} onClick={handleShow} className='shadow border-0' />
                <Card.Body>
                    <Card.Title className='text-center'>BMI Project</Card.Title>
                </Card.Body>
            </Card>

            {/* modal  */}

            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>BMI Calculator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={projectImg} alt="" className='w-100' />
                            </div>
                            <div className="col-md-6">
                                <h3>Description</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laborum necessitatibus, vitae molestias qui nam ab eum</p>
                                <h4>Technologies</h4>
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={''}><FontAwesomeIcon icon={faGithub} className='fa-2x me-3' /></Link>
                    <Link to={''}><FontAwesomeIcon icon={faGlobe} className='fa-2x me-3 ms-3'/></Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductCard