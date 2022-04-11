import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

interface SidebarProps {
  readonly isOpen: boolean;
}

export const SideBarContainer = styled.aside<SidebarProps>`
  position: fixed;
  font-family: var(--font-family-subtitle);
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--main-background-color);
  color: #414a82;
  background: linear-gradient(336deg, rgba(0,0,0,1),rgba(54,64,130, 1) 71%);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #ffffff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #ffffff;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  /* grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px); */
  text-align: center;
  gap: 1.5rem;
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  justify-content: center;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: var(--secondary-background-color);
  cursor: pointer;

  &:hover {
    color: var(--secondary-font-color);
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;

`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: var(--secondary-font-color);
  white-space: nowrap;
  padding: 16px 64px;
  color: var(--gray-background-color);
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: var(--gray-background-color);
  }
`;