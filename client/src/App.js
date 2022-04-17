import React from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";
import './App.css';

function App(){
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" component={CreateRoom}></Route>
          <Route path="/room/:roomID" component={Room}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;