import {useState} from "react";

const ReportItem= () => {
  return (
    <tr>
        <td>Pão</td>
        <td>29/1/2022</td>
        <td>5.000</td>
      </tr>
  )
}

export default function Report() {
  const [data, setData] = useState([1, 2, 3]);
  return (
      <div>
      <div class="col-md-10 offset-1">
        <section class="row mt-5">

           <div class="col-md-10 offset-1" >


         <table width="100%"  class="table table-striped table-hover">
           <thead class="table-dark">
             <tr>
               <th class="text-center "colspan="5">Extrato</th>
             </tr>
             <tr>
               <th>Item</th>
               <th>Data</th>
               <th>Preço</th>
               <th></th>
               <th></th>
              </tr>
           </thead>
            {data.map(() => (<ReportItem/>))}
         </table>
       </div>
      </section>
    </div>
    </div>
  )
}
