import React from 'react'
import '../sidebar/Sidebar.css'
import {MdHomeFilled} from 'react-icons/md'
import {IoAnalytics} from 'react-icons/io5'
import {GiChart} from 'react-icons/gi'
import {BiUserCircle} from 'react-icons/bi'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {AiOutlineTransaction} from 'react-icons/ai'
import {MdOutlineReport} from 'react-icons/md'
import {HiOutlineMail} from 'react-icons/hi'
import {TbMessages} from 'react-icons/tb'
import {BiMessage} from 'react-icons/bi'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {GrDocumentText} from 'react-icons/gr'
import { Link } from 'react-router-dom'


const Sidebar = () => {
 
  return (
    <div className='side__container' >
       <p className='side__title'>dashboard</p>
       <div className='side__menu'>
            <Link to='/' className='link'>
            <div className='side__menu__item'>
                <MdHomeFilled fontSize={24} />  
                    <p>Home</p>
            </div>
            </Link>
            <div className='side__menu__item'>     
                <IoAnalytics fontSize={24} /> 
                <p>Analytics</p>
            </div>
            <div className='side__menu__item'>     
                <GiChart fontSize={24} /> 
                <p>Sales</p>
            </div>
       </div>
       <p className='side__title'>Quick Menu</p>
       <div className='side__menu'>
            <Link to='/users' className='link'>
            <div className='side__menu__item'>
                <BiUserCircle fontSize={24} /> 
                    <p>User</p>
            </div>
            </Link>
            <Link to='/products' className='link'>
            <div className='side__menu__item'>
                <MdOutlineProductionQuantityLimits fontSize={24} /> 
                    <p>Product</p>
            </div>
            </Link>
            <div className='side__menu__item'>     
                <AiOutlineTransaction fontSize={24} /> 
                <p>Transactions</p>
            </div>
            <div className='side__menu__item'>     
                <GrDocumentText fontSize={24} /> 
                <p>Report</p>
            </div>
       </div>
       <p className='side__title'>Notifications</p>
       <div className='side__menu'>
            <div className='side__menu__item'>
                <HiOutlineMail fontSize={24} /> 
                <p>Mail</p>
            </div>
            <div className='side__menu__item'>     
                <TbMessages fontSize={24} /> 
                <p>Feedback</p>
            </div>
            <div className='side__menu__item'>     
                <BiMessage fontSize={24} /> 
                <p>Message</p>
            </div>
       </div>
       <p className='side__title'>Staff</p>
       <div className='side__menu'>
            <div className='side__menu__item'>
                <BsFillBriefcaseFill fontSize={24} /> 
                <p>Manage</p>
            </div>
            <div className='side__menu__item'>     
                <MdOutlineReport fontSize={24} /> 
                <p>Report</p>
            </div>
            
       </div>
    </div>

  )
}

export default Sidebar