import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import BMICalculator from './components/BMICalculator/BMICalculator';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <BMICalculator />
      </div>
    </div>
  );
}

export default App;
