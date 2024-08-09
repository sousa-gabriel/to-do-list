import styled from "styled-components";

export const Container = styled.header`
  background: ${(props) => props.theme["gray700"]};
  display: flex;
  justify-content: center;
  height: 12.5rem;
  padding: 1.25rem 0;
  align-items: center;
  width: 100%;

  img {
    height: 3rem;
  }
`;
