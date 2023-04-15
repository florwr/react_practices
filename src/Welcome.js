import { useState } from "react";
export default function Welcome(props){
    const [counter, setCounter]=useState(0);
    const{message,name}=props;
    
    return(
        <div>
                    <p>HOLA {name},{message}</p>
                    <h2>Contador de react con hooks</h2>
                    <h4>El numero del contador es={counter}</h4>
                    <button type="submit" onClick={()=>setCounter(counter+1)}>
                        Sumar Contador
                    </button>
        </div>

    )
}