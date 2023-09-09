import React from 'react';
import s from './Lesson.module.css';
import fly from '../../images/fly.png'
import video from '../../videos/lesson.mp4'
const Lesson = () => {
    return (
        <div className={s.lesson} id="lesson">
            <div className={s.lesson__example}>
                <h1>Анимация полета на CSS</h1>
                <img src={fly} alt="fly"/>
            </div>
            <div className={s.lesson__video}>
                <video controls>
                    <source
                        src={video}
                        type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Lesson;