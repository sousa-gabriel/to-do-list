import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Task, ITask } from "../../components/Task";
import {
  Container,
  Content,
  ContentDefault,
  ContentInput,
  ContentList,
} from "./styles";
import defaultIcon from "../../assets/default.svg";
import { HeaderTasks } from "../../components/HeaderTasks";

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([] as ITask[]);
  const [newTask, setNewTask] = useState("");
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [tasksCreated, setTasksCreated] = useState(0);

  function handleCreateTask() {
    if (newTask === "") {
      return;
    }

    const newTaskItem: ITask = {
      id: String(new Date().getTime()),
      label: newTask,
      isChecked: false,
    };

    setTasks([...tasks, newTaskItem]);
    setNewTask("");

    localStorage.setItem("@tasks", JSON.stringify([...tasks, newTaskItem]));
  }

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
    localStorage.setItem("@tasks", JSON.stringify(newTasks));
  }

  function handleCheckTask(id: string) {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      }
      return item;
    });
    setTasks(newTasks);
    localStorage.setItem("@tasks", JSON.stringify(newTasks));
  }

  useEffect(() => {
    const tasksStorage = localStorage.getItem("@tasks");
    if (tasksStorage) {
      setTasks(JSON.parse(tasksStorage));
    }

    const tasksCompleted = tasks.filter((item) => item.isChecked).length;
    const tasksCreated = tasks.length;

    setTasksCompleted(tasksCompleted);
    setTasksCreated(tasksCreated);
  }, [tasksCompleted, tasksCreated, tasks]);

  return (
    <Container>
      <Header />
      <Content>
        <ContentInput>
          <Input
            onChange={(event) => setNewTask(event.target.value)}
            value={newTask}
          />
          <Button onClick={handleCreateTask} title="Criar" />
        </ContentInput>
        <HeaderTasks
          tasksCompleted={tasksCompleted}
          tasksCreated={tasksCreated}
        />
        {tasks.length === 0 ? (
          <ContentDefault>
            <img src={defaultIcon} alt="No have Data" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </ContentDefault>
        ) : (
          <ContentList>
            {tasks.map((item) => (
              <Task
                key={item.id}
                item={item}
                onDelete={() => handleDeleteTask(item.id)}
                onCheck={() => handleCheckTask(item.id)}
              />
            ))}
          </ContentList>
        )}
      </Content>
    </Container>
  );
}
