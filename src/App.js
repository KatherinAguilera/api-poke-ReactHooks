// import { useState } from 'react';
// import Header from './components/Header'
// import Characters from './components/Characters'

// import './App.css';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark"
//   return (
//     <div className={"App " + bg}>
//       <Header 
//        darkMode={darkMode}
//        onClick={() => setDarkMode(!darkMode)}
//       />
//       <Characters />
//     </div>
//   );
// }

// export default App;

import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import ThemeContext from './context/ThemeContext';
import React, { useState } from 'react'



function App() {

  
  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <div className={darkMode? "Dark": "Light"}>
          <Header />
          <div className="Content">
            <Characters/>
          </div>
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
