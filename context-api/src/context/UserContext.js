import {createContext, useContext, useState} from "react";

const UserContext =  createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const values = {user, setUser }

    return <UserContext.Provider value={values} >{children}</UserContext.Provider>
}

// export default UserContext;

//Custom Context Hook**********************************
export const useUser = () => useContext(UserContext);