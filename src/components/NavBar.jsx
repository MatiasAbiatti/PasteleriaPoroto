import React from 'react';
import '../scss/components/navBar.scss';
// import logo from '../img/logo.png';


class NavBar extends React.Component {
    render() {
      return <>
        <div className="navBar">
            <div className="navBar_logo">
              {/* <img src={logo} alt="Logo"/> */}
              <div className="navBar_logo_txt">
                <h1 className="navBar_logo_txt_title">POROTO Panaderia</h1>
                <h2 className="navBar_logo_txt_subTitle"></h2>
              </div>
            </div>
            <nav className="navBar_menu">
                <ul className="navBar_menu_ul">
                    <li className="navBar_menu_items">
                        <a href="/">Facturas</a>
                    </li>
                    <li className="navBar_menu_items">
                        <a href="/">Pan</a>
                    </li>
                    <li className="navBar_menu_items">
                        <a href="/">Tortas</a>
                    </li>
                    <li className="navBar_menu_items">
                        <a href="/">Congelados</a>
                    </li>
                    <li className="navBar_menu_items">
                        <a href="/">Pedidos</a>
                    </li>
                </ul>
            </nav>
            <div className="navBar_button_login">
                <button className="navBar_button login">INICIAR SESIÓN</button>
                
            </div>
        </div>
      </>
    }
  }

export default NavBar