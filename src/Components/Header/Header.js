import React from 'react';
import "./Header.css"
import logo from "./logo.svg"
import icon_profile from "./Avatar.svg"
import { Link } from 'react-router-dom';



function Header(){
    return(
            <div className='Navbar'>
              <div className='Navbar-countainer'>
                <div className='Navbar-logo'>
                    <Link to="/"><img src={logo} alt='logo' ></img></Link>
                        <p>Unique</p>
                    </div>
                    <div className='Navbar-list'>
                        <ul className='Navbar-list-items'>
                            <li><Link to="/Courses">Курсы</Link></li>
                            <li><Link to="/Lectures">Лекции</Link></li>
                            <li><Link to="/Teachers">Преподаватели</Link></li>
                            <li><Link to="/Educational_materials">Учебные материалы</Link></li>
                            <li><Link to="/Messages">Сообщения</Link></li>
                        </ul>
                    </div>
                    <div className='Navbar-profile'>
                        <img src={icon_profile} alt='logo'></img>
                        <a href='/' className='Person_account'>Оганисян Арсений</a>
                    </div>
              </div>
            </div>
    );
}

export default Header;