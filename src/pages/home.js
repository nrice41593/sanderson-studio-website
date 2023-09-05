import React from "react";
import spacePatches from "../assets/images/Space.jpeg"

export default function Home () {
    return(
        <div className="home">
                <img src={spacePatches} className="img-max-width"/>
        </div>
    )
}