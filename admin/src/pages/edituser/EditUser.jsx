import React from 'react'
import { Link } from 'react-router-dom'
import './EditUser.css'
const EditUser = () => {
  return (
    <div className='edituser__container'>
        <div>
        <div className='edituser__container__header'>
            <h2 className='edituser__container__title'>Edit User</h2>
            <div>
                <Link to='/user/create'>
                <button className='create__btn'>Create</button>
                </Link>
            </div>
        </div>
        <div className='edituser__container__body'>
            
            <div className='edituser__container__left'>
                <div className='edituser__container__left__item'>
                        <img className='edit__container__item__img' src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg" alt="" />
                        <div>
                            <p style={{fontSize: 14,fontWeight: 500}}>Anna Keller</p>
                            <p style={{fontWeight: 200, fontSize: 14}}>Software Engineer</p>
                        </div>
                </div>
                <p className='edituser__container__left__title'>Account Detail</p>
                <div className='edituser__container__left__content'>
                    <p>Imran syam</p>
                </div>
                <div className='edituser__container__left__content'>
                    <p>12.121.121</p>
                </div>
                <p className='edituser__container__left__title'>Contact Details</p>
                <div className='edituser__container__left__content'>
                    <p>+2312312312</p>
                </div>
                <div className='edituser__container__left__content'>
                    <p>md.imransyam@gmail.com</p>
                </div>
                <div className='edituser__container__left__content'>
                    <p>New York</p>
                </div>                
            </div>
            <div className='edituser__container__right'>
                <div><h3>Edit</h3></div>
                <div className='edituser__container__right__form'>
                    <form className='edituser__container__right__forminputs'>
                        <label className='form__label'>Username</label>
                        <input type="text" className='form__input'/>
                        <label className='form__label'>Full Name</label>
                        <input type="text" className='form__input'/>
                        <label className='form__label'>Email</label>
                        <input type="text" className='form__input'/>
                        <label className='form__label'>Phone</label>
                        <input type="text" className='form__input'/>
                        <label className='form__label'>Address</label>
                        <input type="text" className='form__input'/>
                    </form>
                    <div className='edituser__container__right__form__img'>
                        <img className='formimg'  src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg" alt="" />
                    </div>
                </div>
                <button className='update__btn'>Update</button>

                
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default EditUser