import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from 'react';
import { RecoilRoot } from "recoil";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
    return (
        <div className="bg-primary-950 font-sansserif text-white">
            <Nav />
            <div className="p-8 flex h-screen justify-center items-center text-center">
                <BrowserRouter >
                    <RecoilRoot>
                        <Suspense fallback={<div>loading...</div>}>
                            <Routes >
                                <Route path='/' element={<Home />} />
                                <Route path='/quiz' element={<Quiz />} />
                                <Route path='/result' element={<Result />} />
                            </Routes >
                        </Suspense>
                    </RecoilRoot>
                </BrowserRouter >
            </div>
            <Footer />
        </div>
    )
}

export default App
