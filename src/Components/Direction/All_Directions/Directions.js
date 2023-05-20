import React from 'react';
import './Directions.css'
import Direction from '../Direction';

const Directions = () => (
    <section>
        <h1>Направления</h1>
        <div className='DirectionsContainer'>
            <Direction
                content = {{
                    imgURL:"https://media.rbcdn.ru/media/news/dmitrygavrilov-065_hSJGQrX.jpg",
                    text:'Программирование',
                    program:96
                }}
            />
            <Direction
                content = {{
                    imgURL:'https://i.pinimg.com/originals/b2/72/c2/b272c2a9a6524da7f612f10d60003239.png',
                    text:'Дизайн интерфейсов',
                    program:40
                }}
            />
            <Direction
                content = {{
                    imgURL:"https://imageio.forbes.com/specials-images/dam/imageserve/1147545116/0x0.jpg?format=jpg&amp;width=1200",
                    text:'Маркетинг',
                    program:43
                }}
            />
            <Direction
                content = {{
                    imgURL:"https://cdn.hackernoon.com/images/4Gum8Dod89bhd5H904iNVRVVmAi1-5tn3kwa.jpeg",
                    text:'Разработка игр',
                    program:12
                }}
            />
            <Direction
                content = {{
                    imgURL:"https://www.act-amuse-japan.co.jp/wp-content/uploads/2020/06/shutterstock_1125504911.jpg",
                    text:'Психология',
                    program:87
                }}
            />
            <Direction
                content = {{
                    imgURL:"https://pobedarf.ru/wp-content/uploads/2021/11/e40c0ec2d74b0750d0d68.jpg",
                    text:'Философия',
                    program:89
                }}
            />
            <Direction
                content = {{
                    imgURL:"https://kreativlife.ru/wp-content/uploads/2019/02/Strategiya-stavok-fiksirovannaya-pribyil.jpg",
                    text:'Финансы',
                    program:34
                }}
            />
            <Direction
                content = {{
                    imgURL:"https://top-fon.com/uploads/posts/2023-01/1674917841_top-fon-com-p-skachat-fon-dlya-prezentatsii-khimiya-219.jpg",
                    text:'Химия',
                    program:45
                }}
            />
            <Direction
                content = {{
                    imgURL:"https://pixy.org/src2/593/5939566.jpg",
                    text:'Физика',
                    program:51
                }}
            />
        </div>
    </section>
);

export default Directions