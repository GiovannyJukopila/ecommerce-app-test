import React from 'react'
import HomeProducts from '../../components/HomeContent/Body/ListProductsSection/HomeProducts';
import AboutUs from '../../components/HomeContent/Body/AboutUsSection/AboutUs';
import banner from './../../assets/banner.jpg';
import HomeFooter from '../../components/HomeContent/Footer/HomeFooter';

const Home = () => {
  return (
    <div>
        <img src={banner} className="banner-header" alt="banner" />
        <HomeProducts/>
        <AboutUs/>
        <HomeFooter />
    </div>
  )
}

export default Home;