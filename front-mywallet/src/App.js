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
  const [user, setUser] = useState({
    id: 1,
    name: 'Luiz',
    balance: 1000,
    isBalancePositive: true,
  });

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
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/entrance" exact>
            <InputPage inputType="entrance" />
          </Route>
          <Route path="/exit" exact>
            <InputPage inputType="exit" />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}