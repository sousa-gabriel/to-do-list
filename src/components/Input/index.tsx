import { Container } from "./styles";

export function Input({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <Container type="text" placeholder="Adicione uma nova tarefa" {...rest} />
  );
}
