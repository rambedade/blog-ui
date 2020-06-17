import React from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'

class PostsShow extends React.Component{
    constructor(){
        super()
            this.state={
                users:{},
                posts:{},
                comments:[]

            }
        
    }
    componentDidMount=()=>{
        const id=this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            const posts=response.data
            this.setState({posts})
        axios.get(`http://jsonplaceholder.typicode.com/users/${posts.userId}`)
        .then((response)=>{
            const users=response.data
            this.setState({users})
            console.log(users)
        })
           
            
        })
      
        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>{
            const comments=response.data
            this.setState({comments})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <h1>username-{this.state.users.username}</h1>
        <h3>Title-{this.state.posts.title}</h3>
        <h3>Body-{this.state.posts.body}</h3>
        <hr/>
        <h3>comments</h3>
          <ul>
              {this.state.comments.map((ele)=>{
                       return(
                       <li>{ele.body}</li>
                       
                        )
              
              })
              }
          </ul>
          <hr/>
          
        <p><Link to={`/users/${this.state.users.id}`}>for more author page-{this.state.users.username} </Link></p>
              </div>
        )
    }
}
export default PostsShow