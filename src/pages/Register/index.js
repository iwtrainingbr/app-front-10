import {Link} from "react-router-dom";
export default function Register (){
  return (
    <div className="container">
     <h1>Cadastrar novo usuário</h1>
    <hr/>

     <form>
       <div class="form-group mt-3">
          <label>Nome</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu nome.."/>
       </div>
       <div class="form-group mt-3">
          <label>Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nome@exemplo.com"/>
       </div>
       <div class="form-group mt-3">
          <label for="exampleInputEmail1">Telefone</label>
          <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex: (85) 999530380"/>
        <div class="col-sm-10 mt-3">
          <label for="exampleInputEmail1">Senha</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Senha"/>
         </div>
       </div>
     </form>
    <div>
      <Link to="/"><button className="btn btn-primary mt-3 mb-2">Enviar</button></Link>
    </div>
    <div>
      <Link to="/login">Já tenho cadastro</Link>
    </div>
    
    </div>
  )
}
