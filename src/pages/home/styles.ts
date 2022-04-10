import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    width: 100vw;
  /* background: linear-gradient(45deg, black, transparent); */
    background: linear-gradient(180deg, rgba(0,0,0,.2), rgba(0,0,0,0) 70.71%),
            linear-gradient(180deg, rgba(54,64,130,.8), rgba(54,64,130,0.2) 100%);
    height: 80px;
    margin-top: -80px;
    font-size: 1rem;
    position: sticky;
    top: 0;
    font-family: var(--font-family-subtitle);
    z-index: 10;
`;

export const ContentContainer = styled.div``;