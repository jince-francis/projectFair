
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import React from 'react'

function Edit() {
        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
  return (
    <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleShow} />
        

        <Modal centered size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <label htmlFor='projectImage'>
                            <input type="file" name="" id="projectImage" className='d-none' />
                            <img src="https://www.freeiconspng.com/thumbs/upload-documents-icon/orange-square-button-document-file-page-up-upload-icon-5.jpeg" alt="" className='w-100'/>
                        </label>
                    </div>
                    <div className="col-6">
                        <div className='mt-3'><input type="text" name="" id="" placeholder='Title' className='form-control' /></div>
                        <div className='mt-3'><input type="text" name="" id="" placeholder='Language' className='form-control' /></div>
                        <div className='mt-3'><input type="text" name="" id="" placeholder='Github' className='form-control' /></div>
                        <div className='mt-3'><input type="text" name="" id="" placeholder='Website' className='form-control' /></div>
                        <div className='mt-3'><textarea name="" id="" rows={5} placeholder='Overview' className='form-control'></textarea></div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning me-3" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit