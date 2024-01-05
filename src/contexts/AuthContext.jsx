import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState("Guest")

  useEffect(()=>{
    const getLoginData = sessionStorage.getItem("UserLoginKey")
    if(getLoginData){
      const data = JSON.parse(getLoginData)
      setIsAuth(data.isAuth)
      setUser(data.user)
    }
  },[])

  useEffect(()=>{
    const obj={
      isAuth,
      user
    }
    sessionStorage.setItem("UserLoginKey", JSON.stringify(obj))
  },[user, isAuth])

  const contextLoginHandler = (value) => {
    setIsAuth(true);
    setUser(value)
  };

  const contextLogoutHandler = () => {
    setIsAuth(false);
    setUser("Guest")
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, contextLoginHandler, contextLogoutHandler, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
