import React from 'react';
import './App.css';
import { Overlay } from './components/overlay/Overlay';
import { RespiteSurface } from './components/respiteSurface/RespiteSurface';

function App() {
  return (
    <div className="App">
        <Overlay />
        <RespiteSurface />
    </div>
  );
}

export default App;
