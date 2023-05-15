import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
import { productData } from '../../data'
import Chart from '../../components/chart/Chart'
const Product = () => {
  return (
    <div className='product__container'>
        <div className='product__container__header'>
            <h2 className='product__container__title'>Edit User</h2>
            <div>
            <Link to='/product/create'>
                <button className='create__btn'>Create</button>
                </Link>
            </div>
        </div>
        <div className='producttop__container'>
            <div className='product__topleft__container'>
                <Chart data={productData} dataKey='sales' title='Sales Performance' />
            </div>
            <div className='product__topright__container'>
                <img className='productlist__container__product__img' src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <div>
                <div className='product__topright__container__content'>
                    <h4>id: </h4>
                    <p>123</p>
                </div>
                <div className='product__topright__container__content'>
                    <h4>sale: </h4>
                    <p>2132</p>
                </div>
                <div className='product__topright__container__content'>
                    <h4>active: </h4>
                    <p>yes</p>
                </div>
                <div className='product__topright__container__content'>
                    <h4>in stock: </h4>
                    <p>no</p>
                </div>
                </div>
                
            </div>
        </div>
        <div className='productbottom__container'>
        <div><h3>Product Name</h3></div>
                <div className='edituser__container__right__form'>
                    <form className='edituser__container__right__forminputs'>
                        <div className='newuser__container__forminput__container'>
                            <label className='newuser__container__forminput__label'>Apple Airpod</label>
                            <input type="text" className='newuser__container__forminput' />
                        </div>
                        
                        <div className='newuser__container__forminput__container'>
                            <label className='newuser__container__forminput__label'>In Stock</label>
                            <select name="active" className='newuser__container__formdropdown'>
                            <option value="yes">yes</option>
                            <option value="no">no</option> 
                            </select>
                        </div>

                        <div className='newuser__container__forminput__container'>
                            <label className='newuser__container__forminput__label'>active</label>
                            <select name="active" className='newuser__container__formdropdown'>
                            <option value="yes">yes</option>
                            <option value="no">no</option> 
                            </select>
                        </div>
                        <button className='update__btn'>Update</button>
                    </form>
                    <div className='edituser__container__right__form__img'>
                        <img className='product__formimg'  src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg" alt="" />
                    </div>
                </div>
                

        </div>

    </div>
  )
}

export default Product