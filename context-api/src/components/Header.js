//context Provider***********************************
// import {useContext} from 'react';
// import ThemeContext from '../context/ThemeContext';

//Custom Context Hook**********************************
import {useTheme} from "../context/ThemeContext"


function Header() {
// const { theme, setTheme } = useContext(ThemeContext);

//Custom Context Hook**********************************
const { theme, setTheme } = useTheme();

  return (
    <div>Active Theme: {theme} (Header componentten gelen)
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Change Theme
      </button>
    </div>
    )
}

export default Header;