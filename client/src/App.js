import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { LandingPage } from "./pages/landing/landingPage"
import  { Login } from "./pages/login/login"
import { Signup } from "./pages/login/signup"
import { LandingPage } from "./pages/landing/landingPage";
import { BedroomQuestion} from "./pages/questions/bedroomQuestion/questionOne";
import { AddressForm  } from "./pages/questions/addressForm/questionTwo";
import { DoubleStoreyQuestion } from "./pages/questions/accessQuestion/questionThree";
import { FurnishedQuestion } from "./pages/questions/furnishedQuestion/questionFour";
import { MoveDate } from "./pages/questions/moveDate/questionFive";
import { QuoteSubmit } from "./pages/ending/endingPage"


export default function App() {
    return(

        // <Router basename="RemovalsQuoting">
        <Router>
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />}/>
            <Route path='/landing' element={<LandingPage />}/>
            <Route path='/landing/questionOne' element={<BedroomQuestion />} />
            <Route path="/landing/questionTwo" element={<AddressForm />} />
            <Route path="/landing/questionThree" element={<DoubleStoreyQuestion />} />
            <Route path="/landing/questionFour" element={<FurnishedQuestion />} />
            <Route path="/landing/questionFive" element={<MoveDate />} />
            <Route path="/quoteSubmit" element={<QuoteSubmit />}/>
            </Routes>
        </Router>
    )
}