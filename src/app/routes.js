import React from "react";
import { Route, Routes } from "react-router-dom";
import { landingPage } from "../pages/landing/landingPage";
import { houseQuestion } from "../pages/questions/questionOne";

function AppRoutes() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<landingPage />} />
                <Route path="/questions" element={<houseQuestion />}/>
            </Routes>
        </div>
    );
}

export default AppRoutes;