import {Link} from "react-router-dom";

export default function Login() {
  return (



      <div className=" mt-5 container mb-3">
          <form>
              <label for="exampleInputEmail1" className="form-label">Login</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

              <label for="exampleInputPassword1" class="form-label">Senha</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>

              <Link to="/recuperar-senha">Esqueceu a senha?</Link><br/>
              <Link to="/cadastro">Ainda não tenho conta</Link>


              <div class="mt-5 text-center">
                <button type="submit" class="btn btn-primary">Entrar</button>
              </div>
          </form>
      </div>







  )
}
