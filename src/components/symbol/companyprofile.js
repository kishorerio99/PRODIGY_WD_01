import React from "react";
import './companyprofile.css';

function Companyprofile({img,name}) {
    return(
       <div className="prof">
           {/* <h1>hii</h1> */}
           <img src={img} alt="company prof"/>
           <h6>{name}</h6>
       </div>
    )
}

export default Companyprofile;