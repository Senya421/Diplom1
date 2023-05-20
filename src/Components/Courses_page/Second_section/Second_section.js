import React from 'react';
import "./Second_section.css"
import Vector_brain from "./Vector.svg"
import Chiken1 from "./icons/Chiken1.svg"
import Chiken2 from "./icons/Chiken2.svg"
import Chiken3 from "./icons/Chiken3.svg"
import number1 from "./icons/1.svg"
import number2 from "./icons/2.svg"
import number3 from "./icons/3.svg"
import number4 from "./icons/4.svg"
const SecondSection = () => {
    return (
        <div className='second_section'>
            <div className='second_section_firstblock'>
                <h1>Чему вас научат</h1>
                <div className='second_section_firstblock_items'>
                    <div className='second_section_firstblock_items_first_line'>
                        <div className='second_section_firstblock_items_first_line_firstitem'>
                            <img src={Vector_brain} alt='Напрячь извилины'/>
                            <p>Проектировать и настраивать модели машинного обучения</p>
                        </div>
                        <div className='second_section_firstblock_items_first_line_seconditem'>
                            <img src={Vector_brain} alt='Напрячь извилины'/>
                            <p>Работать с Git</p>
                        </div>
                        <div className='second_section_firstblock_items_first_line_thirditem'>
                            <img src={Vector_brain} alt='Напрячь извилины'/>
                            <p>Анализировать задачу,<br></br> выдвигать и проверять гипотезу, интерпретировать результаты</p>
                        </div>
                    </div>
                    <div className='second_section_firstblock_items_second_line'>
                        <div className='second_section_firstblock_items_second_line_firstitem'>
                            <img src={Vector_brain} alt='Напрячь извилины'/>
                            <p>Программировать на Python и SQL</p>
                        </div>
                        <div className='second_section_firstblock_items_second_line_seconditem'>
                            <img src={Vector_brain} alt='Напрячь извилины'/>
                            <p>Визуализировать данные в <br></br>Power BI</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='second_section_secondblock' >
                <h1>Кому подойдет курс</h1>
                <div className='second_section_secondblock_items'>
                    <div className='second_section_secondblock_items_firstitem'>
                        <div className='second_section_secondblock_items_firstitem_card'>
                            <div className='second_section_secondblock_items_firstitem_card_imgtext'>
                                <img src={Chiken1} alt='Новичкам'/>
                                <p>Новичкам</p>
                            </div>
                            <div className='second_section_secondblock_items_firstitem_card_text'>
                                <p>С нуля освоите Python, SQL, научитесь собирать и анализировать данные, получите необходимый 
                                    теоретический минимум по математике, теории вероятности и статистике. Решите задачи на основе 
                                    реальных кейсов и добавите проекты в портфолио. Через год сможете начать работать по профессии.</p>
                            </div>
                        </div>
                        <div className='second_section_secondblock_items_seconditem_card'>
                            <div className='second_section_secondblock_items_seconditem_card_imgtext'>
                                <img src={Chiken2} alt='Программистам'/>
                                <p>Программистам</p>
                            </div>
                            <div className='second_section_secondblock_items_seconditem_card_text'>
                                <p>Подтянете математику, статистику, аналитическое и алгоритмическое мышление, 
                                    научитесь выявлять потребности бизнеса. 
                                    Получите опыт работы с моделями машинного обучения, будете применять Python для решения задач с данными. 
                                    Пройдёте процесс от сбора данных до деплоя модели.</p>
                            </div>
                        </div>
                            <div className='second_section_secondblock_items_thirditem_card'>
                                <div className='second_section_secondblock_items_thirditem_card_imgtext'>
                                    <img src={Chiken3} alt='Аналитикам'/>
                                    <p>Аналитикам, которые хотят перейти в Machine Learning</p>
                                </div>
                                <div className='second_section_secondblock_items_thirditem_card_text'>
                                    <p>Изучите Python на более высоком уровне, освоите работу с полезными 
                                        библиотеками.Будете применять методы машинного обучения в работе. 
                                        Отшлифуете знания и сможете сменить вектор 
                                        профессионального развития.</p>
                            </div>
                        </div>  
                    </div>                 
                </div>
            </div>
            <div className='second_section_thirdblock'>
                <h1>Как проходит обучение</h1>
                <div className='second_section_thirdblock_items'>
                    <div className='second_section_thirdblock_items_first_line'>
                        <div className='second_section_thirdblock_items_first_line_firstitem'>
                            {/* <p className='second_section_thirdblock_items_first_line_firstitem_number_1'>1</p> */}
                            <img src={number1} alt='Шаг первый' />
                            <div className='second_section_thirdblock_items_first_line_firstitem_text'>
                                <h3>Изучение темы</h3>
                                <p>Просмотр обучающих видеороликов</p>
                            </div>
                        </div>
                        <div className='second_section_thirdblock_items_first_line_seconditem'>
                            {/* <p className='second_section_thirdblock_items_first_line_firstitem_number_1'>1</p> */}
                            <img src={number2} alt='Шаг второй' />
                            <div className='second_section_thirdblock_items_first_line_seconditem_text'>
                                <h3>Выполнение практических заданий</h3>
                                <p>Делаете все тогда, когда вам это удобно и в подходящем вам темпе</p>
                            </div>
                        </div>
                        <div className='second_section_thirdblock_items_first_line_thirdditem'>
                            {/* <p className='second_section_thirdblock_items_first_line_firstitem_number_1'>1</p> */}
                            <img src={number3} alt='Шаг третий' />
                            <div className='second_section_thirdblock_items_first_line_thirditem_text'>
                                <h3>Работа с куратором</h3>
                                <p>Объяснение возникших вопросов, закрепление пройденного материала и исправление ошибок</p>
                            </div>
                        </div>
                    </div>
                    <div className='second_section_thirdblock_items_second_line'>
                        <div className='second_section_thirdblock_items_second_line_firstitem'>
                        <img src={number4} alt='Шаг первый' />
                            <div className='second_section_thirdblock_items_second_line_firstitem_text'>
                                <h3>Создание итогового проекта</h3>
                                <p>Данный проект, показывающий ваши навыки, будет прекрасным дополнением к вашему портфолио</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='second_section_fourthblock'>
                <h1>Трудоустройство</h1>
                <div className='second_section_fourthblock_items'>
                     <div className='second_section_fourthblock_items_header'>
                        <div className='second_section_fourthblock_items_header_items'>
                            <h4>Должность</h4>
                            <p>ML-инженер</p>
                        </div>
                     </div>
                     <div className='second_section_fourthblock_items_renctagle'>
                        <div className='second_section_fourthblock_items_maincontent'> 
                            <h3>Технологии, которые будете использовать</h3>
                            <div className='second_section_fourthblock_items_maincontent_items'>
                                <div className='second_section_fourthblock_items_maincontent_items_firstline'>
                                    <div className='second_section_fourthblock_items_maincontent_items_firstline_firstitem'>
                                        <div id='rectangle'></div>
                                        <p>Python</p>
                                    </div>
                                    <div className='second_section_fourthblock_items_maincontent_items_firstline_firstitem'>
                                        <div id='rectangle'></div>
                                        <p>Django</p>
                                    </div>
                                    <div className='second_section_fourthblock_items_maincontent_items_firstline_firstitem'>
                                        <div id='rectangle'></div>
                                        <p>GitHub</p>
                                    </div>
                                </div>
                                <div className='second_section_fourthblock_items_maincontent_items_firstline'>
                                    <div className='second_section_fourthblock_items_maincontent_items_firstline_firstitem'>
                                        <div id='rectangle'></div>
                                        <p>Docker</p>
                                    </div>
                                    <div className='second_section_fourthblock_items_maincontent_items_firstline_firstitem'>
                                        <div id='rectangle'></div>
                                        <p>Docker Hub</p>
                                    </div>
                                    <div className='second_section_fourthblock_items_maincontent_items_firstline_firstitem'>
                                        <div id='rectangle'></div>
                                        <p>PostreSQL</p>
                                    </div>
                                </div>
                                <div className='second_section_fourthblock_items_maincontent_items_firstline'>
                                    <div className='second_section_fourthblock_items_maincontent_items_firstline_firstitem'>
                                        <div id='rectangle'></div>
                                        <p>Bash</p>
                                    </div>
                                    <div className='second_section_fourthblock_items_maincontent_items_firstline_firstitem'>
                                        <div id='rectangle'></div>
                                        <p>Nginx</p>
                                    </div>
                                    <div className='second_section_fourthblock_items_maincontent_items_firstline_firstitem'>
                                        <div id='rectangle'></div>
                                        <p>Gunicorn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='second_section_fourthblock_items_maincontent_items_money'>
                            <h3>Заработок</h3>
                            <div className='second_section_fourthblock_items_maincontent_items_money_firstitem'>
                                <p id='first_item_price' > &gt;40 000 ₽</p>
                                <p>Junior ML-инженер</p>
                            </div>
                            <div className='second_section_fourthblock_items_maincontent_items_money_seconditem'>
                                <p id='second_item_price' > &gt;100 000 ₽</p>
                                <p>Middle ML-инженер</p>
                            </div>
                            <div className='second_section_fourthblock_items_maincontent_items_money_thirditem'>
                                <p id='third_item_price' > &gt;200 000 ₽</p>
                                <p>Senior ML-инженер</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;
