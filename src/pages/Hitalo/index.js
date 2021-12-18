import {useState} from "react";
import {Button} from "@mui/material";

export default function Hitalo () {
    const [quantity, setQuantity] = useState(0);
    const [visibility, setVisibility] = useState (true);

const decrement = () => {
    if (quantity === 0) {
        return;
    }
    setQuantity(quantity-1);    
}

const increment = () => {
    if(quantity === 10) {
        return
    }
    setQuantity(quantity+1);
}
    
    return (
        <div>
            <br/>
            Olá mundo!

        <hr/>
        <br/>

        <div hidden={!visibility}>
        Qualquer coisa!
        </div>
            <Button onClick={() => setVisibility(!visibility)}>
                {visibility === true ? "Ocultar" : "Mostrar"}
            </Button>

        <hr/>
        <br/>

        <Button variant="outlined" onClick={decrement}>-</Button>
        {quantity}
        <Button variant="outlined" onClick={increment}>+</Button>
        
        </div>
    )

}