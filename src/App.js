import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./home";
import User from "./users";
import Posts from "./post";
import UserShow from "./userShow";
import PostShow from "./postShow";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/users">user</Link>&nbsp;&nbsp;
        <Link to="posts">Posts</Link>&nbsp;&nbsp;
        <Route path="/" component={Home} exact={true} />
        <Route path="/users" component={User} exact={true} />
        <Route path="/users/:id" component={UserShow} />
        <Route path="/posts" component={Posts} exact={true}/>
        <Route path="/posts/:id" component={PostShow} />
      </div>
    </BrowserRouter>
  );
}
export default App;

