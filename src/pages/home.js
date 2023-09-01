import React from "react";
import spacePatches from "../assets/images/Space.jpeg"

export default function Home () {
    return(
        <div className="home">
            <div>
                <h1>SPACE PATCHES IN NOW!</h1>
            </div>
            <div>
                <img src={spacePatches} alt="Space Patches!" className="img-content"/>
            </div>
            <div>

            </div>
        </div>
    )
}