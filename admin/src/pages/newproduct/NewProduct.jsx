import React from 'react'
import "../newproduct/NewProduct.css"
const NewProduct = () => {
  return (
    <div className='newproduct__container'>
      <div className='newproduct__subcontainer'>
        <h2 className='newproduct__container__title'>New product</h2 >
        <form className='newproduct__container__form'>
          
          <div className='newproduct__container__forminput__container'>
            <label className='newproduct__container__forminput__label'>image</label>
            <input type="file" className='newproduct__container__forminput' />
          </div>

          <div className='newproduct__container__forminput__container'>
            <label className='newproduct__container__forminput__label'>name</label>
            <input type="text" className='newproduct__container__forminput' />
          </div>
          
          <div className='newproduct__container__forminput__container'>
            <label className='newproduct__container__forminput__label'>stock</label>
            <input type="text" className='newproduct__container__forminput' />
          </div>

         
          <div className='newproduct__container__forminput__container'>
            <label className='newproduct__container__forminput__label'>active</label>
            <select name="active" className='newproduct__container__formdropdown'>
              <option value="yes">yes</option>
              <option value="no">no</option> 
            </select>
          </div>
          <div className='newproduct__container__forminput__container'>
            <button className='create__btn'>create</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default NewProduct