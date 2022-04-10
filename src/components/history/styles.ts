import styled from "styled-components";

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
  flex-direction: row;
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
    }

    .btn-container {
      display: flex;
      justify-content: flex-end;
    }

    .summary-btn {
      display: flex;
      justify-content: flex-end;
      padding: 16px;
      font-family: var(--font-family-subtitle);
      font-weight: 700;
      text-transform: uppercase;
      border: none;
      /* background-color: var(--secondary-font-color); */
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
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .history-text {
      max-width: 100%;
      margin: 0.8rem;
    }

    .image-container > img {
      height: 45vw;
    }
  }
 
`;