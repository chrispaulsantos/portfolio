import React from 'react';
import './App.css';
import Header from './components/molecules/header/header';
import RootNavigation from './navigation/root-navigation';

function App() {
  return (
    <div>
      <div className="bg-container"></div>
      <Header />
      <RootNavigation />
    </div> 
  );
}

export default App;
