import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
`;
export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px 20px 20px 290px;

  @media screen and (max-width: 767px) {  
    padding: 20px;
  }
`;

export const SideNavBar = styled.aside``;
