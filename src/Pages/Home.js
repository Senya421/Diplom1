import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Directions from '../Components/Direction/All_Directions/Directions';
import RegistrationOrLogin from '../Components/Registration_block/Registration_or_login';
import CardCarousel from '../Components/Carousel/Slider/Card_carousel';
import CarouselReviews from '../Components/Carousel/Carousel_Reviews/Carousel_Reviews';

const Home = () => {
    return (
        <div>
            <Header/>
            <RegistrationOrLogin/>
            <Directions/>
            <CardCarousel/>
            <CarouselReviews/>
            <Footer/>
        </div>
    );
}

export default Home;
