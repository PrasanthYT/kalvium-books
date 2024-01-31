import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Registered from "./Components/Registered";

function AllRoutes(){
    return(
        <>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>
    )
}

export default AllRoutes;