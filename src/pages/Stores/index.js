import {useState} from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Divider,
} from "@mui/material";
import "./styles.css";

export default function Stores() {
  const [data, setData] = useState([1, 2, 3, 4]);

  const StoreItem = () => {
    return (
      <Card style={{marginTop: 15}}>
        <CardActionArea onClick={() => alert('oi')}>
          <CardMedia component="img" image="https://media-cdn.tripadvisor.com/media/photo-s/18/10/54/cd/cantinho-do-frango-desde.jpg"/>
          <CardContent>
            <Typography color="primary" variant="h5">
              Cantinho do Frango
            </Typography>
            <Divider/>
            <Typography color="gray">
              Rua Carolino de Aquino, 445 - Fatima
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    )
  }

  return (
    <div>
      <h2 align="center"> - Estabelecimentos - </h2>

      <Divider/>

      {data.map(() => (<StoreItem/>))}
    </div>
  )
}
