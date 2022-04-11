import React, { useEffect, useState } from 'react';
import { NavContainer, MobileIcon, NavMenu } from './styles';
import { Link, useLocation } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import {FaUserCircle, FaBars} from 'react-icons/fa';
import logo from '../../assets/logo/AntonioPereira-01.png';

type Props = {
  toggle: () => void;
}

const Navbar = (props: Props) => {
  const { toggle } = props;

  const location = useLocation();
  // console.log('location pathname: ', location.pathname);

  return (
    <NavContainer>
      <Link to="/">
        <div className='logo-container'>
          <img src={logo} alt="Logo do site AHP Silva"/>
        </div>
      </Link>
      <NavMenu>
        {/* <NavItem>

        </NavItem> */}
      </NavMenu>
      <div className='space' />
      <ul>
        {/* <li>
          Artigos
        </li> */}
        {location.pathname === '/' &&
          <>
            <li>
              <LinkScroll to="nossa-historia" smooth={true} duration={4000} spy={true} >
                Nossa História
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="atuacao" smooth={true} duration={4000} spy={true} offset={-50}>
                Atuação
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="depoimentos" smooth={true} duration={4000} spy={true} offset={-80}>
                Depoimentos
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="contato" smooth={true} duration={4000} spy={true} offset={-50}>
                Contato
              </LinkScroll>
            </li>
          </>

        }
        {
          location.pathname !== '/' && (
            <>
              <li>
                <Link to="/nossa-historia">
                  Nossa história
                </Link>
              </li>
              <li>
                <Link to="/atuacao">
                  Atuação
                </Link>
              </li>
              <li>
                <Link to="/contato">
                  Contato
                </Link>
              </li>
              {/* <li>
                <Link to="/nossa-historia">
                  Nossa história
                </Link>
              </li> */}
            </>
          )
        }
      </ul>
      <div className='user-logo'>
        {location.pathname !== '/login' && (
          <Link to="/login">
            <FaUserCircle color="#f4f4f4" size={25} />
          </Link>
        )
        }
      </div>
      <MobileIcon onClick={toggle}>
        <FaBars size={25}/>
      </MobileIcon>
    </NavContainer>
  );
}

export default Navbar;