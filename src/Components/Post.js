import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Col , Container , Form , Row , Button} from "react-bootstrap"


function Post() {

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            navigate("/");
        }
    })
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [error, setError] = useState({});

    async function signUp(){
         let item={firstName,lastName,username,email,password}
         console.warn(item)

         let result= await fetch("https://www.clinc.somee.com/api/Auth/register",{
             method:'POST',
             body:JSON.stringify(item),
             headers:{
                 "Content-Type" : 'application/json',
                 "Accept": 'application/json'
             }
         })
         result= await result.json()
        //  console.warn("result", result)
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/");

        
        }

        if (!email ){
            error.email="يرجى كتابة البريد الالكتروني"
        }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)){
            error.email="ُ البريد الالكتروني غير صحيح"
        }else{
            error.email=""
        }
        if (!password ){
            error.password="يرجى كتابة الرقم السري"
        }else if(/^[ A-Za-z0-9_@./#&+-]*$/.test(password)){
            error.password="يرجي اختيار رقم سري يحتوي على حروف كبيرة وصغيرة وارقام واشارات خاصة "
        }else{
            error.password=""
        }
        if (!firstName ){
          error.firstName="يرجى كتابة الاسم الاول"
        }else{
          error.firstName=""
        }
        if (!lastName ){
          error.lastName="يرجى كتابة الاسم الاخير "
        }else{
          error.lastName=""
        }
        if (!username ){
            error.username="يرجى كتابة اسم المستخدم "
          }else{
            error.username=""
          }
  
        
        return (
            <>
                <Container >
            <h1 className=" mt-5 text-center rounded"> Sign up </h1>
            <Row className="mt-5 ">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                  
                 <Form >
                   <Form.Group className="mb-3" controlId="formBasicfirstName">
                    <label >First Name</label> 
                    <Form.Control placeholder="Enter First Name"  type="text" name="firstName"  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    {error.firstName && <p className='error'>{error.firstName}</p>}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasiclastName">
                    <label >Last Name</label> 
                    <Form.Control placeholder="Enter Last Name"  type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    {error.lastName && <p className='error'>{error.lastName}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicusername">
                    <label >Username</label> 
                    <Form.Control placeholder="Enter Username"  type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    {error.username && <p className='error'>{error.username}</p>}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <label >Email address</label> 
                    <Form.Control placeholder="Enter email"  type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error.email && <p className='error'>{error.email}</p>}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                       <label>Password</label>
                      <Form.Control placeholder="Password"  type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      {error.password && <p className='error'>{error.password}</p>}
                  </Form.Group>
               
                 </Form>
                 <Button className="success btn-block mo ml-auto mr-auto" type="submit" onClick={signUp}>Sign up</Button>

                </Col>
            </Row>
        </Container>
            </>
        )
    }


export default Post
