import { ContainerUnChecked, ContainerChecked } from "./styles";
import checked from "../../assets/ok.svg";

interface CheckboxProps {
  isChecked: boolean;
  onClick: () => void;
}

export function Checkbox({ isChecked, onClick }: CheckboxProps) {
  if (isChecked) {
    return (
      <ContainerChecked onClick={onClick}>
        <img src={checked} alt="ok" />
      </ContainerChecked>
    );
  }
  return <ContainerUnChecked onClick={onClick} />;
}
