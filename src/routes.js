import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// import pages
import Dashboard from './pages/Dashboarda';
import Login from './pages/LoginPage';
import AtualizarUsuario from './pages/AtualizarUsuario';
import CadastroUsuario from './pages/CadastrarUsuario';

// import components
// import Message from './components/Message';
// import { UserProvider } from './context/UserContext';

// function CheckAuth() {
//   const isAuthenticated = localStorage.getItem('token');
//   const navigate = useNavigate();

//   // Verifica a autenticação do usuário
//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login');
//     }
//   }, [isAuthenticated, navigate]);
// }

function RoutesApp() {
  const routes = (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path='/edit' element={<AtualizarUsuario/>} />
      <Route path='/cadastrar' element={<CadastroUsuario/>} />
    </Routes>
  );

  return (
    <BrowserRouter>
      {/* <UserProvider> */}
        {/* <Message /> */}
        {/* <CheckAuth /> Verifica a autenticação antes de renderizar as rotas */}
        {routes}
      {/* </UserProvider> */}
    </BrowserRouter>
  );
}

export default RoutesApp;
