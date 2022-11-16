import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Carousel, { CarouselItem } from './components/Carousel.js'

function App() {
  return (
    <div className="App">
    
     <Header />
     


     <div className='Carousel-viewport'>
      <br></br>
      <h3>-Carousel goes here-</h3>
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
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
