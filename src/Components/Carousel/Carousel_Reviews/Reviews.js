import React from 'react';
import "./Reviews.css"
const Reviews = (props) => {
    return (
        <div className='Reviews_card'>
            <div className='Reviews_card_header'>
                <img src={props.profile_image} alt="Аватар пользователя"/>
                <div className='Reviews_card_header_text'>
                     <h4>{props.name}</h4>
                     <p>{props.student_cours}</p>
                </div>
            </div>  
            <p className='Reviews_card_header_text_reviews'>{props.reviews}</p>
            <div className='Reviews_card_footer' >
                {props.reviews_stars}
            </div>
        </div>
    );
}

export default Reviews;
