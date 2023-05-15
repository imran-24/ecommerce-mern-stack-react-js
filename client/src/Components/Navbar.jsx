import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {AiOutlineShopping} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart } from '../features/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice'

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart)
  const {user} = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }
  return (
    <div className='h-20 z-10 flex items-center justify-between p-4 border-b bg-white sticky top-0 left-0 right-0'>
        <div className='md:flex items-center gap-4 flex-1 hidden'>
            <p>EN</p>
            <div className='border flex items-center px-2 py-1'>
                <input type="text" className='border-none outline-none'/>
                <CiSearch fontSize={26} />
            </div>
        </div>

        <div className='flex-1'>
            <p className='text-2xl md:text-center'>Giraffe</p>
        </div>

        <div className='flex items-center gap-4   flex-1 justify-end'>
            { user ? <button onClick={onLogout} className='border p-1  w-24 hover:opacity-50'>Log out</button>
                   : <>
                    <button className='border p-1  w-24 hover:opacity-50'>Join</button>
                    <button className='border p-1  w-24 hover:opacity-50'>Sign in</button>
                   </>
            }
            <Link to={'/carts'}>
            <div  className='relative '>
                <AiOutlineShopping fontSize={28} />
                
                <div className='bg-red-500 rounded-full text-xs absolute top-1 right-0 w-4 h-4   flex items-center m-auto justify-center'>
                    <p className=' pt-[2px] text-white'>{cart.products.length}</p>
                </div>
                
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar