import {useNavigate} from "react-router-dom";

import {Fab} from "@mui/material";
import {Add} from "@mui/icons-material";

export default function ListMovements () {
  const navigate = useNavigate();

  const actionButtonStyle = {
    position: 'absolute',
    right: 16,
    bottom: 16
  };

  return (
    <div style={{height: '100%'}}>
        <h1>Lista de Movimentos</h1>

        <div>

        </div>

        <Fab onClick={() => navigate('/movimentacoes/add')} sx={actionButtonStyle} color="primary">
          <Add/>
        </Fab>
    </div>
  )

}
