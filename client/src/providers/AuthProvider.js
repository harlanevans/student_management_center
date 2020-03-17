import React, {useState} from 'react';
import axios from 'axios';

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null)

  const handleRegister = (user, history) => {
    axios.post('/api/auth', user).then(res => {
      setUser(res.data.data);
      history.push('/')
    })
    .catch(res => {
      console.log(res)
    })
  }

  const handleLogin = (user, history) => {
    axios.post('/api/auth/sign_in', user).then(res => {
      setUser(res.data.data)
      history.push('/')
    })
    .catch(res => { 
      console.log(res)
    })
  }

   const handleLogout = history => {
      axios
        .delete("/api/auth/sign_out")
        .then(res => {
          setUser(null);
          history.push("/login");
        })
        .catch(res => {
          console.log(res);
        });
    };
  

  return(
    <AuthContext.Provider value={{
      authenticated: user !== null,
      handleRegister: handleRegister,
      handleLogin: handleLogin,
      handleLogout: handleLogout,
      setUser: (user) => setUser(user)
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}