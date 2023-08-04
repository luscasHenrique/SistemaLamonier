import './Login.css';

import Inputs from "../../components/Inputs"
function Login() {
  return (
    <div className="container-login">
      <div className="card-login">
        <div className="logo-login">
          <img
              className="logo-img"
              // src={LogoConnect}
              alt="Logo"
          />

        </div>
        <div className="input-user-email">
          <Inputs
              label="Email:"
              type="email"
              name="email"
              placeholder="Digite aqui seu email.."
              // handleOnChange={handleChange}
          />
        </div>
        <div className="input-user-password">
          <Inputs
              label="Senha:"
              type="password"
              name='password'
              placeholder="Digite aqui sua senha.."
              // handleOnChange={handleChange}
          />
        </div>
        <div className="button-login">
        <Inputs type="submit" value="Logar" className="custom-button"/> 
        </div>
      </div>

    </div>
  )
}

export default Login;