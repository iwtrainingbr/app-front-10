import {Link} from "react-router-dom";
export default function RecoverPassword() {
  return (
    <div>

        <div class="container">
          <h1>Recuperar Senha</h1>
          <hr/>

          <input class="form-control" type="email" name="email" placeholder="Digite seu e-mail"/>

          <div class="volta login">

          </div>
          <div class="Ainda não tenho conta">
            <button class="btn btn-primary mt-3 mb-4">Recuperar senha</button> <br/>
            <Link to="/">Voltar pro Login</Link> <br/>

            <Link to="/">Ainda não tenho conta</Link> <br/>
          </div>
        </div>
     </div>
  )
}
