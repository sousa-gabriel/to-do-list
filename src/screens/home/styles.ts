import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 46rem;
  padding: 0 1rem;
`;

export const ContentInput = styled.div`
  display: flex;
  width: 100%;
  margin-top: -27px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 52px;
`;

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentDefault = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme["gray300"]};
    font-size: ${(props) => props.theme.font.size.medium}px;
    font-weight: regular;
  }

  strong {
    color: ${(props) => props.theme["gray300"]};
    font-size: ${(props) => props.theme.font.size.medium}px;
    font-weight: bold;
  }
`;
