import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Fab, Typography} from "@mui/material";
import {Add} from "@mui/icons-material";
import {
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function ListMovements () {
    const navigate = useNavigate();
    const [data, setData] = useState([1, 2, 3, 4, 5, 7, 8, 9]);

    const actionButtonStyle = {
      position: 'absolute',
      right: 16,
      bottom: 16
    };

    const MovementItem = () => {
      return (
        <ListItem  secondaryAction = {<Typography color="error">-10</Typography>}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          <Divider/>
        </ListItem>
      );
    };


    return (
      <div>
          <h2 align="center"> - Movimentações - </h2>

          <Divider/>

          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {data.map(() => (<MovementItem/>))}
          </List>


          <Fab onClick={() => navigate('/movimentacoes/add')} sx={actionButtonStyle} color="primary">
            <Add/>
          </Fab>
      </div>
  )
}
