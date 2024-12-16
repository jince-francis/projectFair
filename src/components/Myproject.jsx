// import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons'
import Addproject from "./Addproject"
import Edit from "./Edit"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Myproject() {
    return (
        <>
            <div className="shadow p-5 mt-4 rounded">
                <div className="d-flex justify-content-between p-5">
                    <div><h3 className='text-success'>My Project</h3></div>
                    <Addproject />
                </div>
                {/* <h5 className="text-center p-3">No Project Added Yet</h5> */}
                <div className="d-flex p-3 bg-light mt-3 rounded align-items-center justify-content-between">
                    <h5>Media Player</h5>
                    <div className="d-flex align-items-center mt-2">
                        <Edit />
                        <FontAwesomeIcon icon={faGithub} className='me-4 ms-4 text-warning' />
                        <FontAwesomeIcon icon={faGlobe} className='me-4 text-success'/>
                        <FontAwesomeIcon icon={faTrash} className='me-4 text-danger'/>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Myproject