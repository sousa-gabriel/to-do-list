import { Container } from "./styles";
import plus from "../../assets/plus.svg";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export function Button({ title, onClick }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      {title}
      <img src={plus} alt="Add new task" />
    </Container>
  );
}
