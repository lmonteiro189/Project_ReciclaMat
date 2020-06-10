import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './views/LandingPage';
import PostList from './views/Post/PostList';
import PostView from './views/Post/PostCreate/index';
import PostAdd from './views/Post/postAdd';
import Profile from './views/Profile/profile';
import Search from './views/Search/index';
// import SimpleMap from './components/SimpleMap';
import './App.scss';
import AuthenticationSignUp from './views/Authentication/SignUp/sign-up';
import AuthenticationSignIn from './views/Authentication/SignIn/sign-in';

function App() {
  const [loggedUser, setLoggedUser] = useState();

  function updateUser(user) {
    setLoggedUser(user);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            path="/signin"
            render={(props) => <AuthenticationSignIn {...props} updateUser={updateUser} />}
          />
          <Route exact path="/signup" component={AuthenticationSignUp} />
          <Route exact path="/posts" component={PostList} />
          <Route exact path="/post/add" component={PostView} />
          <Route exact path="/post/add" component={PostAdd} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
