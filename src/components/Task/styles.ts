import styled from "styled-components";

interface LabelProps {
  checked: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme["gray500"]};
  border: 1px solid ${(props) => props.theme["gray400"]};
  width: 100%;
`;

export const Label = styled.p<LabelProps>`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => props.theme["gray100"]};
  font-size: ${(props) => props.theme.font.size.medium}px;
  font-weight: regular;
  display: flex;
  flex: 1;
`;
