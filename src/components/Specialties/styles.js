import styled from "styled-components";
import { Row } from "../../styles/global";

export const Group = styled(Row)`
  align-items: center;

  svg {
    margin-right: 10px;
    vertical-align: middle;
  }

  &:hover svg {
    color: #0073b1 !important;
  }
`;

export const List = styled.ul``;

export const Item = styled.li`
  background-color: #283e4a;
  border-radius: 4px;
  color: #fff;
  display: inline-block;
  margin: 5px 5px 0 0;
  padding: 5px;
`;
