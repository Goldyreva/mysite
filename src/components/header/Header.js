import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__description}>
                <h1>Привет! Познакомимся?</h1>
                <p> Я - Лиза, мне 22 года и я занимаюсь веб - разработкой. На этом сайте вы можете узнать небольшую историю моего увлечения программированием и посмотреть видеоурок по анимации на CSS.</p>
                <a href="https://github.com/Goldyreva/mysite" className={s.header__description__link}>Ссылка на репозиторий с этим сайтом</a>
            </div>
            <div className={s.header__links}>
                <a href="#gallery" className={s.header__links__link}>Галерея</a>
                <a href="#story" className={s.header__links__link}>Моя история</a>
                <a href="#lesson" className={s.header__links__link}>CSS урок</a>
            </div>
        </div>
    );
};

export default Header;