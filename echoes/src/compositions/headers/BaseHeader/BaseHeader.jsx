import { GContainer, GText, GIcon } from 'GComponents';
import { images } from 'GAssets';
import { Link, NavLink } from 'react-router-dom';
import './BaseHeader.css';
import { useState } from 'react';

const BaseHeader = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <GContainer
      as="header"
      padding="s"
      style={{
        borderBottom: '2px solid var(--secondary)',
      }}
    >
      <GContainer
        as="nav"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <GContainer>
          <img width="50px" src={images.echoesLogoShort} />
        </GContainer>

        <ul className="g-header-list">
          <li>
            <NavLink to="/" className="g-header-item">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="g-header-item">
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="g-header-item">
              Acerca de mi
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="g-header-item">
              Contacto
            </NavLink>
          </li>
        </ul>

        {/* Burger Menu Button */}
        <button
          className="burger-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <GText as="span" color="var(--primary)">
            ☰
          </GText>
        </button>

        {menuOpen && (
          <div className="fullscreen-menu">
            {/* <button
              className="close-menu-button"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              ✕
            </button> */}
            <ul
              style={{
                width: '100%',
              }}
            >
              <li>
                <NavLink to="/" onClick={toggleMenu}>
                  <GContainer display="flex" justifyContent="space-between">
                    <GText>Inicio</GText>
                    <GIcon icon="chevron_right" />
                  </GContainer>
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" onClick={toggleMenu}>
                  Productos
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={toggleMenu}>
                  Acerca de mí
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={toggleMenu}>
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </GContainer>
    </GContainer>
  );
};

export default BaseHeader;
