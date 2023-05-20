import React from 'react';
import Item from '../Carousel_item/Item';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card_Courses, responsive } from './data';
import "./Card_carousel.css"

const CardCarousel = () => {
    const card = Card_Courses.map(item =>(
        <Item
            direction={item.direction}
            title={item.title}
            imgURL={item.imgURL}
            teacher={item.teacher}
            university={item.university}
            emblem_university={item.emblem_university}
        />
    ))
    return (
        <section>
            <h1>Популярные курсы</h1>
            <div className='Carousel' >
                <Carousel  responsive={responsive} >
                    {card} 
                </Carousel>;
            </div>
        </section>
    );
}

export default CardCarousel;
