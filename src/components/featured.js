import React from "react";

import newStickers from "../assets/images/featured/NewStickers.png"

import featuredArr from "./featuredArray"

export default function Featured () {
    return (
        <div>
            <div className="featured-container">
                <div className="grid-item">
                    <section>
                        <img src={newStickers}/>
                    </section>
                </div>
            </div>
            <div class="grid-container">
                {featuredArr.map((item, index) => (
                    <div key={index} class="grid-container-2 grid-item">
                        <div>
                            <img src={item.imageSrc} className="img-max-width"/>
                        </div>
                        <div className="grid-item-2">
                            {item.imageName}
                        </div>
                        <div className="grid-price-container grid-item-2">
                            <div className="grid-item-2">$2.99</div><div className="grid-item-2"><button>Add To Cart</button></div>
                        </div>
                    </div> 
                ))
                }  
            </div>
        </div>
    )
}