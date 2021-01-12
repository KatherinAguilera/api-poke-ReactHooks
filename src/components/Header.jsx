// import {useContext} from 'react'
// import ThemeContext from '../context/ThemeContext'

// const Header = (props) => {
//   // const [darkMode, setDarkMode] = useState(false);

//   // const handleClick = () => {
//   //   setDarkMode(!darkMode);
//   // }

//   return (
//     <div className="Header">
//       <h1>ReactHooks</h1>
//       <button type="button" onClick={()=>props.onClick()}>
//         {props.darkMode ? "Dark Mode" : "Light Mode"}
//       </button>
//       {/* <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button> */}
//       {/* <button type="button" onClick={() => setDarkMode (!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button> */}
//     </div>
//   );
// }

// export default Header;

import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
export default function Header() {
    const {darkMode, setDarkMode} = useContext(ThemeContext);
    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className={ `App-header ${darkMode? "HeaderDark": "HeaderLight"} `} >
            <h1>Poke API</h1>
            <div className="button">
              <button type="button" onClick={handleClick}>{darkMode ? 'Dark 🌑' : 'Light 🌞'}</button>
            </div>

        </div>
    )
}