import styled from "styled-components";

interface ContentProps {
  animate: string;
}

interface ContainerProps {
  scrollNav: string;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  width: 100vw;
  /* background: linear-gradient(45deg, black, transparent); */
  /* linear-gradient(336deg, rgba(0,0,0,1),rgba(54,64,130, 1) 71%) */
  /* linear-gradient(180deg, #364082 10%, #414a82 90%) */
  /* linear-gradient(180deg, #364082 10%, #414a82 90%) */
  /* 
  linear-gradient(7deg,rgba(0,0,0,.2),rgba(0,0,0,.4) 70.71%), linear-gradient(127deg,rgba(54,64,130,1),rgba(54,64,130,1) 94.71%), linear-gradient(336deg,rgba(54,64,130,1),rgba(54,64,130,0.9) 96.71%);
  */
  /* 
  linear-gradient(19deg,rgba(0,0,0,.2), #31375c 70.71%), linear-gradient(17deg,rgba(54,64,130,1),rgba(54,64,130,1) 94.71%), linear-gradient(336deg,rgba(54,64,130,1),rgba(54,64,130,0.9) 96.71%);
  */
  background: ${({scrollNav}) => (scrollNav === 'gray' ? '#2B2929' : scrollNav === 'blue' ? `linear-gradient(19deg,rgba(0,0,0,.2), #31375c 70.71%), linear-gradient(17deg,rgba(54,64,130,1),rgba(54,64,130,1) 94.71%), linear-gradient(336deg,rgba(54,64,130,1),rgba(54,64,130,0.9) 96.71%);` : `transparent` )};
  height: 80px;
  margin-top: -80px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  font-family: var(--font-family-subtitle);
  z-index: 10;
  box-shadow: var(--custom-box-shadow);
`;

export const ContentContainer = styled.div`
  .main-content {
    width: 100vw;
    height: 100vh;
  }

  .follow-up-container {
    width: 100vw;
    padding: 0 0 2rem 0;
    background-color: var(--secondary-background-color);
    /* height: 100vh; */
  }

  /* background-color: var(--font-color); */
  .rodape {
    position: static;
    bottom: 0;
    width: 100vw;
    height: auto;
    text-align: left;
    font-size: 0.75rem;
    /* padding: 0 1rem 1rem 0; */
    font-weight: 300;
    
    > p {
      font-family: var(--font-family-subtitle); 
      color: var(--gray-background-color);
      max-width: 1280px;
      padding: 0 2rem;
    }
  }

  .summary-container {
    width: 100vw;
    height: 100vh;
    /* padding: 2rem 0; */
    background-color: var(--gray-background-color);
    display: flex;
    align-items: center;
  }

  .title_underline {

  }

  .fields-of-work {
    width: 100vw;
    height: 100vh;
    /* padding: 0 1rem 2rem 0; */
    /* display: flex;
    align-items: center;
    justify-content: center; */
    padding-bottom: 2rem 0;
    background-color: var(--main-background-color);
  }

  .title_underline:after {

  }
  .contact-info {
    width: 100vw;
    /* padding: 0 1rem 2rem 0; */
    height: 100vh;
    padding: 0 0 2rem 0;
    background-color: var(--main-background-color);
  }

  .testimonials-container {

  }

  @media (max-width: 980px) {
    /* height: auto; */

    .testimonials-container,
    .summary-container,
    .fields-of-work, 
    .contact-info {
      height: auto;
    }
  }

  @media (max-width: 420px) {
    .summary-container {
      height: 100vh;
      /* font-size: 3vw; */
    }

    .contact-info {
      display: flex;
      height: 100vh;
      align-items: center;
    }
  }

  /* @media (max-width: 1200px) {
    .summary-container {
      flex-wrap: wrap;
      flex-direction: column;
    }
  } */
`;

export const TestimonialsContainer = styled.div<ContentProps>`
    height: 100vh;
    width: 100vw;
    transform: translateX(${({ animate }) => (animate === "true" ? '0' : '-50vw')});transition: transform 1s;

  @media (max-width: 980px) {
    height: auto;
  }
`;