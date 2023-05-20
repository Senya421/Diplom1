import React from 'react';
import "./Item.css"
import { Link, Route } from 'react-router-dom';
const Item = (props) => {
    return (
        <Link to = "/Courses">
            <div className='Carousel_card' > 
                <div className='Carousel_card_header'>
                    <p>{props.direction} </p>
                    <h2>{props.title}</h2>
                </div>
                <div className='Carousel_card_image'>
                    <img src={props.imgURL} alt='Изображение курса' />
                </div>
                <div className='Carousel_card_footer'>
                    <div className='Carousel_card_footer_text'>
                        <h2>{props.teacher}</h2>
                        <p>{props.university }</p>
                    </div>
                    <img src={props.emblem_university} alt='Эмблема университета' />
                </div>
            </div>
        </Link>
    );
}

export default Item;
