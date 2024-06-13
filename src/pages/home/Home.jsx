import React, { useContext } from "react";
// import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/HeroSection/HeroSection";
import Filter from "../../components/FIlter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import { Link } from "react-router-dom";


const Home = () => {
  
  


  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
<Link to={'/allproducts'}>
<button className="bg-gray-300 px-5 py-2 rounded-xl">
  See more
</button>
</Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
