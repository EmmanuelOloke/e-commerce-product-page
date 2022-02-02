import Navbar from './Components/NavBar/NavBar';
import LightBox from './Components/LightBox/LightBox';
import './App.css';
// import { useState } from 'react';

function App() {
  // const [cartItems, setCartItems] = useState(0);
  // const onAddToCart () {

  // }
  return (
    <div className="App">
      <Navbar/>
      <LightBox/>
    </div>
  );
}

export default App;
