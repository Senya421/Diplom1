import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Reviews from "./Reviews"
import {Card_Reviews, responsive} from './Reviews_data';

const CarouselReviews = () => {

    const reviews_cards = Card_Reviews.map(item=>(
        <Reviews
        profile_image={item.profile_image}
        name={item.name}
        student_cours={item.student_cours}
        reviews={item.reviews}
        reviews_stars={item.reviews_stars}
        />
    ))

    return (
        <section>
            <h1>Отзывы о курсах</h1>
            <div className = "Carousel_reviews" >
                <Carousel   responsive={responsive}>
                    {reviews_cards}
                </Carousel>
            </div>
        </section>
    );
}

export default CarouselReviews;
