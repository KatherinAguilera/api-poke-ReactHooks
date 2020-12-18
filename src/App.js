import { useState } from 'react';
import Header from './components/Header'
import Characters from './components/Characters'

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark"
  return (
    <div className={"App " + bg}>
      <Header 
       darkMode={darkMode}
       onClick={() => setDarkMode(!darkMode)}
      />
      <Characters />
    </div>
  );
}

export default App;
