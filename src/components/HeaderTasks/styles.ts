import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
`;

export const TasksCreated = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  strong {
    color: ${(props) => props.theme["blue"]};
    font-size: ${(props) => props.theme.font.size.medium}px;
    font-weight: bold;
  }

  p {
    color: ${(props) => props.theme["gray100"]};
    font-size: ${(props) => props.theme.font.size.small}px;
    font-weight: bold;
    background-color: ${(props) => props.theme["gray400"]};
    padding: 2px 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TasksCompleted = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;

  strong {
    color: ${(props) => props.theme["purple"]};
    font-size: ${(props) => props.theme.font.size.medium}px;
    font-weight: bold;
  }

  p {
    color: ${(props) => props.theme["gray100"]};
    font-size: ${(props) => props.theme.font.size.small}px;
    font-weight: bold;
    background-color: ${(props) => props.theme["gray400"]};
    padding: 2px 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
