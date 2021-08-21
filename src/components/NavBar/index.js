import React from "react";
import { Wrapper, Title, List, Item, Header, Image, Nav } from "./styles";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function NavBar() {
  return (
    <Wrapper>
      <Header>
        <Image />
        <Title>Wellington Leite</Title>
        <List>
          <Item>
            <a href="https://www.linkedin.com/in/wellington-leite/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={15} color="#fff" />
            </a>
          </Item>
          <Item>
            <a href="https://www.instagram.com/wellington_dev/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={15} color="#fff" />
            </a>
          </Item>
          <Item>
            <a href="mailto:wellingtonleitee.s@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={15} color="#fff" />
            </a>
          </Item>
          <Item>
            <a href="http://www.github.com/wellios" target="_blank" rel="noopener noreferrer">
              <FaGithub size={15} color="#fff" />
            </a>
          </Item>
        </List>
      </Header>
      <Nav>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#speciliaties">Habilidades</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#certifications">Certificados</a></li>
        </ul>
      </Nav>
    </Wrapper>
  );
}
