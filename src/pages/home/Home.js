import React from 'react';
import './Home.css';
import Gallery from "../../components/gallery/Gallery";
import Story from "../../components/story/Story";
import Lesson from "../../components/lesson/Lesson";
import Header from "../../components/header/Header";

const Home = () => {
    return (
        <div>
            <Header/>
        <main>
            <Gallery/>
            <Story/>
            <Lesson/>
        </main>
        </div>
    );
};

export default Home;