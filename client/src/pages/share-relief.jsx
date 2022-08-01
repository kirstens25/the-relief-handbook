import { useLocation } from "react-router-dom";

export default function ShareRelief() {
    const location = useLocation();

    return (
    <>
    <div>
        <h2>Hi Relief Teacher, here's the information you need!</h2></div>
        <p>{location.state.formData}</p>
   <div><h4>Check to see if there are any Extra Curricular Activities for today:</h4>
</div> 
</>
)
}


