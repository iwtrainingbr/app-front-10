import {useState, useEffect} from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import "./styles.css";

export default function Stores() {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8000/stores')
        .then(response => response.json())
        .then(response => setData(response));
  }, []);


  const StoreItem = (props) => {
    return (
      <Card style={{marginTop: 15}}>
        <CardActionArea onClick={() => alert('oi')}>
          <CardMedia style={{height: 160}} component="img" image={props.data.photo}/>
          <CardContent>
            <Typography color="primary" variant="h5">
              #{props.data.id} {props.data.name}
            </Typography>
            <Divider/>

            <Typography color="gray">
              {props.data.address}
            </Typography>

            <Chip color="primary" label={props.data.category}/>

          </CardContent>
        </CardActionArea>
      </Card>
    )
  }


  return (
    <div>
      <h2 align="center"> - Estabelecimentos - </h2>

      <Divider/>

      {data.map((storeData) =>  (<StoreItem data={storeData}/>))}
    </div>
  )
}
