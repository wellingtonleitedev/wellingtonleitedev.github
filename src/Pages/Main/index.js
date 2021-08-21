import React from "react";
import { Container, Content } from "./styles";
import Specialties from "../../components/Specialties";
import Experience from "../../components/Experience";
import Certifications from "../../components/Certifications";
import Header from "../../components/Header";

export default function Main() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Experience />
          <Specialties />
          <Certifications />
        </Content>
      </Container>
    </>
  );
}
