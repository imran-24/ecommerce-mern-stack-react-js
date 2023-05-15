import React from 'react'
import '../featuredInfo/FeaturedInfo.css'
const FeaturedInfo = () => {
  return (
    <div className='feature__container'>
        
        <div className='feature__container__item'>
            <p className='feature__container__item__title'>Revenue</p>
            <h2  className='cost'>$2000 <span className='profit'>-12</span></h2>
            <p className='compare'>Compared to last month</p>
        </div>
        <div className='feature__container__item'>
            <p className='feature__container__item__title'>Sales</p>
            <h2  className='cost'>$4000 <span className='profit'>-10</span></h2>
            <p className='compare'>Compared to last month</p>
        </div>
        <div className='feature__container__item'>
            <p className='feature__container__item__title'>Cost</p>
            <h2  className='cost'>$2000 <span className='profit'>-11</span></h2>
            <p className='compare'>Compared to last month</p>
        </div>
    </div>
  )
}

export default FeaturedInfo