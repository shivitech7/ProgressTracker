import React from "react";
import Listening from "./Components/Listening";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Reading from "./Components/Reading";
import Writing from "./Components/Writing";
import Speaking from "./Components/Speaking";

const Main = () => {
    return (
        <div className="container">

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Listening />} />
                    <Route path='/reading' element={<Reading />} />
                    <Route path='/writing' element={<Writing />} />
                    <Route path='/speaking' element={<Speaking />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main;