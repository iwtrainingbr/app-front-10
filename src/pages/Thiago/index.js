import {useState} from "react";
import {Button} from "@mui/material";

export default function Thiago() {
  const [quantity, setQuantity] = useState(0);
  const [visibility,setVisibility] = useState(true);

const decrement =() =>{
  if (quantity === 0) {
    return;
  }
  setQuantity(quantity - 1);
}

const decrement =() =>{
  if (quantity === 10) {
    return;
  }
  setQuantity(quantity + 1);
}



  return (
    <div>
    bem vindo, Thiago

      <hr/>
      <div hidden={!visibility}>flash
      </div>
        <Button onClick = {()=> setVisibility(!visibility)}>
          {visibility === true ?"Ocultar": "Mostrar"}
        </Button>
      <br/>
      <hr/>
    <Button variant="outlined" onClick={decrement}>-</Button>
      {quantity}
    <Button variant="outlined" onClick={decrement}>+</Button>
    </div>
  )
}
