import styled from "styled-components";

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-family: var(--font-family-subtitle); 
  font-weight: 300;
  color: var(--font-color);
  position: relative;
  width: 100vw;
    /* padding: 0 1rem 2rem 0; */
  height: 100vh;
  padding: 0 0 2rem 0;
  background-color: var(--main-background-color);

  .container {
    display: flex;
    /* margin: 0 auto; */
    flex-direction: column;
    max-width: 1280px !important;
    padding: 2rem;
    /* align-items: center; */

    > h2 {
      /* font-weight: 700;
      margin: 0 auto; */
      align-self: flex-start;
      padding: 2rem;
    }

    .text-info {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;

      .media-info {
        justify-content: space-around;
        align-items: space-between;
        display: flex;
        flex-direction: column;
      }

      .subcontainer {
  
        .social-media > h3 {
          text-transform: uppercase;
          text-align: left;
        }

        .social-media > div {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .info {
          display: flex;
          flex-direction: column;
          /* align-items: left; */
  
          > a {
          text-decoration: none;
          color: inherit;
          display: flex;
          gap: 0.5rem;
          text-align: left;
          align-items: center;
        }
        }

        .iframe {
          border: none;
          /* width: 100%;
          height: auto; */

        }
  
        #contact-email {
          /* padding: 0 2rem; */
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    @media (max-width: 980px) {

      .container {

        .text-info {
  
          .subcontainer {
  
            .iframe {
              margin: 1rem;
              width: 100%;
              height: auto;
              /* width: 600px !important;
              height: 450px !important; */
            }
          }
  
        }
      }

      .rodape > p {
        font-size: 0.75rem;
      }
    }
  }
`;