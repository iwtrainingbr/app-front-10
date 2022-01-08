import * as React from 'react';

import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Divider,
  Select,
  TextField,
} from '@mui/material';




export default function AddMovement() {
  const [categ, setCateg] = React.useState('');

  const handleChange = (event) => {
    setCateg(event.target.value);
  };

  return (
    <div>
      <h2>Nova Movimentação</h2>
      <Divider/>
      <br/>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categ}
            label="Categoria"
            onChange={handleChange}
          >
            <MenuItem value={10}>Mercado</MenuItem>
            <MenuItem value={20}>Serviços</MenuItem>
            <MenuItem value={30}>Veículos</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { marginTop: 2, marginBottom: 2},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField fullWidth id="outlined-basic" label="Valor (R$)" variant="outlined" />
      </Box>

      <FormControl component="fieldset">
        <FormLabel component="legend">Tipo de Movimentação</FormLabel>
        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
          <FormControlLabel value="in" control={<Radio />} label="Entrada" />
          <FormControlLabel value="out" control={<Radio />} label="Saída" />
        </RadioGroup>
      </FormControl>
      <br/>
      <Divider/>
      <br/>

      <Button fullWidth variant="contained">
        Adicionar
      </Button>
    </div>
  );
}
