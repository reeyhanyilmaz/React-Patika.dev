import {useParams, Link, Outlet} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from 'axios';

function User() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() =>{
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => setUser(res.data))
    .finally(() => setLoading(false)); 
  },[id]); // Burası normalde component sadece mount olduğu an çalışıyor, ama burasının id değiştiği anda da çalışması lazım o yüzden dependency kısmına id'yi yazdık.

  return (
    // <div>
    //   <h1>User Detail</h1>
    //   id: {id}
    // </div>

    <div>
      <h1>User Detail</h1>
      {loading && <div>Loading...</div>}

      {/* sayfa yüklenirken {} gözükmesin diye !loading şeklinde yazdık. Loading yoksa göster demek*/}
      {!loading && <code>{JSON.stringify(user)}</code>}

      <br />
      <br />
      {/* id string bi ifade. id+1 dersek yanına 1+1 yani 11 gbi yapar. paseInt ile integer ifadeye cevirdik. */}
      <Link to= {`/user/${parseInt (id) +1}`}>Next User({parseInt(id) +1})</Link>
      <Outlet/>
    </div>
 
    
  )
}

export default User;