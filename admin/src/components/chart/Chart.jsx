import React from 'react'
import '../chart/Chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({data, dataKey, title}) => {
    

  return (
    <div className='chart__container'>
        <h2 style={{fontSize: 20,color: 'gray'}} >{title}</h2>
        <ResponsiveContainer width='100%' aspect={4/1} >
            <LineChart data={data} >
                <XAxis dataKey={dataKey} style={{fontSize: 12}} stroke='#8d8d8d'  />
                 <Line type='monotone' dataKey={dataKey} stroke='#40aeea'  />
                 <Tooltip />
                 <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart