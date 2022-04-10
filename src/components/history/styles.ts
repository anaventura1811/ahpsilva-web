import styled from "styled-components";
import { Link } from "react-router-dom";

interface BtnProps {
  primary: boolean | string;
  big: boolean | string;
  dark: boolean | string;
  fontSize: boolean | string;
}


export const SummaryContainer = styled.div`
  background-color: var(--gray-background-color);
  height: auto;
  min-height: 35vw;
  color: var(--secondary-background-color);
  position: relative;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  flex-direction: row-reverse;
  /* gap: 2rem; */
  padding: 0;


  .image-container {
    position: relative;
    padding-right: 2rem;
    /* padding: 1rem; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-container > img {
    position: relative;
    /* width: auto; */
    border-radius: 100%;
    /* width: 100%; */
    height: 35vw;
    /* height: 95%; */
  }

  .history-text {
    display: flex;
    flex-direction: column;
    max-width: 50%;
    font-family: var(--font-family-subtitle);
    font-weight: 300;

    > h2 {
      font-weight: 700;
      font-size: 48px;
    }

    > p > span {
      font-weight: 700;
    }

    .btn-container {
      display: flex;
      justify-content: flex-start;
    }

    .summary-btn {
      display: flex;
      justify-content: flex-end;
      padding: 16px;
      font-family: var(--font-family-subtitle);
      font-weight: 700;
      text-transform: uppercase;
      border: none;
      color: var(--secondary-background-color);
      cursor: pointer;
      text-decoration: none;
      border-radius: 25px;
      width: auto;
    }

    .summary-btn:hover {
      filter: brightness(0.9);
      text-decoration: underline;
      background-color: var(--secondary-font-color);
      text-decoration-color: var(--secondary-font-color);
    }
  }

  @media (max-width: 980px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    .history-text {
      max-width: 100%;
      margin: 0.8rem;

      > p {
        padding: 0;
      }
    }

    .image-container > img {
      height: 45vw;
    }
  }

  @media (max-width: 480px) {
  
    .history-text > h2 {
      font-size: 32px;

    }
  }

  @media (max-width: 400px) {
    .image-container {
      display: none;
    }
  }
 
`;

export const Button = styled(Link)<BtnProps>`
  border-radius: 50px;
  background: ${({ primary}) => (primary ? '#D08D57' : '#f4f4f4')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark}) => (dark ? '#373434' : '#f4f4f4')};
  font-size: ${({fontSize}) => (fontSize ? '20px' : '16px')};
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary}) => (primary ? '#fff' : '#01bf71')};
  }
`;