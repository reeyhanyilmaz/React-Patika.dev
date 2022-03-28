// import {useContext} from 'react';
// import ThemeContext from '../context/ThemeContext'; //.. dosyada geri gelmek demek.

//Custom Context Hook**********************************
import {useTheme} from "../context/ThemeContext"

function Button() {
    //useContext'i kullandık ve verisine erişmek istediğimiz componet'i import ederek verileri çekebiliriz. ThemeContext'de value="dark" biz dark'a erismeye calıştık.
    // const data = useContext(ThemeContext);
    // console.log(data);
    //   return (
    // <div>Button</div>
    //   )


    //context Provider ******************************
    // const { theme, setTheme } = useContext(ThemeContext);
    //   return (
    //     <div>
    //       Active Theme : {theme} (Button compenentten gelen)
    //       <br />         
    //       <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
    //     </div>
    //   ); 

//Custom Context Hook**********************************
    const { theme, setTheme } = useTheme();
      return (
        <div>
          Active Theme : {theme} (Button compenentten gelen)
          <br />         
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
        </div>
      ); 
}

export default Button;