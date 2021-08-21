import React, { useState } from "react";
import { FaMapMarkerAlt, FaBirthdayCake, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { OpenMenu, CloseMenu, Brand, HeaderWrapper, AsideWrapper, Article, List, Item, Image, Nav } from "./styles";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <HeaderWrapper id="about">
                <OpenMenu open={openMenu} onClick={() => setOpenMenu(!openMenu)} size={20} color="#FFF" />
                <Brand open={openMenu}>
                    <Image />
                    <h1>Wellington Leite</h1>
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
                </Brand>
                <h1>Desenvolvedor Full Stack</h1>
                <p><FaBirthdayCake size={15} color="#000000a7" /> 24 anos</p>
                <address>
                    <FaMapMarkerAlt size={15} color="#000000a7" /> Ribeirão Preto - SP, Brasil
                </address>
                <Article>
                    Apaixonado pela minha profissão e uma sede insaciável por conhecimento,
                    buscando sempre aprender algo novo todos os dias, e nem sempre sobre
                    minha área de atuação, sempre tentando desenvolver não só o lado
                    profissional, mas também o lado pessoal.
                </Article>
            </HeaderWrapper>
            <AsideWrapper open={openMenu}>
                <CloseMenu onClick={() => setOpenMenu(!openMenu)} size={20} color="#FFF" />
                <header>
                    <Image />
                    <h1>Wellington Leite</h1>
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
                </header>
                <Nav>
                    <ul>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#speciliaties">Habilidades</a></li>
                        <li><a href="#experience">Experiência</a></li>
                        <li><a href="#certifications">Certificados</a></li>
                    </ul>
                </Nav>
            </AsideWrapper>
        </>
    );
}