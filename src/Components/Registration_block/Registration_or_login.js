import React from 'react';
import "./Registration_or_login.css"
import Submit from '../Buttons/Submit';
const RegistrationOrLogin = () => {
    return (
            <div className='content-countainer'>
                <div className='content-countainer-text'>
                    <h1>Курсы от преподавателей 
                        ведущих вузов России</h1>
                    <p>Улучшите свою успеваемость.
                        Более 300 курсов, найдется любой на ваш интерес. 
                        Поможем, если возникли трудности в учебе.</p> 
        
                </div>
                <div className='content-countainer-form'>
                    <div className='content-countainer-form-sign-in' >
                        <button className='Sign-in'>Вход</button>
                        <form className='form-authorizations'>
                            <input type="email" placeholder='Логин или код' />
                            <input type="password" placeholder='Пароль' />
                            <Submit textBtn="Войти" />                           
                            <a href="/">Забыли пароль?</a>
                        </form>
                    </div>
                    <div className='content-countainer-form-sign-up'>

                    </div>
                </div>
            </div>
    );
}

export default RegistrationOrLogin;
