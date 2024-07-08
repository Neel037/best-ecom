import React from 'react'
import Products from '../components/Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from '../components/MainNav';
import HeroImg from '../components/HeroImg';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <>
<MainNav />
<HeroImg />
<Products />
<ContactUs />
<Footer />
    
    </>
  )
}

export default Home