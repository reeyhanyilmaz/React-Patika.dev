import {useEffect ,useState} from 'react'
import axios from "axios";

function User() {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //.yöntem
    // useEffect(() => {
    //     //json yapmazsak end pointteki user bilgilerine erişemeyiz.
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then((data) => {
    //     setUser(data);
    //     setIsLoading(false);
    //     })
    //     .catch((e) => console.log(e));
    // },[])

    //2.yöntem
    //   useEffect(() => {
    //     //useEffect 1 kere render edilsin diye kullanıldı.
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then((data) => setUser(data))
    //     .catch((e) => console.log(e))
    //     .finally(() => setIsLoading(false));   
    // },[])



    // AXIOS ***************
    useEffect(() => {
            axios("https://jsonplaceholder.typicode.com/users")
            //axios'da json yapmamıza gerek yok object verir direk o yüzden ilk "then" kısmını sildik.
            .then((res) => setUser(res.data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));   
        },[])
    
  return (
    <div>
        <h1>User</h1>

        {isLoading && <div> Loading... </div>}    

        {
            user.map(users => 
            <div key={users.id}>{users.name}</div>)
        }

    </div>
  )
}

export default User;