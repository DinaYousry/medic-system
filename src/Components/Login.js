import React ,{useState , useEffect}from 'react'
import {Col , Container , Form , Row , Button} from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import Loading from './Loading'


function Login() {

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            navigate("/");
        }
    })

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [showloading, setShowloading] = useState(false)
    const [error, setError] = useState({})
    // const [show, setShow] = useState("true");


    async function login()
    {
        if(error.email|| error.password){
            alert("برجاء ادخال البيانات ")
            navigate("/login");
          } else {
      
        let item={email,password}
        // setError(item)
        console.warn(item)
        setShowloading(true)
        let result=await fetch("https://www.clinc.somee.com/api/Auth/token",{
            method:'POST',
            headers:{
                "Content-Type" : "application/json",
                "Accept":'application/json'
            },
            body:JSON.stringify(item)
        });
        result=await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        setError({email,password})
        navigate("/");
        setShowloading(false)

    }}

    if (!email ){
        error.email="Email is required"
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)){
        error.email="ُEmail is not valid"
    }else{
        error.email=""
    }
    if (!password ){
        error.password="Password is required"
    }else{
        error.password=""
    }

      return (
        <>
        <Container >
            <h1 className=" mt-5 text-center rounded"> Login </h1>
            <Row className="mt-5 ">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                  
                 <Form >
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                    <label >Email address</label> 
                    <Form.Control placeholder="Enter email"  type="text" name="firstName" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error.email && <p className='error' >{error.email}</p>}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                       <label>Password</label>
                      <Form.Control placeholder="Password"  type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      {error.password  && <p className='error'>{error.password}</p>}
                  </Form.Group>
               
                 </Form>
                 <Button className="success btn-block mo ml-auto mr-auto" type="submit" onClick={login}>Login</Button>
                        {
                            showloading && <Loading/>
                        }
                </Col>
            </Row>
        </Container>

                   
      </>
)
}


export default Login


