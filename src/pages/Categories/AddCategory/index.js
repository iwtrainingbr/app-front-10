import {useState} from "react";
import {useNavigate} from "react-router-dom";


import {
  Button,
  TextField,
  Divider,
} from "@mui/material";

export default function AddCategory (){
  const navigate = useNavigate();

  const [name, setName] = useState('');

  const handleName = (event) => {
    setName(event.target.value)
  }

  const save = () => {
    fetch('http://localhost:8000/categories', {
      method: "post",
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify ({name: name})
    })
      .then(response => response.json())
      .then(response => navigate('/categorias'));
  }


  return (
    <div>
      <div>
        <h2> Nova Categoria </h2>

        <Divider/>
        <br/>

        <TextField data-cy="input-cat-name" onChange={handleName} value={name} fullWidth label="Nome" style={{marginBottom: 15}}/>

        <Button onClick={save} color="primary" variant="contained" fullWidth>PRONTO</Button>
      </div>
    </div>
  )
}
