import React from 'react'
import '../userlist/UserList.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { Link } from 'react-router-dom'
const UserList = ({id}) => {
  return (
    <div className='userlist__container'>
       <div className="userlist__container__table">
       <table className='userlist__table'>
        <tr>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Status</th>
            <th>Transaction</th>
            <th>Action</th>
        </tr>

        <tr className='user__row'>
            <td>
                <p>1</p>
            </td>
            <td className='userlist__container__userInfo'>
                <img className='widgetright__container__user__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7l04O1EbeclTNmOqJ-2_EXWkF0PMAX3Www&usqp=CAU" alt="" />
                <p >Anna Keller</p>
            </td>
            <td>
                <p>md.imransyam1956@gmail.com</p>
            </td>
            <td>
                <p>active</p>
            </td>
            <td>
                <p>$120</p>
            </td>
            <td >
                <Link to={`/edituser/:${id}`}>
                <button className='edit__btn'>edit</button>
                </Link>
                <RiDeleteBin6Line className='delete__btn' fontSize={20} />
            </td>
        </tr>

        <tr className='user__row'>
            <td>
                <p>1</p>
            </td>
            <td className='userlist__container__userInfo'>
                <img className='widgetright__container__user__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7l04O1EbeclTNmOqJ-2_EXWkF0PMAX3Www&usqp=CAU" alt="" />
                <p >Anna Keller</p>
            </td>
            <td>
                <p>md.imransyam1956@gmail.com</p>
            </td>
            <td>
                <p>active</p>
            </td>
            <td>
                <p>$120</p>
            </td>
            <td>
                <Link to={`/edituser/:${id}`}>
                <button className='edit__btn'>edit</button>
                </Link>
                <RiDeleteBin6Line className='delete__btn' fontSize={20} />
            </td>
        </tr>

        <tr className='user__row'>
            <td>
                <p>1</p>
            </td>
            <td className='userlist__container__userInfo'>
                <img className='widgetright__container__user__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7l04O1EbeclTNmOqJ-2_EXWkF0PMAX3Www&usqp=CAU" alt="" />
                <p >Anna Keller</p>
            </td>
            <td>
                <p>md.imransyam1956@gmail.com</p>
            </td>
            <td>
                <p>active</p>
            </td>
            <td>
                <p>$120</p>
            </td>
            <td >
                <Link to={`/edituser/:${id}`}>
                <button className='edit__btn'>edit</button>
                </Link>
                <RiDeleteBin6Line className='delete__btn' fontSize={20} />
            </td>
        </tr>

</table>
       </div>
    </div>
  )
}

export default UserList