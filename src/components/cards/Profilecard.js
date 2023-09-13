
import "./profilecard.css"
function Profilecard({img,name,des}){
    return(
        <div className="pro-cardMain">
             <img src={img} alt="profilepic"/>
             <h3>{name}</h3>
             <span>{des}</span>
        </div>
    )
}

export default Profilecard;