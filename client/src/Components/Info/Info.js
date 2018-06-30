import React from 'react'
import './Info.css'

const Info = () => (
  <div className='container'>
    <div className='row'>
      <div className='col s3' />
      <form className='col s6'>
        <div className='row'>
          <div className='input-field col s12'>
            <input id='userName' type='text' className='validate' />
            <label htmlFor='userName'>username</label>
          </div>
          <div className='input-field col s12'>
            <input id='Password' type='text' className='validate' />
            <label htmlFor='Password'>password</label>
          </div>
        </div>
        <div className='row'>
          <a className='waves-effect waves-light btn' id='button'>Login</a>
          <a className='waves-effect waves-light btn right'>Sign Up</a>
        </div>
      </form>
      <div className='col s3' />
    </div>
  </div>
)

export default Info
