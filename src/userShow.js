import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            post:[]

        }
    }
    componentDidMount=()=>{
      
        const id=this.props.match.params.id
        console.log(id)
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        
        .then((response)=>{
            const user=response.data
            this.setState({user})
            console.log(user)
           
        })
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
       
        .then((response)=>{
            const post=response.data
            this.setState({post})
            console.log(post)
          })
          .catch((err)=>{
            console.log(err)
        })
         
        
    }
  render(){
      return(
          <div>
             
      <h2>username-{this.state.user.username
      }</h2><br/>
     
      <h3> posts written by user-</h3>
      <ul>
          {
              this.state.post.map((ele)=>{
                  return(
                      <li>
                          <Link to={`/posts/${ele.id}`}>{ele.title}</Link>
                      </li>
                  )

                  
              })
          }
      </ul>
      
           
     
    
          </div>
      )
  }
}
export default UserShow