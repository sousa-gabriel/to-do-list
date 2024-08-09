import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  height: 24px;
  width: 24px;
  border: 0px;
  border-radius: 4px;

  &:hover {
    background: ${(props) => props.theme["gray400"]};
    img {
      color: red;
    }
  }
`;
