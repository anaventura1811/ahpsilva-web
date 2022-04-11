import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 692px;
  font-family: var(--font-family-subtitle);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(108deg, var(--main-background-color) 0%, rgba(54,64,130,0.9) 100%);
  padding-bottom: 32px;
/* linear-gradient(19deg,rgba(0,0,0,.2), #31375c 70.71%), linear-gradient(17deg,rgba(54,64,130,1),rgba(54,64,130,1) 94.71%), linear-gradient(336deg,rgba(54,64,130,1),rgba(54,64,130,0.9) 96.71%);*/
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media  (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  /* margin-top: 32px; */
  text-decoration: none;
  color: var(--secondary-background-color);
  font-weight: 700;
  font-size: 32px;

  > img {
    max-height: 6.5rem;
  }

  @media (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #2B2929;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  transition: 0.2s ease-in-out height;

  @media (max-width: 480px) {
    width: 80vw;
    padding: 32px;
  }

  @media (max-width: 400px) {
   padding: 20px;
  }


`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: var(--secondary-background-color);
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--secondary-background-color);
`;

export const FormInput = styled.input`
  padding: 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: var(--main-background-color);
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  color: var(--secondary-background-color);
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: var(--secondary-font-color);
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
  color: var(--secondary-background-color);
`;