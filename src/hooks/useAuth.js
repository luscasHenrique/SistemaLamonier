//  api 
import api from '../utils/api'

import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import useFlashMessage from './useFlashMessage'

export default function useAuth(){
  // Auteticação começa zerada
  const [authenticated, setauthenticated] = useState(false)
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate()

  // Adiconar o Token automaticamente na API
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setauthenticated(true)
    }
  }, [])

  async function register(user){

    let msgText = 'Cadastro Realizado com sucesso'
    let msgType = 'success'

    try{
      await api.post('users/register', user).then((response) => {
      return response.data
      })
    }catch(error){
      // tratar o erro
      msgText = error.response.data.message
      msgType = 'error' 
    }
    setFlashMessage(msgText, msgType)
  }
  // Função para salvar o Token
  async function authUser(data){
    setauthenticated(true)
    localStorage.setItem('token', JSON.stringify(data.token))
    navigate('/')
  }

  async function login(user) {
    let msgText = 'Login realizado com sucesso';
    let msgType = 'success';
  
    try {
      const response = await api.post('/users/login', user);
      console.log(response.data); // Verifique o conteúdo da resposta da API
      const data = response.data;
      await authUser(data);
    } catch (error) {
      console.error('Erro durante o login:', error);
      msgText = error?.response?.data?.message || 'Erro desconhecido';
      msgType = 'error';
    }
    setFlashMessage(msgText, msgType);
  }

  // Function Logout
  function logout(){
    const msgText = 'Logout realizado com sucesso'
    const msgType = 'success'
    setauthenticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = undefined
    navigate("/login")
    setFlashMessage(msgText, msgType)
  }
  return { authenticated, register, logout, login }
}