import React, { useState, useEffect } from "react";
import "antd/lib/modal/style/index.css";
import { Wrapper } from "../../styles/global";
import { List, Item, Image } from "./styles";
import { Modal } from "antd";

export default function Certifications() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSettings, setModalSettings] = useState({
    title: "",
    src: "",
    visible: false,
  });

  useEffect(() => {
    setModalVisible(modalSettings.visible);
  }, [modalSettings]);

  function openModal(title, src, visible) {
    setModalSettings({ title, src, visible });
  }

  return (
    <Wrapper id="certifications">
      <h2>Certificações</h2>
      <List>
        <Item
          onClick={() =>
            openModal(
              "Certificação GoStack",
              "./certifications/gostack.jpg",
              true
            )
          }
        >
          <h3>GoStack</h3>
          <p>Rocketseat</p>
          <small>Node.js, ReactJS e React Native</small>
        </Item>
        <Item
          onClick={() =>
            openModal(
              "Certificação de Algoritmos I",
              "./certifications/algoritmos-01.jpg",
              true
            )
          }
        >
          <h3>Algoritmos I: Selection, Insertion e Introdução a análise</h3>
          <p>Alura</p>
          <small>Java</small>
        </Item>
        <Item
          onClick={() =>
            openModal(
              "Certificação de Algoritmos II",
              "./certifications/algoritmos-02.jpg",
              true
            )
          }
        >
          <h3>
            Algoritmos II: MergeSort, QuickSort, Busca Binária e Análise de
            Algoritmo
          </h3>
          <p>Alura</p>
          <small>Java</small>
        </Item>
        <Item
          onClick={() =>
            openModal(
              "Certificação de Iniciante em Programação",
              "./certifications/iniciante.jpg",
              true
            )
          }
        >
          <h3>Iniciante em Programação</h3>
          <p>Alura</p>
          <small>HTML5 e CSS3, Javascript, Lógica de Programação</small>
        </Item>
      </List>
      <Modal
        title={modalSettings.title}
        centered
        visible={modalVisible}
        onCancel={() =>
          setModalSettings({
            visible: false,
            title: "",
            src: "",
          })
        }
        footer={[]}
      >
        <Image src={modalSettings.src} alt={modalSettings.title} />
      </Modal>
    </Wrapper>
  );
}
