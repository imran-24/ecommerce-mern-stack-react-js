import React from 'react'
import '../WidgetRight/WidgetRight.css'
const WidgetRight = () => {
  return (
    <div className='widgetright__container'>
        <h2 className='header'>
            Latest Transections
        </h2>
                
        <table className='transection__table'>

          <tr>
            <th>
            <p className='table__header'>Customer</p>
            </th>
            <th>
            <p className='table__header'>Date</p>
            </th>
            <th>
            <p className='table__header'>Amount</p>
            </th>
            <th>
            <p className='table__header'>Status</p>
            </th>
          </tr>

          <tr>
            <th className='widgetright__container__userInfo'>
              <img className='widgetright__container__user__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7l04O1EbeclTNmOqJ-2_EXWkF0PMAX3Www&usqp=CAU" alt="" />
              <p className='table__row__item' >Anna Keller</p>
            </th>
            <th>
              <p className='table__row__item'>2 Jun 2021</p>
            </th>
            <th>
              <p className='table__row__item__amount'>$1222.00</p>
            </th>
            <th>
              <button className='status__btn'>Approved</button>
            </th>
          </tr>

          <tr >
            <th className='widgetright__container__userInfo'>
              <img className='widgetright__container__user__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7l04O1EbeclTNmOqJ-2_EXWkF0PMAX3Www&usqp=CAU" alt="" />
              <p className='table__row__item' >Anna Keller</p>
            </th>
            <th>
              <p className='table__row__item'>2 Jun 2021</p>
            </th>
            <th>
              <p className='table__row__item__amount'>$1222.00</p>
            </th>
            <th>
              <button className='status__btn'>Declined</button>
            </th>
          </tr>
          
          <tr>
            <th className='widgetright__container__userInfo'>
              <img className='widgetright__container__user__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7l04O1EbeclTNmOqJ-2_EXWkF0PMAX3Www&usqp=CAU" alt="" />
              <p className='table__row__item' >Anna Keller</p>
            </th>
            <th>
              <p className='table__row__item'>2 Jun 2021</p>
            </th>
            <th>
              <p className='table__row__item__amount'>$1222.00</p>
            </th>
            <th>
              <button className='status__btn'>Pending</button>
            </th>
          </tr>

      </table>
                
    
    </div>
  )
}

export default WidgetRight