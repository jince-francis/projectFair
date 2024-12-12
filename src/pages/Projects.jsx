// import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../components/Header"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import ProductCard from "../components/ProductCard"
import { Link } from "react-router-dom"

function Projects() {
  return (
    <>
      <div className=" mb-5">
        <Header />
        <h4 className="text-center mt-4">ALL PROJECTS</h4>

        {/* not logged in  */}
        <div className="mt-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                <img src="https://cdn.dribbble.com/users/8619169/screenshots/16514320/media/0dc828901898c59928c3d69718791941.gif" alt="" className="w-75" />
                <h4 className="text-center">please <Link to={'/login'}>Login</Link> to see more projects</h4>
              </div>
            </div>
          </div>
        </div>

        {/* logged in */}
        {/* <div>
          <div className="mt-5  mb-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 d-flex">
                  <input type="text" name="" id="" placeholder="Technologies" className="form-control w-100 shadow" />
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'lightgrey', marginTop: '10px', marginLeft: '-30px' }} />
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3"><ProductCard /></div>
              <div className="col-md-3"><ProductCard /></div>
              <div className="col-md-3"><ProductCard /></div>
              <div className="col-md-3"><ProductCard /></div>
            </div>
          </div>
        </div> */}
      </div>

    </>
  )
}

export default Projects