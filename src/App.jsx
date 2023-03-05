import React, { useState } from 'react';
import NavBar from './assets/NavBar';
import NewsComponent from './assets/NewsComponent';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './assets/Footer';
import LoadingBar from 'react-top-loading-bar';
import About from './assets/About';

export default function App() {
    const [progress, setProgress] = useState(0);

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <LoadingBar color='#f11946' height={3} progress={progress} />
                <Routes>
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/' element={<NewsComponent setProgress={setProgress} key="general" country={'in'} category={'general'} />} />
                    <Route exact path='/business' element={<NewsComponent setProgress={setProgress} key="business" country={'in'} category={'business'} />} />
                    <Route exact path='/entertainment' element={<NewsComponent setProgress={setProgress} key="entertainment" country={'in'} category={'entertainment'} />} />
                    <Route exact path='/general' element={<NewsComponent setProgress={setProgress} key="" country={'in'} category={'general'} />} />
                    <Route exact path='/health' element={<NewsComponent setProgress={setProgress} key="" country={'in'} category={'health'} />} />
                    <Route exact path='/science' element={<NewsComponent setProgress={setProgress} key="" country={'in'} category={'science'} />} />
                    <Route exact path='/sports' element={<NewsComponent setProgress={setProgress} key="" country={'in'} category={'sports'} />} />
                    <Route exact path='/technology' element={<NewsComponent setProgress={setProgress} key="" country={'in'} category={'technology'} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
