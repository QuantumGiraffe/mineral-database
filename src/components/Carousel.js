import React from "react";

import '../Carousel.css';


// This component will be used to render the items themselves 
export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

// Carousel Component is the main controller to control the carousel items 
const Carousel = ({ children }) => {
    return (
       <div className="carousel">
           <div className="inner" style={{ transform: "translateX(-0%)" }}>
             {React.Children.map(children, (child , index) => {
               return React.cloneElement (child, { width: "100%" });
           })}
       </div>
    </div>
    )
}

export default Carousel;