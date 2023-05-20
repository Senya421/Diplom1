import React from 'react';
import Item from './Carousel_item/Item';
import "./All_items.css"
const AllItems = () => {
    return (
        <div>
            <section>
                <h1>Популярные курсы</h1>
                <div className='Popular_courses_countainer'>
                    <Item 
                        content = {{
                            direction:"Программирование",
                            title:"Machine Learning",
                            imgURL:"https://avatars.dzeninfra.ru/get-zen_doc/3414159/pub_625413e7fd6a2f34f5fe4525_6254169f99ed501d05826a22/scale_1200",
                            teacher:"Степанов И.Ю.",
                            university:"КемГУ",
                            emblem_university:"https://sun9-27.userapi.com/impf/c631829/v631829093/180a4/zk5Y4EyLGLo.jpg?size=1197x912&quality=96&sign=2bd553db06490f47272e9303e240281e&c_uniq_tag=uj5X4nYap8jN6moxODSPOBq1mBb3srf-VJv7PlsOaXc&type=album"
                        }}
                    />
                    <Item 
                        content = {{
                            direction:"Дизайн интерфейсов",
                            title:"UX/UI-дизайнер",
                            imgURL:"https://www.arhamsoft.com/blog/wp-content/uploads/2020/06/Mobile-App-Design.png",
                            teacher:"Новоселова П.Г.",
                            university:"МГУ",
                            emblem_university:"https://avatars.mds.yandex.net/i?id=98a731a56012ce51b6b843ed6909fc4b-5253062-images-thumbs&n=13  "
                        }}
                    />
                    
                </div>    
            </section>            
        </div>
    );
}

export default AllItems;
