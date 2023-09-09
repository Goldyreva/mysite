import React from 'react';
import school_photo from "../../images/school_photo.png";
import last_photo from "../../images/last_photo.png";
import s from './Gallery.module.css';
const Gallery = () => {
    return (
        <div className={s.gallery} id="gallery">
            <h1>Фотография – это мгновение жизни, которое остается с нами навсегда.</h1>
            <div className={s.gallery__photos}>
                <div className={s.gallery__photos__school}>
                    <img src={school_photo} alt=""/>
                    <p>школьное фото</p>
                </div>
                <div className={s.gallery__photos__school}>
                    <img src={last_photo} alt=""/>
                    <p>последнее фото</p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;