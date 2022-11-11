import React from 'react';
import './App.css';
import { Overlay } from './components/overlay/Overlay';
import { RespiteSurface } from './components/respiteSurface/RespiteSurface';

function App() {
  return (
    <div className="App">
        <RespiteSurface />
        <Overlay />
    </div>
  );
}

export default App;
