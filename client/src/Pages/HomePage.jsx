import React from 'react'
import Header from '../Components/Layout/Header';
import Hero from '../Components/Route/Hero';
import Categories from '../Components/Route/Categories';
import BestDeals from '../Components/Route/BestDeals';
import FeaturedProducts from '../Components/Route/FeaturedProducts/FeaturedProducts';
import Events from '../Components/Events/Events';

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1}/>
        <Hero />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProducts />
       
    </div>
  )
}

export default HomePage;