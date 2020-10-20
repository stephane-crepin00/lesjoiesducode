import React from 'react';
import './App.css';
import My_body from './Body';
import My_Footer from './Ending';
import Navbar from './Nav_bar';

function App() {
  return (
    <div class="root">
      <Navbar></Navbar>
      <My_body></My_body>
      <My_Footer></My_Footer>
    </div>
  );
}

export default App;
