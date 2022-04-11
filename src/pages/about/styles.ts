import { Link } from "react-router-dom";
import styled from "styled-components";

export const AboutContainer = styled.div`
  background: var(--main-background-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

`;

export const Logo = styled(Link)`
  padding-top: 18px;
  padding-left: 32px;

  > img {
    max-height: 6.5rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  padding-top: 32px;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
`;

export const Topline = styled.h1`
  font-family: var(--font-family-subtitle);
  color: #ffffff;
`;

export const ImageContainer = styled.div`
  position: relative;
  /* top: 0;
  right: 0;
  left: 0;
  bottom: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;

  > img {
    max-height: 400px;
  }
  /* max-height: 500px; */
`;