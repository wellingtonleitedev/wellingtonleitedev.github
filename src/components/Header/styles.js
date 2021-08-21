import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

export const HeaderWrapper = styled.header`
  background-color: #283e4a;
  color: #fff;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 150px;
  padding: 25px 20px 25px 290px;

  h1 {
    color: #fff;
    font-size: 2em;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 767px) {  
    padding: 20px;
  }
`;

export const OpenMenu = styled(FaBars)`
  align-self: flex-end;
  display: ${props => props.open ? 'none' : 'block'};
  
  @media screen and (min-width: 768px) {  
    display: none;
  }
`

export const CloseMenu = styled(FaTimes)`
  align-self: flex-end;
  
  @media screen and (min-width: 768px) {  
    display: none;
  }
`

export const Brand = styled.div`
  align-items: center;
  align-self: center;
  border-bottom: 1px solid #000000a1;
  display: ${props => props.open ? 'none' : 'flex'};
  flex-direction: column;
  margin-bottom: 20px;
  padding-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {  
    display: none;
    padding: 20px;
  }
`

export const AsideWrapper = styled.aside`
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
  z-index: 999;
  width: 240px;

  header {
    align-items: center;
    border-bottom: 1px solid #000000a1;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }
  
  @media screen and (max-width: 767px) {  
    display: ${props => props.open ? 'flex' : 'none'};
  }
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

export const Article = styled.article`
    margin-top: 15px;
`
