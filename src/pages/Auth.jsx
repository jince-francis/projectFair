// import React from 'react'

function Auth() {
  return (
    <div>
      <div className="container bg-success">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" className="w-75" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column text-light">
            <h4>PROJECT FAIR</h4>
            <h6 className="mb-4">sign into your account</h6>
            <input type="email" name="" id="" className="form-control m-3 w-75" placeholder="Email id" />
            <input type="password" name="" id="" className="form-control m-3 w-75" placeholder="password" />
            <button className="btn btn-warning">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth