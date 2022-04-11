import styled from "styled-components";

export const TestimonialsContainer =  styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  color: var(--gray-background-color);
  /* align-items: center; */
  font-family: var(--font-family-subtitle);

`;

export const TextWrapper = styled.div`
  padding-top: 1.5rem;

  p {
    font-weight: 300;
  }


  .container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;

    .testimonial {
      min-width: 280px;
      max-width: 500px;
      padding: 1em;
      text-align: left;
      transition: 0.2s ease-in-out;

    
      blockquote {
        margin: 0;
    
        cite {
          display: inline;
          text-align: left;
          font-size: 13px;
          font-style: normal;
    
          > span {
            font-weight: 400;
          }
    
          > span::before{
            content: '-';
            display: inline-flex;
            margin: 0 0.2rem;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    .container {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 300px) {
    .container {

      .testimonial {
        min-width: unset;
      }
    }
  }
`;

export const HeadlineWrapper = styled.div`
   h2 {
      text-align: left;
      padding: 0 1rem 0 1rem;
    }

    @media (max-width: 480px) {
      h2 {
        padding-top: 2.8rem
      }
    }
`;
