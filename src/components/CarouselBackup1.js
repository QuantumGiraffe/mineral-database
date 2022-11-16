import React, { useState } from "react";

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
    // creating a state-setter here that will be used to update the TranslateX value 
    const [activeIndex, setActiveIndex] = useState(0);

    

    return (
       <div className="carousel">

           {/* When the translateX value is updated, the slides change! */}
           <div 
           className="inner" 
        //    initially the following line looked like this: "translateX(0%)" , and then we added JS logic to change value when state updates
        //   need to use 100% because we are doing 100% width for each slide!
          style={{ transform: "translateX(-${activeIndex * 100}%)" }}>


             {React.Children.map(children, (child , index) => {
               return React.cloneElement (child, { width: "100%" });
           })}
       </div>
    </div>
    )
}

export default Carousel;