import React from "react";
import {Load} from '../assets';

function Loading() {
    return (
        <div  className='fonts'>
            <br/><br/><br/>
            {/* <br/><br/><br/> */}
            {/* <br/><br/><br/><br/><br/><br/> */}
            <img id="myDIV" src={Load} alt=""/>
            <br/><br/>
            <p className="load" >....... جاري تسجيل بياناتك </p>
        </div>
    )
}

export default Loading