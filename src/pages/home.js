import React from "react";

import vision from "../assets/images/Vision.png"

export default function Home () {
    return(
        <div className="home">
            <div className="vision-box-container" >
                <h1 className="vision-box-container-text">
                    My prayer is that <br/>
                    this space and these pieces <br/>
                    would be safe for you <br/>
                    to explore the joy of creating.
                </h1>
                <img src={vision} alt="prop"/>
            </div>
        </div>
    )
}