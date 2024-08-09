import styled from "styled-components";

export const Container = styled.input`
  background: ${(props) => props.theme["gray500"]};
  display: flex;
  flex: 1;
  padding: 1rem;
  border: 0px;
  height: 100%;
  border-radius: 8px;

  color: ${(props) => props.theme["gray100"]};
  flex: 1;
  font-size: 1rem;
  ::placeholder {
    color: ${(props) => props.theme["gray300"]};
  }

  font-size: ${(props) => props.theme.font.size.medium}px;
`;
