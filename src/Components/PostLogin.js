import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class PostLogin extends Component {


    changeHandler = (e) =>{
        this.setState ({[e.target.name]: e.target.value})
    }
    
    submitHandler = e => {
        e.preventDefault();
    
        const data ={
            email : this.email ,
            password : this.password
        }
    
    axios.post("https://www.clinc.somee.com/api/Auth/token", data)
    .then(response => {
        localStorage.setItem('token',response.token);
    })
        .catch(err =>{
            console.log(err)
        })
    }

render(){

    // const { email , password} = this.state

return (
    <div>
        <form onSubmit={this.submitHandler}>
            
            <input type="email" name="email"  onChange={e=>this.email =e.target.value }/> ايميل  .
            <br/>
            <input type="password" name="password"  onChange={e=>this.password =e.target.value}/>كلمة سر
            <br/>
           <button type='submit' >submit</button>
        </form>


                <button ><Link to={'/register'}>sign up</Link></button>

    </div>
)
}
}

export default PostLogin
