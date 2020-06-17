import React from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentWillMount=()=>{
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
      const posts=response.data
      this.setState({posts})
    })
    .catch((err)=>{
      console.log(err)
  })

  }

  render() {
    return (
      <div>
        <h1>Totol post-{this.state.posts.length}</h1>
        <ul>
          {this.state.posts.map((ele)=>{
        
               return(
               <li><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>
               )
          })}
        </ul>

      </div>
    );
  }
}
export default Posts;
