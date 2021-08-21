import styled from "styled-components";

export const Wrapper = styled.section`
  bottom: 30px;
  border-radius: 4px;
  box-shadow: 7px 5px 3px 0 rgba(0, 0, 0, 0.5);
  background-color: #283e4a;
  color: #fff;
  display: flex;
  flex-direction: column;
  left: 25px;
  padding: 20px;
  position: fixed;
  top: 30px;
  width: 240px;

  @media screen and (max-width: 767px) {  
    
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Image = styled.div`
  background: url("./perfil.jpg") 50% 35%;
  background-size: cover;
  border: 2px solid #fff;
  border-radius: 50%;
  height: 200px;
  margin-bottom: 20px;
  width: 200px;
`;

export const Title = styled.h1``;

export const Subtitle = styled.h3``;

export const List = styled.ul`
  li {
    display: inline-block;
    margin-top: 5px;
  }
`;

export const Item = styled.li`
  svg {
    vertical-align: middle;
    margin-right: 5px;
  }
`;

export const Nav = styled.nav`
  li {
    font-weight: bold;
    margin: 15px 0;
  }

  svg {
    vertical-align: middle;
    margin-right: 5px;
  }
`;

export const Footer = styled.footer`
  align-self: flex-end;
  font-size: .8em;
`;


