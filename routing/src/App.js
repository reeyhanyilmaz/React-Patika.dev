import * as React from "react";
// import {BrowserRouter, Routes, Route, Link , Outlet} from "react-router-dom";
import './App.css';
import {BrowserRouter, Routes, Route, Navlink , Outlet, NavLink} from "react-router-dom";
//pages
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";

//kodluyoruz videosuna göre uyarladıgım
function App() {
  return (  
    <BrowserRouter>
    {/* <div>
      <nav>
        <ul>
          <li>
          <Link to="/">Home</Link>           
          </li>

          <li>
          <Link to="/about">About</Link>
         <a href="/about">About</a>  */}
         {/* HTML ile link verdiğimizde sayfa yenilenir ancak react router ile component yenilenir sadece, sayfa komple yenilenmez. */}
          {/* </li>

          <li>
          <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
     <Outlet />
    </div> */}


    {/* NAVLİNK********************************* */}
    <div>
      <nav>
        <ul>
          <li>
          <NavLink to="/">Home</NavLink>           
          </li>

          <li>
          <NavLink to="/about" style={({isActive}) => ({color: isActive ? "red" : "yellow"})}>About</NavLink>
          {/* NavLink ile stil verdik. Link aktif ise red değil ise sarı olsun dedik. */}
          </li>
            
          <li>
          <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    </div>


    {/* patika videosunda exact kullanılmış. v6 ile Routes içine yazıldığından böyle bi sorun olmuyor.  */}
      {/* <Routes>
        <Route path="/*" element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="user/:id" element={<User />} />  */}
         
        {/* En son  </Route> yani home sayfanın kapaması, home içine koyduğumuz için hepsini gösterecek. */}
      {/* </Routes>
      </BrowserRouter> */}


      {/* NESTED ************************** */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />          
          <Route path="/user/:id" element={<User />} />           */}
         {/* </Route> */}
        {/* En son  </Route> yani home sayfanın kapaması, home içine koyduğumuz için hepsini gösterecek. */}
      {/* </Routes> */}

      

      {/* NO MATCH*********************************** */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />          
          <Route path="/user/:id" element={<User />} />           
          <Route path="*" element={ <main style={{ padding: "1rem" }}>
            {/* burada yıldız "*" diğerlerini bulamazsan ehr ne olursa bununla eşleş demek.  */}
          <p>There' s nothing here!</p> </main>}/>      
       </Routes>


      </BrowserRouter>
  );
}

export default App;
