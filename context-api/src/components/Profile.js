// import {useContext, useState} from 'react';
// import UserContext from '../context/UserContext';


  //Custom Context Hook**********************************
  import {useState} from 'react';
import {useUser} from '../context/UserContext';

function Profile() {
  // const {user, setUser} = useContext(UserContext);

  //Custom Context Hook**********************************
  const {user, setUser} = useUser();

  const[loading, setLoading] = useState(false);

  const handleLogin = () => {
      setLoading(true);
      setTimeout(() => {
          setUser({
                id:1,
                username: "reeyhanyilmaz",
                bio: "Chemist & Front-End Developer"});
      setLoading(false);
      },1500);
  };

  const handleLogout = () => {
      setUser(null)
  };

  return (
    <div>
        {
          !user &&  <button onClick={handleLogin}>{loading ? "loading..." : "Login"}</button>
        }
        
        <br />
        <code>{JSON.stringify(user)}</code>

        <br />
        {
          user && <button onClick={handleLogout}>Logout</button>
        }
    </div>
  )
}

export default Profile;