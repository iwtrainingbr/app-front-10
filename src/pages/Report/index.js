import {useState, useEffect} from "react";
import {
  Card,
  CardContent,
} from "@mui/material";


export default function Report() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/movements')
      .then(response => response.json())
      .then(response => setData(response));
  }, []);

  const ReportItem = (props) => {
    return (
      <tr>
          <td>{props.data.description}</td>
          <td>{props.data.date}</td>
          <td>R${props.data.price}</td>
        </tr>
    )
  }


  return (
      <div>
      <Card>
        <CardContent>
         <table width="100%"  class="table table-striped table-hover">
           <thead class="table-dark">
             <tr>
               <th class="text-center "colspan="5">Extrato</th>
             </tr>
             <tr>
               <th>Item</th>
               <th>Data</th>
               <th>Preço</th>
            </tr>
           </thead>
            {data.map((movementData) => (<ReportItem data={movementData} />))}
         </table>
         </CardContent>
       </Card>
    </div>
  )
}
