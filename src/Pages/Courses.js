import React from 'react';
import Header from '../Components/Header/Header';
import Footer from "../Components/Footer/Footer"
import FirstSection from '../Components/Courses_page/First_section/First_section';
import SecondSection from '../Components/Courses_page/Second_section/Second_section';
import ThirdSection from '../Components/Courses_page/Third_section/Third_section';
const Courses = () => {
    return (
        <div>
            <Header/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            {/* <Footer/> */}
        </div>
    );
}

export default Courses;
