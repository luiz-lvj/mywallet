import { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import UserContext from './components/contexts/UserContex';
import GlobalStyle from './components/utils/GlobalStyle';
import Login from './components/Sign/Login';
import Register from './components/Sign/Register';
import Home from './components/Home/Home';
import InputPage from './components/Home/InputPage';

/* 
 user = {
   id,
   name, 
   balance,
   token
 }
*/

export default function App(){
  const [user, setUser] = useState({});

  return(
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/entrance" exact>
            <InputPage inputType="entrance" />
          </Route>
          <Route path="/exit" exact>
            <InputPage inputType="exit" />
          </Route>
          <Route>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}