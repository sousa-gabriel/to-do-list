import { ButtonIcon } from "../ButtonIcon";
import { Checkbox } from "../Checkbox";
import { Container, Label } from "./styles";

export interface ITask {
  label: string;
  id: string;
  isChecked: boolean;
}

interface TaskProps {
  item: ITask;
  onDelete: () => void;
  onCheck: () => void;
}

export function Task({ item, onCheck, onDelete }: TaskProps) {
  return (
    <Container>
      <Checkbox isChecked={item.isChecked} onClick={onCheck} />
      <Label checked={item.isChecked}>{item.label}</Label>
      <ButtonIcon onClick={onDelete} />
    </Container>
  );
}
