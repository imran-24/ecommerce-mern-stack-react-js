import React from 'react'
import '../newuser/NewUser.css'
const NewUser = () => {
  return (
    <div className='newuser__container'>
      <div className='newuser__subcontainer'>
        <h2 className='newuser__container__title'>New User</h2 >
        <form className='newuser__container__form'>
          <div className='newuser__container__forminput__container'>
            <label className='newuser__container__forminput__label'>Username</label>
            <input type="text" className='newuser__container__forminput' />
          </div>
          <div className='newuser__container__forminput__container'>
            <label className='newuser__container__forminput__label'>full name</label>
            <input type="text" className='newuser__container__forminput' />
          </div>
          <div className='newuser__container__forminput__container'>
            <label className='newuser__container__forminput__label'>email</label>
            <input type="text" className='newuser__container__forminput' />
          </div>
          <div className='newuser__container__forminput__container'>
            <label className='newuser__container__forminput__label'>password</label>
            <input type="text" className='newuser__container__forminput' />
          </div>
          <div className='newuser__container__forminput__container'>
            <label className='newuser__container__forminput__label'>phone</label>
            <input type="text" className='newuser__container__forminput' />
          </div>
          <div className='newuser__container__forminput__container'>
            <label className='newuser__container__forminput__label'>address</label>
            <input type="text" className='newuser__container__forminput' />
          </div>
          <div className='newuser__container__forminput__container'>
            <div className='radio__btn'>
            <label  className='radio__btn__label'>male</label>
            <input name="gender" type="radio" className='newuser__container__forminput' />
            <label className='radio__btn__label'>female</label>
            <input name="gender" type="radio" className='newuser__container__forminput' />
            <label className='radio__btn__label'>others</label>
            <input name="gender" type="radio" className='newuser__container__forminput' />
            </div>
          </div>
          <div className='newuser__container__forminput__container'>
            <label className='newuser__container__forminput__label'>active</label>
            <select name="active" className='newuser__container__formdropdown'>
              <option value="yes">yes</option>
              <option value="no">no</option> 
            </select>
          </div>
          <div className='newuser__container__forminput__container'>
            <button className='create__btn'>create</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default NewUser