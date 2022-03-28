//context state yönetim aracıdır. Genel amacı global state'i yönetmek karmaşık kod diziminin önüne geçmek.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// import {createContext} from "react";
// const ThemeContext = createContext();
// export default ThemeContext;


//context Provider****************************
// import {createContext , useState} from "react";


// Context Provider Side Effects***************
import {createContext , useState, useEffect, useContext} from "react";

const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//     // const [theme, setTheme] = useState("dark");
//    const values ={
//         theme,
//         setTheme,
//     };

//     return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
// };


// Context Provider Side Effects***************

 export const ThemeProvider = ({ children }) => {
    // const [theme, setTheme] = useState("dark");   
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(() =>{
        localStorage.setItem("theme" , theme)
    },[theme]);

    const values ={
        theme,
        setTheme,
    };

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
};
// export default ThemeContext;


//Custom Context Hook**********************************
export const useTheme= () => useContext(ThemeContext);
