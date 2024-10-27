import { Todo } from "../type/todos";
import TodoItem from "./TodoItems";

interface TodoListProps {
  todos: Todo[];
  setTodoCompleted: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({
  todos,
  setTodoCompleted,
  onDelete,
}: TodoListProps) {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <>
      <div className="space-y-2">
        {todosSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            onCompleteChange={setTodoCompleted}
            todo={todo}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 &&
      <p className="text-center text-sm text-gray-500">No todos yet. Add a new one above</p>
      }
    </>
  );
}
