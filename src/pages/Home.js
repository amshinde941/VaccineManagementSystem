import React from "react";
import Home from "../components/Home/Home";
import data from '../models/home';

const HomePage = () => {
    return(
        <div className="">
            <Home data={data}/>
        </div>
    )
}

export default HomePage;