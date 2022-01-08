import {useNavigate} from "react-router-dom";

import {Fab, Typography} from "@mui/material";
import {Add} from "@mui/icons-material";

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

  const actionButtonStyle = {
    position: 'absolute',
    right: 16,
    bottom: 16
  };

  return (
      <div>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem secondaryAction = {<Typography color="error">-10</Typography>}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem secondaryAction = {<Typography color="error">-10</Typography>}>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem secondaryAction = {<Typography color="blue">10</Typography>}>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>

          <Fab onClick={() => navigate('/movimentacoes/add')} sx={actionButtonStyle} color="primary">
            <Add/>
          </Fab>
    </div>
  )

}
