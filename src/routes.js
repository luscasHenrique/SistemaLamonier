import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// import pages
import Dashboard from './pages/Dashboarda';
import Login from './pages/LoginPage';
import AtualizarUsuario from './pages/AtualizarUsuario';
import CadastroUsuario from './pages/CadastrarUsuario';

// import components
import Message from './components/Message';
import { UserProvider } from './context/UserContext';

function CheckAuth({ children }) {
  const isAuthenticated = localStorage.getItem('token');
  const navigate = useNavigate();

  // Verifica a autenticação do usuário
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Renderiza o conteúdo protegido se o usuário estiver autenticado
  return isAuthenticated ? children : null;
}

function RoutesApp() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Message />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<CheckAuth><Dashboard /></CheckAuth>} />
          <Route path='/edit' element={<CheckAuth><AtualizarUsuario /></CheckAuth>} />
          <Route path='/cadastrar' element={<CheckAuth><CadastroUsuario /></CheckAuth>} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
