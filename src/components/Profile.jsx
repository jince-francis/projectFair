// import React from 'react'

import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Profile() {
  return (
    <>
      <div className="p-4 mt-4 shadow">
        <div className="d-flex justify-content-between">
          <h4 className="text-success">Profile</h4>
          <button className="btn border mb-3"><FontAwesomeIcon icon={faAngleUp} /></button>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <label htmlFor='projectImage'>
            <input type="file" name="" id="projectImage" className='d-none' />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMcTdx6PADrUf2Br4rWv7qQgz4RtIGL0SYDSb0H7KcHpMnCrxKaWkZB2q_vtvpjyD0V4&usqp=CAU" alt="" className='w-100' />
          </label>
          <div className="w-100">
            <div className="mb-4"><input type="text" name="" id="" placeholder='Github' className='form-control' /></div>
            <div className="mb-4"><input type="text" name="" id="" placeholder='Linkedin' className='form-control' /></div>
            <div className="mb-3 text-center"><button className="btn btn-success w-75">Update Profile</button></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile