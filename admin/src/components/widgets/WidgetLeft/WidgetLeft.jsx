import React from 'react'
import { Link } from 'react-router-dom'
import '../WidgetLeft/WidgetLeft.css'
const WidgetLeft = ({id}) => {
  return (
    <div className='widgetleft__container'>
        <h2 className='header'>
            New Join Members
        </h2>
        <div className='widgetleft__container__items'>
                <div className='widgetleft__container__item'>
                    <img className='widgetleft__container__items__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7l04O1EbeclTNmOqJ-2_EXWkF0PMAX3Www&usqp=CAU" alt="" />
                    <div>
                        <p style={{fontSize: 13,fontWeight: 500}}>Anna Keller</p>
                        <p style={{fontWeight: 200, fontSize: 13}}>Software Engineer</p>
                    </div>
                    <Link to={`/edituser/:${id}`}>
                    <button className='widget__btn'>display</button>
                    </Link>
                </div>
                <div className='widgetleft__container__item'>
                    <img className='widgetleft__container__items__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7l04O1EbeclTNmOqJ-2_EXWkF0PMAX3Www&usqp=CAU" alt="" />
                    <div>
                        <p style={{fontSize: 13,fontWeight: 500}}>Anna Keller</p>
                        <p style={{fontWeight: 200, fontSize: 13}}>Software Engineer</p>
                    </div>
                    <Link to={`/edituser/:${id}`}>
                    <button className='widget__btn'>display</button>
                    </Link>
                </div>
                <div className='widgetleft__container__item'>
                    <img className='widgetleft__container__items__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7l04O1EbeclTNmOqJ-2_EXWkF0PMAX3Www&usqp=CAU" alt="" />
                    <div>
                        <p style={{fontSize: 13,fontWeight: 500}}>Anna Keller</p>
                        <p style={{fontWeight: 200, fontSize: 13}}>Software Engineer</p>
                    </div>
                    <Link to={`/edituser/:${id}`}>
                    <button className='widget__btn'>display</button>
                    </Link>
                </div>
                <div className='widgetleft__container__item'>
                    <img className='widgetleft__container__items__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7l04O1EbeclTNmOqJ-2_EXWkF0PMAX3Www&usqp=CAU" alt="" />
                    <div>
                        <p style={{fontSize: 13,fontWeight: 500}}>Anna Keller</p>
                        <p style={{fontWeight: 200, fontSize: 13}}>Software Engineer</p>
                    </div>
                    <Link to={`/edituser/:${id}`}>
                    <button className='widget__btn'>display</button>
                    </Link>
                </div>
                <div className='widgetleft__container__item'>
                    <img className='widgetleft__container__items__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7l04O1EbeclTNmOqJ-2_EXWkF0PMAX3Www&usqp=CAU" alt="" />
                    <div>
                        <p style={{fontSize: 13,fontWeight: 500}}>Anna Keller</p>
                        <p style={{fontWeight: 200, fontSize: 13}}>Software Engineer</p>
                    </div>
                    <Link to={`/edituser/:${id}`}>
                    <button className='widget__btn'>display</button>
                    </Link>
                </div>
        </div>
    </div>
  )
}

export default WidgetLeft