import React from "react";
import { Router } from "react-router-dom";
import AppRoutes from "./routes";


export default function App() {
    return(

        <Router basename="RemovalsQuoting">
            <AppRoutes/>
        </Router>
    )
}
