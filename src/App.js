import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Carousel, { CarouselItem } from './components/Carousel.js'

import Auralite from "./auralite.jpg"

function App() {
  return (
    <div className="App">
    
     <Header />
     
    {/* <div>
    <img src={Auralite} />
    </div> */}

     <div className='Carousel-viewport'>
      <br></br>
      <h3>-Carousel goes here-</h3>
      <Carousel>
        <CarouselItem>
        <img src="./img/tanzanite.jpeg" />
          Item 1</CarouselItem>

        <CarouselItem className='Carousel-img'>
        <img src={Auralite} />
         Item 2</CarouselItem>

        <CarouselItem>
        <img src="./img/moldavite.webp" />
        Item 3</CarouselItem>

      </Carousel>


          {/* This is how I did in my website:
        <div class="carousel-item">
                  <img src="../img/3.jpg" />
              </div> */}


     </div>

     <div>
      <br></br>
      <h3>-Menu goes here-</h3>
      {/* <Menu /> */}
     </div>


    


    </div>
  );
}

export default App;
