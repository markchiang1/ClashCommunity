import React, { Fragment } from 'react'
import './Roles.css'

const Roles = props => {
  return (
    <Fragment>

      <div id='Roles'>

        <div className='row'>
          <div className='col s1 '>
            <img className='icon ' src='/assets/img/Top_Icon.png' alt='top icon' />
            <img className='icon' src='/assets/img/Mid_Icon.png' alt='mid icon' />
            <img className='icon' src='/assets/img/Support_Icon.png' alt='support icon' />
          </div>
          <div className='col s5'>
            <div className='row name'>
              <p className='label '>  TOP</p>
              <p className='t hoverable' >  Smeb</p>
            </div>
            <div className='row name'>
              <p className='label'> MID</p>
              <p className='t hoverable'> Faker</p>
            </div>
            <div className='row name'>
              <p className='label'> SUPPORT</p>
              <p className='t hoverable'> Aphromoo</p>
            </div>
          </div>

          <div className='col s1'>
            <img className='icon' src='/assets/img/Jungle_Icon.png' alt='jungle icon' />
            <img className='icon' src='/assets/img/Bottom_Icon.png' alt='bottom icon' />
            <img className='icon' src='/assets/img/Fill_Icon.png' alt='fill icon' />
          </div>
          <div className='col s5'>
            <div className='row name'>
              <p className='label'>  JUNGLE</p>
              <p className='t hoverable'>  Ambition</p>
            </div>
            <div className='row name'>
              <p className='label'> ADC</p>
              <p className='t hoverable'>  WarMasterLoki</p>
            </div>
            <div className='row name'>
              <p className='label'> FILL</p>
              <p className='t hoverable'> DoubleLift</p>
            </div>
          </div>

        </div>
      </div>

    </Fragment>
  )
}

export default Roles
