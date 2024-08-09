import { Container } from "./styles";
import trash from "../../assets/trash.svg";

interface ButtonIconProps {
  onClick: () => void;
}

export function ButtonIcon({ onClick }: ButtonIconProps) {
  return (
    <Container onClick={onClick}>
      <img src={trash} alt="Exclude item" />
    </Container>
  );
}
