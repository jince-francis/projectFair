
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react'
import photo from '../assets/desg.png'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
function Home() {
  return (
    <>
    <div style={{height:'100vh'}} className='bg-success p-5'>
        <div className="container-fluid mt-5 ">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <h1 className='text-light' style={{fontSize:70}}>Project fair</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam officiis error quas </p>
                    <Link to={'/login'}><button className='btn text-light'>Get Started <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                    <Link to={'/projects'}><button className='btn text-light'>Manage Projects <FontAwesomeIcon icon={faArrowRight} /></button></Link>
                </div>
                <div className="col-md-6">
                    <img src={photo} alt=""  className='w-75'/>
                </div>
            </div>
        </div>

    </div>

    {/* explore Project */}
    <h1 className='text-center mt-5'>Explore our Project</h1>
    <div className="container">
        <div className="row mt-5">
            <div className="col-md-4"><ProductCard/></div>
            <div className="col-md-4"><ProductCard/></div>
            <div className="col-md-4"><ProductCard/></div>
        </div>
        <Link to={'/Projects'} className='text-danger'><p className=' text-center mt-5'>See more projects...</p></Link>
    </div>
    </>
  )
}

export default Home