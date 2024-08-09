import { Container, TasksCompleted, TasksCreated } from "./styles";

interface IHeaderTasksProps {
  tasksCreated: number;
  tasksCompleted: number;
}

export function HeaderTasks({
  tasksCreated,
  tasksCompleted,
}: IHeaderTasksProps) {
  return (
    <Container>
      <TasksCreated>
        <strong>Tarefas criadas</strong>
        <p>{tasksCreated}</p>
      </TasksCreated>
      <TasksCompleted>
        <strong>Concluídas</strong>
        <p>{`${tasksCompleted} de ${tasksCreated}`}</p>
      </TasksCompleted>
    </Container>
  );
}
