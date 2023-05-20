import React from 'react';
import './Direction.css'

const Direction = (props) =>(
    <div className='Card'>
        <img src={props.content.imgURL} alt='CardHeader'/>
        <div className='CardText'>
            <h3>{props.content.text}</h3>
            <p>{props.content.program} программ</p>
        </div>
    </div>
);

export default Direction