import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import Courses from '../../Pages/Courses';
import Lectures from '../../Pages/Lectures';
import Teachers from '../../Pages/Teachers';
import EducationalMaterials from '../../Pages/Educational_materials';
import Messages from '../../Pages/Messages';

const RouterLink = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Home/>} path="/" />
                <Route element = {<Courses/>} path="/Courses" />
                <Route element = {<Lectures/>} path="/Lectures" />
                <Route element = {<Teachers/>} path="/Teachers" />
                <Route element = {<EducationalMaterials/>} path="/Educational_materials" />
                <Route element = {<Messages/>} path="/Messages" />
            </Routes>
        </BrowserRouter>
    );
}

export default RouterLink;
