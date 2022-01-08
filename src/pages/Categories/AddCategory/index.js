import {
  Button,
  TextField,
  Divider,
} from "@mui/material";

export default function AddCategory (){
  return (
    <div>
      <div>
        <h2> Nova Categoria </h2>

        <Divider/>
        <br/>

        <TextField fullWidth label="Nome" style={{marginBottom: 15}}/>

        <Button color="primary" variant="contained" fullWidth>PRONTO</Button>
      </div>
    </div>
  )
}
