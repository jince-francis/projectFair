import React from 'react'
import { Link } from 'react-router-dom'

function PagenotFound() {
  return (
    <>

    <div className="container-fluid">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
                <img className='w-75' src="https://cdn.dribbble.com/users/406903/screenshots/6723682/drawkit-grape-pack-illustration-3-dribbble-export-v0.1.gif" alt="" />
                <h2>Look like you are lost</h2>
                <h4 className='mt-3'>The page you are looking is unavailable</h4>
                <Link to={'/'}><button className='btn btn-success rounded-0 mt-4 mb-4'>Go Home</button></Link>

            </div>
            <div className="col-md-2"></div>
        </div>
    </div>



    </>
  )
}

export default PagenotFound