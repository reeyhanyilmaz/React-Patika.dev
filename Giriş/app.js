import axios from "axios";

const getData = async (number) => {
    const {data: users} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`);
    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);

    return {"users" : users , "posts" : posts};

};

export default getData;