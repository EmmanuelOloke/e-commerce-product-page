import React, {useState} from 'react';
import Navbar from './Components/NavBar/NavBar';
import LightBox from './Components/LightBox/LightBox';
import './App.css';
import { AppContext } from './AppContext';

function App() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="App">
      <AppContext.Provider value={[quantity, setQuantity]}>
        <Navbar/>
        <LightBox/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
