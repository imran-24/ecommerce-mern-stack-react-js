import React from 'react'
import Announcement from '../Components/Announcement';
import Categories from '../Components/Categories';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletters from '../Components/Newsletters';
import Products from '../Components/Products';
import Slider from '../Components/Slider';


const Home = () => {

  return (
    <div className='min-h-screen max:w-screen bg-slate-100 relative'>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Newsletters />
        <Footer />
    </div>
  )
}

export default Home