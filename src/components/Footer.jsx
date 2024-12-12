import { faFacebook, faInstagram, faLinkedin, faStackOverflow, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



function Footer() {
  return (
    <>

    <div className="container-fluid bg-success">
        <div className="row">
            <div className="col-md-4 mt-4 ">
                <h3 className='text-white'> <FontAwesomeIcon icon={faStackOverflow} /> Project Fair</h3>
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita culpa, repellat vero sit veritatis maiores quia iure, vitae doloremque, soluta corporis adipisci. Mollitia possimus quo placeat, modi laudantium eius voluptates! Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="col-md-2 mt-4 ">
                <h3 className='text-white'>Guides</h3>
                <p className='mt-3'>Home</p>
                <p>Project</p>
                <p>Dashboard</p>
            </div>
            <div className="col-md-2 mt-4">
                <h3 className='text-white'>Links</h3>
                <p className='mt-3'>React</p>
                <p>React Bootstrap</p>
                <p>Bootswatch</p>
            </div>
            <div className="col-md-4 mt-4">
                <h3 className='text-white'>Contact Us</h3>
                <div className='d-flex mt-3'>
                    <input className='form-control rounded' type="text" placeholder='Email Id' />
                    <button className='btn btn-warning ms-2'>Subscribe</button>

                </div>
                <div className='d-flex justify-content-between mt-4 '>
                <FontAwesomeIcon icon={faInstagram} className='fa-2x text-white' />
                <FontAwesomeIcon icon={faFacebook}  className='fa-2x text-white' />
                <FontAwesomeIcon icon={faYoutube}   className='fa-2x text-white' />
                <FontAwesomeIcon icon={faWhatsapp}   className='fa-2x text-white' />
                <FontAwesomeIcon icon={faLinkedin}   className='fa-2x text-white' />



                </div>
                

                
            </div>
        </div>
    </div>

    </>
  )
}

export default Footer