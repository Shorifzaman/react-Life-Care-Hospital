import React from 'react';
import AboutUs from '../components/About/AboutUs';
import Service from '../components/Apoinment/Service';
import Contact from '../components/contuct/Contact';
import Foods from '../components/Foods Showcase/Foods';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Header/Banner';
import Navbar from '../components/Navbar/Navbar';
import Testimonial from '../components/Testimonial/Testimonial';

const HomeScreen = () => {
    return (
        <>
            <Navbar/>
            <Banner />
            <Foods />
            <Service/>
            <Testimonial/>
            <AboutUs/>
            <Contact/>
        </>
    )
}

export default HomeScreen
