import styled from "styled-components";

export const Container = styled.button`
  gap: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme["blueDark"]};
  border-radius: 8px;
  cursor: pointer;
  color: ${(props) => props.theme["gray100"]};
  border: 0px;
  padding: 1rem;
  height: 100%;

  font-size: ${(props) => props.theme.font.size.medium}px;
  font-weight: bold;

  &:hover {
    background: ${(props) => props.theme["blue"]};
  }
`;
