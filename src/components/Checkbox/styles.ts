import styled from "styled-components";

export const ContainerChecked = styled.button`
  height: 24px;
  width: 24px;
  background: ${(props) => props.theme["purpleDark"]};
  border-radius: 12px;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${(props) => props.theme["purple"]};
  }
`;

export const ContainerUnChecked = styled.button`
  height: 24px;
  width: 24px;
  background: transparent;
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme["blue"]};

  &:hover {
    border: 1px solid ${(props) => props.theme["blueDark"]};
  }
`;
