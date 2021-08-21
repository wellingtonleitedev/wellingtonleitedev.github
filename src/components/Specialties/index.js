import React from "react";
import { Wrapper, Row, Col } from "../../styles/global";
import { List, Item, Group } from "./styles";
import { FaCogs, FaPencilRuler, FaMobileAlt, FaDatabase } from "react-icons/fa";

export default function Specialties() {
  return (
    <Wrapper id="speciliaties">
      <h2>Competências</h2>
      <Row>
        <Col>
          <Group>
            <FaCogs size={40} color="#000000a1" />
            <div>
              <h3>Desenvolvimento Back-end</h3>
              <List>
                <Item>Node.js</Item>
                <Item>.NET</Item>
              </List>
            </div>
          </Group>
        </Col>
        <Col>
          <Group>
            <FaPencilRuler size={40} color="#000000a1" />
            <div>
              <h3>Desenvolvimento Front-end</h3>
              <List>
                <Item>ReactJS</Item>
                <Item>Javascript</Item>
                <Item>Jquery</Item>
              </List>
            </div>
          </Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Group>
            <FaMobileAlt size={40} color="#000000a1" />
            <div>
              <h3>Desenvolvimento Mobile</h3>
              <List>
                <Item>React Native</Item>
              </List>
            </div>
          </Group>
        </Col>
        <Col>
          <Group>
            <FaDatabase size={40} color="#000000a1" />
            <div>
              <h3>Banco de Dados</h3>
              <List>
                <Item>SQL Server</Item>
                <Item>MySQL</Item>
                <Item>MongoDB</Item>
              </List>
            </div>
          </Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Outros</h3>
          <List>
            <Item>Git e Github</Item>
            <Item>Docker</Item>
          </List>
        </Col>
      </Row>
    </Wrapper>
  );
}
