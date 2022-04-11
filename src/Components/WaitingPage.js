import React from "react";
import { Container , Button } from "react-bootstrap";

function WaitingPage() {
    return (
      <>
        <Container className='fonts' style={{width:"55%" , color:"#43425D"}}>
            <h1 className=" mt-5 text-center rounded b" style={{fontSize:"48"}}> احجز ميعادك اونلاين </h1>
            <br/>
            <div className="slider"></div>
            
            <br/>   <br/>  


                <p id="cor" >  تم ارسال بياناتك بنجاح <span className="ahme1" >&#x2714;</span></p>
                <br/>  
                <br/> <br/>   
            
            <h4 className=" mt-2 text-center b" style={{fontSize:"30px"}}> سيتم التواصل عن طريق الهاتف او الايميل لتأكيد الحجز </h4>
            <br/> 
                <Button href="/patiantlog" className="btn-block mo ml-auto mr-auto mt-3"> سجل ميعاد اخر </Button>
            </Container>
        </>
        )
    }
export default WaitingPage