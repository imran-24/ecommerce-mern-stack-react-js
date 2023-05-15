import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import '../productlist/ProductList.css'
const ProductList = ({id}) => {
  return (
    <div className='productlist__container'>
       <div className="productlist__container__table">
       <table className='productlist__table'>
        <tr>
            <th>ID</th>
            <th>product</th>
            <th>Email</th>
            <th>Status</th>
            <th>Transaction</th>
            <th>Action</th>
        </tr>

        <tr className='product__row'>
            <td>
                <p>1</p>
            </td>
            <td className='productlist__container__productInfo'>
                <img className='productlist__container__product__img' src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
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
                <Link to={`/editproduct/:${id}`}>
                <button className='edit__btn'>edit</button>
                </Link>
                <RiDeleteBin6Line className='delete__btn' fontSize={20} />
            </td>
        </tr>

        <tr className='product__row'>
            <td>
                <p>1</p>
            </td>
            <td className='productlist__container__productInfo'>
                <img className='productlist__container__product__img' src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
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
                <Link to={`/editproduct/:${id}`}>
                <button className='edit__btn'>edit</button>
                </Link>
                <RiDeleteBin6Line className='delete__btn' fontSize={20} />
            </td>
        </tr>

        <tr className='product__row'>
            <td>
                <p>1</p>
            </td>
            <td className='productlist__container__productInfo'>
                <img className='productlist__container__product__img' src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
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
                <Link to={`/editproduct/:${id}`}>
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

export default ProductList