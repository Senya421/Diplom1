import React from 'react';
import "./First_section.css"
import Submit from '../../Buttons/Submit';
import { Card_Courses } from '../../Carousel/Slider/data';


const FirstSection = () => {
    return (
        <div className = 'first_section'> 
            {/* <img className="Background_img" src='https://www.worldtradedisplay.com/wp-content/uploads/revslider/slider-home-wtd/world_trade_display_slide_3.jpg' alt='Фоновая картинка'/> */}
            <div className = 'first_section_textblock'>
                <div className='first_section_textblock_header'>
                    <div className='first_section_textblock_direction'>
                         <p>Программирование</p>
                    </div>
                    <div className='first_section_textblock_teacher'>
                        <p>Степанов И.Ю.</p>
                    </div>
                    <div className='first_section_textblock_university'>
                        <p>КемГУ</p>
                    </div>
                </div>
                <div className='first_section_textblock_maintext'>
                    <p className='first_section_textblock_maintext_title'>Machine-Learning</p>
                    <p className='first_section_textblock_maintext_description'>Это процесс создания статистических моделей для нахождения закономерностей на основе подготовленных массивов данных.</p>
                </div>
                <div className='first_section_textblock_footer'>
                    <Submit textBtn = "Начать учиться!"/>
                    <p>Ближайшая дата начала - 21 февраля</p>
                </div>
            </div>
        </div>
    );
}

export default FirstSection;
