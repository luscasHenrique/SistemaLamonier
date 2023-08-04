import React, { useContext, useState } from 'react';
import './CadastrarUsuario.css';
import Inputs from '../../components/Inputs';
import Select from '../../components/Select'
import Sidebar from '../../components/NovoSideBar';
import UserCard from '../../components/UserCard';
import StatusButton from '../../components/BotaoStatus';

import { Context } from '../../context/UserContext';

function CadastroUsuario() {

  const [user, setUser] = useState({})
  const { register } = useContext(Context)
  // Creation of the Registration Object
  function handleOnChange(e){
      setUser({...user, [e.target.name]: e.target.value});
  };
  // Function to submit the registration
  function handleSubmit(e){
      e.preventDefault()
      // enviar o usuario para o banco de dados
      // enviar o usuario para o banco de dados
    register(user).then(response => {
      console.log('Resposta do servidor após o registro:', response);
    });
  }

  return (
    <div className="container-layout">

      <div className="container-left">
        <Sidebar />
      </div>

      <div className="container-right">
        <div className="header">
          <div className='sessao-button'>
              <StatusButton/> 
          </div>
          
          <div className="user-profile">
              <UserCard />
          </div>

        </div>

        <div className="layout-cadastrar-usuario">
          <h3 className="titulo-form">Cadastro Usuario</h3>
          <h5 className="subtitulo-form">Preencha as informações abaixo:</h5>
          <form className="container-form" onSubmit={handleSubmit}>
              <div className="">
                <Inputs
                  type="text"
                  label="Nome do Cliente"
                  name="name"
                  handleOnChange={handleOnChange}
                  placeholder="Digite o nome.."
                  required
                />
              </div>
            <div className='container-inputs'>
              
              <div className="">
                <Inputs
                  type="number"
                  label="CPF"
                  name="cpf"
                  handleOnChange={handleOnChange}
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="number"
                  label="RG"
                  name="rg"
                  handleOnChange={handleOnChange}
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="number"
                  label="Telefone"
                  name="fone"
                  handleOnChange={handleOnChange}
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="email"
                  label="E-mail"
                  name="email"
                  handleOnChange={handleOnChange}
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="password"
                  label="Senha"
                  name="password"
                  handleOnChange={handleOnChange}
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="password"
                  label="Confirmar Senha"
                  name="confirmpassword"
                  handleOnChange={handleOnChange}
                  required
                />
              </div>
            </div>
              <div className="form-check-input">
              <Select
                label="Nível de acesso:"
                name="nivel"
                options={[
                    { value: "adm", label: "Administrador" },
                    { value: "vendedor", label: "Vendedor" },
                ]}
                onChange={handleOnChange}
                value={user.nivel}
              />
              </div>
            {/* Adicione mais campos Inputs conforme necessário */}
            <div className="container-botao-atualizar" >
              <Inputs type="submit" value="atualizar"/>
            </div>
            
          </form>
        </div>

      <div className='footer'>

      </div>
    </div>
  </div>
  );
}

export default CadastroUsuario;
