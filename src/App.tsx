import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Pricing, Support, Platforms, Home } from './pages'
type Props = {};

const App = (props: Props) => {
    return (
        <div className="w-full h-full flex flex-col">
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/support" element={<Support />} />
                <Route path="/platforms" element={<Platforms />} />
            </Routes>
            </BrowserRouter>
            </div>
    );
};

export default App;
