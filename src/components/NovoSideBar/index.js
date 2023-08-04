import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosPerson,IoIosSearch, IoIosArrowDown,IoIosNotifications,  IoIosDocument, IoIosCalendar, IoMdStats, IoIosSettings, IoIosInformationCircle, IoIosLogOut, IoIosHome, IoIosPersonAdd, IoIosRefresh } from 'react-icons/io';
import { IconContext } from "react-icons";
import "./menuSidebarModules.css";
import LogoLIFE from './Logo_LIFE.png';

import { Context } from '../../context/UserContext';

const SidebarMenu = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);
  const [isSubMenuActive, setSubMenuActive] = useState(false);
  const { logout } = useContext(Context)

  const subMenuRef = useRef();

  function sair(){
    logout();
  }

  useEffect(() => {
    const handleMenuClick = (e) => {
      const clickedMenuItem = e.currentTarget;
      const siblingMenuItems = clickedMenuItem.parentNode.children;

      for (let item of siblingMenuItems) {
        if (item !== clickedMenuItem) {
          item.classList.remove("active");
          const subMenu = item.querySelector("ul.sub-menu");
          if (subMenu) {
            subMenu.style.display = "none";
          }
        }
      }

      clickedMenuItem.classList.toggle("active");
      const subMenu = clickedMenuItem.querySelector("ul.sub-menu");
      if (subMenu) {
        subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
        setSubMenuActive(!isSubMenuActive);
      }
    };

    document.querySelectorAll(".menu > ul > li").forEach(item => {
      item.addEventListener("click", handleMenuClick);
    });

    return () => {
      document.querySelectorAll(".menu > ul > li").forEach(item => {
        item.removeEventListener("click", handleMenuClick);
      });
    };
  }, [isSubMenuActive]);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      const targetElement = e.target;
      const subMenuElement = subMenuRef.current;

      if (subMenuElement && !subMenuElement.contains(targetElement)) {
        const subMenuItems = subMenuElement.querySelectorAll(".sub-menu li");

        for (let item of subMenuItems) {
          item.classList.remove("active");
          const subSubMenu = item.querySelector("ul.sub-menu");
          if (subSubMenu) {
            subSubMenu.style.display = "none";
          }
        }

        setSubMenuActive(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleCloseMenu = () => {
    setSidebarActive(false);
  };

  const handleMenuBtnClick = () => {
    setSidebarActive(!isSidebarActive);
  };

  // CODIGO PARA FAZER O MENU FECHAR QUANDO CHEGAR EM 900PX
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setSidebarActive(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return ( 
    <IconContext.Provider value={{ className: "icon" }}>
      <div className={`containerMenu ${isSidebarActive ? "active" : ""}`}>
        <div className={`sidebar ${isSidebarActive ? "active" : ""}`}>
          <div className="sidebar-wrapper">
            {/* Mantendo o ícone original no menu-btn */}
            <div className="menu-btn" onClick={handleMenuBtnClick}>
              <IoIosArrowBack />
            </div>
            <div class="header-logo">
              {/* Adicionando a imagem da logo */}
              <img
                className="logo-img"
                src={LogoLIFE}
                alt="Logo"
              />
            </div>

            <div ref={subMenuRef} className="nav">
              
              {/* Aqui ficará a parte do código referente aos menus e sub-menus */}
              <div className="menu">
                <p className="title">Menu</p>
                <ul>
                  {/* <li>
                    <div class="search-container">
                      <IoIosSearch className="search-icon" />
                      <input type="text" placeholder="Buscar.." className="search-input" />
                    </div>
                  </li> */}
                  <li>
                    <Link to="/"> 
                      <IoIosHome />
                      <span className="text">Dashboard</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/"> 
                      <IoIosNotifications />
                      <span className="text">Notificações</span>
                    </Link>
                  </li> */}
                  {/* aqui é onde pode ser menu dropdown */}
                  {/* <li>
                    <Link to="/">
                      <IoIosInformationCircle/>
                      <span className="text">Nome do menu</span>
                      <IoIosArrowDown />
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link>
                        <span className="text">Opçoes</span>
                        </Link>
                      </li>
                      <li>
                        <Link>
                        <span className="text">Opçoes</span>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Link to="/cadastrar">
                      <IoIosPersonAdd />
                      <span className="text">Cadastrar</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/edit">
                      <IoIosRefresh />
                      <span className="text">Editar Cadastro</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/agendar">
                    <IoIosCalendar />
                      <span className="text">Agendar</span>
                    </Link>
                  </li> */}
                  {/* outro menu dropdown */}
                  {/* <li>
                    <Link>
                      <IoMdStats />
                      <span className="text">Income</span>
                      <IoIosArrowDown />
                    </Link>
                      
                    <ul className="sub-menu">
                      <li>
                        <Link>
                        <span className="text">Earn</span>
                        </Link>
                      </li>
                      <li>
                        <Link>
                        <span className="text">Earn</span>
                        </Link>
                      </li>
                      <li>
                        <Link>
                        <span className="text">Earn</span>
                        </Link>
                      </li>
                      <li>
                        <Link>
                        <span className="text">Earn</span>
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
              {/* <div className="menu">
                <p className="title">Config</p>
                <ul>
                  <li>
                    <Link to="/">
                    <IoIosSettings />
                      <span className="text">Settings</span>
                    </Link>                  
                  </li>
                </ul>
              </div> */}
              <div className="menu">
                <p className="title">Account</p>
                <ul>
                  {/* <li>
                    <Link to="/">
                      <IoIosInformationCircle />
                      <span className="text">Help</span>
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/login">
                    <IoIosLogOut />
                      <span className="text" onClick={sair}>Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default SidebarMenu;
