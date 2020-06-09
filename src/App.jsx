import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';
import AuthenticationSignIn from './views/Authentication/sign-in';
import AuthenticationSignUp from './views/Authentication/sign-up';
import LandingPage from './views/LandingPage';
import PostView from './views/Post/index';
import PostAdd from './views/Post/postAdd';
import Profile from './views/Profile/profile';
import Social from './views/Social';
import Search from './views/Search/index';
// import SimpleMap from './components/SimpleMap';
import './App.scss';


function App() {
  const [loggedUser, setLoggedUser] = useState();

  function updateUser(user) {
    setLoggedUser(user);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route
            path="/signin"
            render={(props) => (
              <AuthenticationSignIn {...props} updateUser={updateUser} />
            )}
          />
          <Route exact path="/signup" component={AuthenticationSignUp} />
          <Route exact path="/posts" component={PostView} />
          <Route exact path="/post/add" component={PostAdd} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/social" component={Social} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
