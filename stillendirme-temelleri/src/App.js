
import './App.css';
import A from './Components/A';
import B from './Components/B';

function App() {
  return (
    <div className="App">
      <header className="App-header">

       {/* STİL TANIMI YAPMAK!!  *************/}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* CSS gibi background-color yazamıyoruz. camelCase yazı tipi ile stil verilir. style ={} ve içine object gelecek tekrardan {} ile stilleri verebiliriz. */}

        {/* <div style={{color:"red", backgroundColor: "white" , paddingTop: 50}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis possimus hic, sed quam sit dicta illum repudiandae. Minima fugit earum quidem impedit voluptatum, quasi, repellendus voluptate dicta exercitationem illo similique!
        </div> */}

        {/* Bootstrapten alınan components */}
        {/* <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div> */}



        {/* MODULE CSS!! *********************/}

        <A />
        <B />
      </header>
    </div>
  );
}

export default App;
