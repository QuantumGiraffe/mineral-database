import React, { useEffect, useState } from "react";

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


    // We want to make a state that tracks when the user hovers over the carousel, and if they do, pause it 
    // setting the default to false, because initially we want the carousely to cycle and not be paused
    const [paused, setPaused] = useState(false);

    // we need to update this so that when it gets to the last slide, it goes to the first (and vice versa)
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
           newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

     setActiveIndex(newIndex);
    }


    // Now we can add some code to make it auto-cycle
    // useEffect initializes the interval
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
            // this updates updateIndex every 5 seconds
        }, 10000);

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    return (
       <div 
       className="carousel"
       onMouseEnter={() => setPaused(true)}
       onMouseLeave={() => setPaused(false)}
       >

           {/* When the translateX value is updated, the slides change! */}
           <div 
           className="inner" 
        //    initially the following line looked like this: "translateX(0%)" , and then we added JS logic to change value when state updates
        //   need to use 100% because we are doing 100% width for each slide!
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}>


             {React.Children.map(children, (child , index) => {
               return React.cloneElement (child, { width: "100%" });
           })}
       </div>

       {/* Now we need to add our button controls here */}
       <div className="indicators">
        <button 
            onClick={() => {
                updateIndex(activeIndex -1);
            }}
        >
            Prev
        </button>

        {/* Need to make it so that the page Number displays */}
        {React.Children.map(children, (child, index) => {
            return (
                <button 
                // Need to add the following line in order to indicate which page we are on
                // What this does is add the class "active" to whatever the activeIndex is
                    className={`${index === activeIndex ? "active" : ""}`}
                    onClick={() => {
                        updateIndex(index);
                    }}
                >
                    {index +1}
                </button>
            );
        })}


        <button 
            onClick={() => {
                updateIndex(activeIndex +1);
            }}
        >
            Next
        </button>
       </div>

    </div>
    )
}

export default Carousel;