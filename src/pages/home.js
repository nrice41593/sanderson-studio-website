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
                <img className="img-100" src={vision} alt="prop"/>
            </div>
            <div className="vision-box-container"
                style={{
                    flexDirection:"row",
                    alignItems: "center",
                    marginLeft: 5,
                    marginRight: 5,
                }}
            >
                <h3 className="galanthia"
                    style={{
                        fontSize: 600,
                        fontWeight: 5,
                        margin: 0,
                        opacity: .4,
                    }} 
                >
                    Vision
                </h3>
                <span 
                    style={{
                        fontSize: 25,
                        lineHeight: 2,
                        textAlign: 'left'
                    }}
                >
                    Creating and experiencing art requires a steady and unhurried spirit.<br/>
                    An opening of our soul in breath, momentum, and grace. <br/>
                    It requires us to be comfortable holding two
                    things at once. <br/>
                    Embracing both the delicate nature of creating work and the messy
                    pieces that come out too.<br/>
                    Most of all in creating we tap into the piece of the creator in us. <br/>
                    Which is why it gives us
                    life, hope, and joy.<br/>
                    
                    My prayer is that this space and these pieces would be safe for you
                    to explore the joy of creating.
                </span>
            </div>
        </div>
    )
}