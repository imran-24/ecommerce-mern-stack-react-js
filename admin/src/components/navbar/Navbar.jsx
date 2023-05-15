import React from 'react'
import {IoMdSettings} from 'react-icons/io'
import {IoIosNotifications} from 'react-icons/io'
import {IoGlobeOutline} from 'react-icons/io5'
import '../navbar/Navbar.css'
const Navbar = () => {
  return (
    <nav className='nav__container'>
        <div className='nav__subcontainer'>
          <div className='nav__left'><h2>giraffe</h2></div>
          <div className='nav__right'>
              <div>
              <IoMdSettings fontSize={24} style={{color: 'gray'}}  />
              </div>
              <div>
              <IoIosNotifications fontSize={24} style={{color: 'gray'}}  />
              </div>
              <div>
              <IoGlobeOutline fontSize={24} style={{color: 'gray'}}  />
              </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar