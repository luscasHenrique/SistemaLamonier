import './Login.css';

import Inputs from "../../components/Inputs"
import { useState, useContext } from 'react';
import LogoLamonier from './LogoLamonier.jpg';

// Context
import { Context } from '../../context/UserContext';

function Login(){
  const [user, setUser] = useState({});
  const { login } = useContext(Context)

  function handleChange(e) {
    setUser({...user, [e.target.name]: e.target.value}); 
    
  };
  function handleSubmit(e){
    e.preventDefault()
    login(user)
  }

  return (
    <div className="container-login">
      <div className="card-login">
      <form onSubmit={handleSubmit}>
        <div className="logo-login">
       
          <img
              className="logo-img"
              src={LogoLamonier}
              alt="Logo"
          />

        </div>
        <div className="input-user-email">
          <Inputs
              label="Email:"
              type="email"
              name="email"
              placeholder="Digite aqui seu email.."
              handleOnChange={handleChange}
          />
        </div>
        <div className="input-user-password">
          <Inputs
              label="Senha:"
              type="password"
              name='password'
              placeholder="Digite aqui sua senha.."
              handleOnChange={handleChange}
          />
        </div>
        <div className="button-login">
        <Inputs type="submit" value="Logar" className="custom-button"/> 
        </div>
        </form>
      </div>

    </div>
  )
}

export default Login;