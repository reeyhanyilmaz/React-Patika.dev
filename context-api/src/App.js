
import './App.css';
import Container from './components/Container';
// import Button from './components/Button';
// import ThemeContext from './context/ThemeContext';
// import Header from './components/Header';

//context Provider
import { ThemeProvider } from './context/ThemeContext';


//Multi Context
import { UserProvider } from './context/UserContext';

function App() {
  return (
      //datayı sağlayıcı demek provider.
      // <ThemeContext.Provider value="dark">        
      //   <Button/>
      // </ThemeContext.Provider>


      //context Provider
      <ThemeProvider value="dark">  
         {/* <Header/> //theme switcher'da ile conianer gönderdik bu kısmı.
         <hr />      
         <Button/> */}

        {/* Multi Context  */}
        <UserProvider>

          {/* Theme Switcher */}
          <Container/>

         </UserProvider> 
       </ThemeProvider>
   
  );
}

export default App;
