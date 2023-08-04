import { Link } from 'react-router-dom';
import AbaDadosAdicionais from '../AbaDadosAdicionais';

import { IoIosMail, IoIosPhonePortrait,IoMdPaperPlane } from 'react-icons/io';
import './perfilModules.css';
import RoundedImage from '../../components/RoundedImage';
import api from '../../utils/api';
import { useState, useEffect } from 'react';

function Perfil() {
  const [activeTabPage, setActiveTabPage] = useState(0);

  const handleTabPageChange = (tabId) => {
    setActiveTabPage(tabId);
  };
  const [user, setUser] = useState({});
  const [token] = useState(localStorage.getItem('token') || '');
  // const [mostrarAbaUsuario, setMostrarAbaUsuario] = useState(true);
  // const [activeTab, setActiveTab] = useState('dados'); // Estado para controlar a aba ativa

  useEffect(() => {
    api.get('users/checkuser', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  const userData = {
    name: user.name,
    email: user.email,
    cpf: user.cpf,
    rg: user.rg,
    cnpj: user.cnpj,
    fone: user.fone,
    contatoemergencia: user.contatoemergencia,
    nivel: user.nivel,
    numeroRegistroProfissional: user.certificado,
    numeroCarteiraVacinação: user.cartaovacina,
    imagemPerfil: user.imageName,
  };


  return (
    <div className="container-profile">
      <div className="profile-header">
        <div className="profile-img">
        <RoundedImage
          src={`${process.env.REACT_APP_API}/images/users/${userData.imagemPerfil}`}
          alt={user.imageName}
        />
        </div>
        <div className="profile-nav-info">
          <h3 className="user-name">{userData.name}</h3>
          <div className="cargo">
            <p>
              {userData.nivel}
            </p>
          </div>
        </div>
      </div>

      <div className="main-bd">
        <div className="left-side">
          <div className="profile-side">
            <div className="conteudo-side">
              <p className="mobile-no">
                <IoIosPhonePortrait className=""/> {userData.fone}
              </p>

              <p className="user-mail">
                <IoIosMail className=""/> {userData.email}
              </p>

              <div className="user-bio">
                <h3>Bio</h3>
                <p className="bio">
                  Lorem ipsum dolor sit amet, hello how consectetur adipisicing
                  elit. Sint consectetur provident magni yohoho consequuntur,
                  voluptatibus ghdfff exercitationem at quis similique. Optio,
                  amet!
                </p>
              </div>
              <div className="profile-btn">
                <Link to='/edituser'>
                  <button className='edit-btn'>Editar Perfil</button>
                </Link>
              </div>
            </div>
            
            
          </div>
        </div>
        <div className="right-side">
          <div className="nav-profile">
            <ul>
              <li
                onClick={() => handleTabPageChange(0)}
                className={`user-dados ${activeTabPage === 0 ? 'active' : ''}`}
              >
                Dados Usuario
              </li>
              <li
                onClick={() => handleTabPageChange(1)}
                className={`user-docs ${activeTabPage === 1 ? 'active' : ''}`}
              >
                Documentos
              </li>
              {/* <li
                onClick={() => handleTabPageChange(2)}
                className={`user-setting ${activeTabPage === 2 ? 'active' : ''}`}
              >
                Settings
              </li> */}
            </ul>
          </div>
          <div className="profile-body">
            <div
              className="profile-dados tab-page"
              style={{ display: activeTabPage === 0 ? 'block' : 'none' }}
            >
              <h1>Meus Dados</h1>
              
              <div className='row'>
                <div className='col-12'>
                  <p>
                    <strong className='LabelName'>{userData.name}</strong>
                    <br></br>
                    <strong className='LabelNivel'>{userData.nivel}</strong>
                  </p>
                  <hr />
                </div>
                <div className='col-12'>
                  <p>
                    <strong className='colorLabel'>Email:</strong> {userData.email}
                  </p>
                </div>
                <div className='col-4'>
                  <p>
                    <strong className='colorLabel'>CPF:</strong> {userData.cpf}
                  </p>
                </div>
                <div className='col-4'>
                  <p>
                    <strong className='colorLabel'>RG:</strong> {userData.rg}
                  </p>
                </div>
                <div className='col-4'>
                  <p>
                    <strong className='colorLabel'>CNPJ:</strong> {userData.cnpj}
                  </p>
                </div>
                <div className='col-12'>
                  <hr />
                </div>
                <div className='col-6'>
                  <p>
                    <strong className='colorLabel'>Telefone Pessoal:</strong> {userData.fone}
                  </p>
                </div>
                <div className='col-6'>
                  <p>
                    <strong className='colorLabel'>Telefone Emergência:</strong>{' '}
                    {userData.contatoemergencia}
                  </p>
                </div>
                <div className='col-12'>
                  <hr />
                </div>
                <div className='col-6'>
                  <p>
                    <strong className='colorLabel'>Número Registro Profissional:</strong>{' '}
                    {userData.numeroRegistroProfissional}
                  </p>
                </div>
                <div className='col-6'>
                  <p>
                    <strong className='colorLabel'>Número da Carteira de Vacinação:</strong>{' '}
                    {userData.numeroCarteiraVacinação}
                  </p>
                </div>
                <div className='col-12'></div>
              </div>

            </div>


            <div
              className="profile-docs tab-page"
              style={{ display: activeTabPage === 1 ? 'block' : 'none' }}
            >
              <h1>Meus Documentos</h1>
              
                  <AbaDadosAdicionais />

            </div>
            {/* <div
              className="profile-settings tab-page"
              style={{ display: activeTabPage === 2 ? 'block' : 'none' }}
            >
              <div className="account-setting">
                <h1>Account Setting</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit omnis eaque, expedita nostrum, facere libero
                  provident laudantium. Quis, hic doloribus! Laboriosam nemo
                  tempora praesentium. Culpa quo velit omnis, debitis maxime,
                  sequi animi dolores commodi odio placeat, magnam, cupiditate
                  facilis impedit veniam? Soluta aliquam excepturi illum natus
                  adipisci ipsum quo, voluptatem, nemo, commodi, molestiae
                  doloribus magni et. Cum, saepe enim quam voluptatum vel
                  debitis nihil, recusandae, omnis officiis tenetur, ullam
                  rerum.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
