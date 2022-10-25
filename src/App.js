import React from 'react';
import './style.css'
import Navbar from './components/Navbar';
import Somepic from './components/Somepic';
import Card from './components/Card';
export default function App() {
  return (
    <div>
      <Navbar />
      <div className='section'>
        <Somepic />
        <Card />
     </div>
    </div>
  );
}

