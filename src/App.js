import React from 'react';
import Navbar from './Components/NavBar/NavBar';
import LightBox from './Components/LightBox/LightBox';
import './App.css';
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
    <div className="App">
        <Navbar/>
        <LightBox/>
    </div>
      </AppProvider>
  );
}

export default App;
