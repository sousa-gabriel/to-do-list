import logo from "../../assets/Logo.svg";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={logo} alt="Logotipo do Ignite" />
    </Container>
  );
}
