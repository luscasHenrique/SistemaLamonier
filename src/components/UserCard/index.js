import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './usercardModule.css';
import { BsFillPersonFill, BsPencilSquare, BsEnvelopeFill, BsGearFill, BsQuestionCircleFill, BsBoxArrowRight } from 'react-icons/bs';
import api from '../../utils/api';

Context
import { Context } from '../../context/UserContext';
import { useContext } from 'react';

function UserCard() {
  const [user, setUser] = useState({});
  const [token] = useState(localStorage.getItem('token') || '');
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { authenticated, logout } = useContext(Context);
  const menuRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleProfileClick = (event) => {
    event.stopPropagation();
    toggleMenu();
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  useEffect(() => {
    api.get('users/checkuser', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="action">
      <div onClick={handleProfileClick}>
        <h3>Olá, {user.name}</h3>
      </div>
      <div ref={menuRef} className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <h3>{user.name}<br /><span>Administrador</span></h3>
        <ul>
          {/* <li>
            <BsFillPersonFill className="icon" />
            <Link to="/user-profile" onClick={handleLinkClick}>Meu Perfil</Link>
          </li> */}
          <li>
            <BsPencilSquare className="icon" />
            <Link to="/edit" onClick={handleLinkClick}>Editar Perfil</Link>
          </li>
          {/* <li>
            <BsEnvelopeFill className="icon" />
            <Link to="/" onClick={handleLinkClick}>Mensagens</Link>
          </li>
          <li>
            <BsGearFill className="icon" />
            <Link to="/" onClick={handleLinkClick}>Configurações</Link>
          </li>
          <li>
            <BsQuestionCircleFill className="icon" />
            <Link to="/" onClick={handleLinkClick}>Help</Link>
          </li> */}
          <li>
            <BsBoxArrowRight className="icon" />
            <Link onClick={() => { closeMenu(); logout(); }}>Sair</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
