//Theme Switcher
// import {useContext} from 'react'
import Button from './Button';
import Header from './Header';
// import ThemeContext from '../context/ThemeContext';
import Profile from './Profile';

//Custom Context Hook**********************************
import {useTheme} from "../context/ThemeContext"

function Container() {
// const {theme} = useContext(ThemeContext);

//Custom Context Hook**********************************
const { theme} = useTheme();

  return (
    // <div className={`app ${theme === "dark" ? theme : ""}`}>    
     <div className={`app ${theme}`}>
         {/* 2.yöntem    */}

         <Header/> 
         <hr />      
         <Button/>


{/* Multi Context****************************** */}
          <hr />
          <Profile />
    </div>
  )
}

export default Container;