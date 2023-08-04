import React, { useContext, useState, useEffect } from 'react';
import './atualizarUsuarioModules.css';
import Inputs from '../../components/Inputs';
import Sidebar from '../../components/NovoSideBar';
import UserCard from '../../components/UserCard';
import StatusButton from '../../components/BotaoStatus';
import api from '../../utils/api'

import { Context } from '../../context/UserContext';

import useFlashMessage from '../../hooks/useFlashMessage';
import RoundedImage from '../../components/RoundedImage';


function AtualizarUsuario() {
  const [user, setUser] = useState({})
  const [preview, setPreview] = useState()
  const [token] = useState(localStorage.getItem('token') || '')
  const { setFlashMessage } = useFlashMessage()
  
  useEffect(() => {
    api.get('/users/checkuser',{
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`
    }
  })
  .then((response) => {
    setUser(response.data)
  }).catch((error) => {
    console.log(error)
  })}, [token])

  function handleOnChange(e){
    setUser({...user, [e.target.name]: e.target.value});
  }
  
  async function handleSubmit(e){
    e.preventDefault()

    let msgType = 'success'
    const formData = new FormData()

    await Object.keys(user).forEach((key) =>
      formData.append(key, user[key]) 
    )

    const data = await api.patch(`users/edit/${user.id}`, formData, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        'Content-Type': 'multpart/form-data'
      }
    })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      msgType = 'error'
      return err.response.data
    })

    setFlashMessage(data.message, msgType)
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

        <div className="layout-atualiar-usuario">
          <h3 className="titulo-form">Editar Usuario</h3>
          <h5 className="subtitulo-form">Atualize as informações abaixo:</h5>
          <form className="container-form" onSubmit={handleSubmit}>

            <div className='container-inputs'>
                            <div className="">
                <Inputs
                  type="text"
                  label="Nome do Cliente"
                  name="name"
                  value={user.name}
                  handleOnChange={handleOnChange}
                  placeholder="Digite o nome.."
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="number"
                  label="CPF"
                  name="cpf"
                  value={user.cpf}
                   handleOnChange={handleOnChange}
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="number"
                  label="RG"
                  name="rg"
                  value={user.rg}
                   handleOnChange={handleOnChange}
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="number"
                  label="Telefone"
                  name="fone"
                  value={user.fone}
                  handleOnChange={handleOnChange}
                  required
                />
              </div>
              <div className="">
                <Inputs
                  type="email"
                  label="E-mail"
                  name="email"
                  value={user.email}
                  handleOnChange={handleOnChange}
                  required
                />
              </div>
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

export default AtualizarUsuario;
