import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLeft from '../../components/widgets/WidgetLeft/WidgetLeft'
import WidgetRight from '../../components/widgets/WidgetRight/WidgetRight'
import '../home/Home.css'
import {data} from './../../data'
const Home = () => {
  return (
    <div className='home__container'>
        <FeaturedInfo />
        <Chart data={data} dataKey='active_user' title='User Analytics' />
        <div className='home__widgets'>
            <div className='home__widgetleft'>
                <WidgetLeft />
            </div>
            <div className='home__widgetright'>
                <WidgetRight />
            </div>
        </div>
    </div>
  )
}

export default Home