import styled from 'styled-components';
import { Link} from 'react-scroll';

export const NavContainer = styled.nav`
  display: flex;
  font-family: var(--font-family-subtitle);
  font-size: 0.95rem;
  color: var(--font-color);
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  max-width: 1280px;
  position: relative;
  top: 0;
  width: 100%;
  max-height: 10rem;

  ul {
    display: flex;
    gap: 1rem;
    justify-items: flex-end;
    list-style-type: none;

    li > a {
      text-decoration: none;
      color: var(--font-color);

      &:hover, &:visited {
        text-decoration: underline;
        text-decoration-color: var(--secondary-font-color);
      }
    }
  }

  .logo-container {
    /* display: flex; */
    position: relative;
    display: flex;
    top: 0;
    max-width: 100%;

    img {
      position: relative;
      /* display: block; */
      top: 0;
      left: 0;
      /* padding: 1rem; */
      width: auto;
      height: 7rem;
    }
  }

  @media (max-width: 980px) {
    transition: 0.8s all ease;
    align-items: center;
    justify-content: space-between;
    ul {
      display: none;
    }

    .user-logo {
      display: none;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 980px) {
    display: flex;
    align-self: center;
    justify-self: center;
    position: absolute;
    top: 20px;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;

    &:hover {
      color: var(--secondary-font-color);
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  color: var(--font-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid var(--secondary-font-color);
  }
`;

