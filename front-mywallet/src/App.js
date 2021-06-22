import { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import UserContext from './components/contexts/UserContex';
import GlobalStyle from './components/utils/GlobalStyle';
import Login from './components/Sign/Login';
import Register from './components/Sign/Register';

export default function App(){
  const [user, setUser] = useState({});

  return(
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}