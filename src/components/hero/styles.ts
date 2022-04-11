import styled from "styled-components";
import { Link } from "react-scroll";
import { IoMdArrowForward } from "react-icons/io";
import { MdKeyboardArrowRight} from 'react-icons/md';

interface BtnProps {
  primary: boolean | string;
  big: boolean | string;
  dark: boolean | string;
  fontSize: boolean | string;
}

export const HeroContainer = styled.div`
  font-family: var(--font-family-subtitle);
  /* background: #0c0c0c; */
  background:  var( --gray-background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-image: linear-gradient(180deg, rgba(0,0,0,.2), rgba(0,0,0,0,.6)); */
                /* linear-gradient(0deg, rgba(0,0,0,.2), transparent);  */
    /* background: transparent; */
    /* opacity: 0.8; */
    background: linear-gradient(217deg, rgba(0,0,0,.2), rgba(0,0,0,.6) 70.71%),
            linear-gradient(127deg, rgba(0,0,0,.2), rgba(0,0,0,0) 70.71%),
            linear-gradient(336deg, rgba(54,64,130,.8), rgba(54,64,130,0.2) 70.71%);
    z-index: 2;
  }

`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  opacity: 0.8;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
color: #fff;
font-size: 48px;
max-width: 590px;
text-align: center;

  > span {
    /* color: var(--secondary-font-color); */
    text-decoration: underline;
    text-decoration-thickness: 3.5px;
    text-decoration-color: var(--secondary-font-color);
  }

  @media (max-width: 980px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: 600px;

  @media (max-width: 980px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }

`;

export const Button = styled(Link)<BtnProps>`
  border-radius: 50px;
  background: ${({ primary}) => (primary ? '#D08D57' : '#f4f4f4')};
  white-space: nowrap;
  padding: ${({big}) => (big === "true" ? '14px 48px' : '12px 30px')};
  color: ${({ dark}) => (dark === "true" ? '#010606' : '#f4f4f4')};
  font-size: ${({ fontSize }) => (fontSize === "true" ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary}) => (primary === "true" ? '#f4f4f4' : '#01bf71')};
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(IoMdArrowForward)`
  margin-left: 8px;
  font-size: 20px;

`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;