import { Todo } from "../type/todos";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length} / {todos.length} Completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className="text-red-500 hover: underline text-sm font-medium"
        >
          Delete All Completed
        </button>
      )}
    </div>
  );
}

{
  /* <button onClick={deleteAllCompleted} className="text-red-500">Delete All Completed</button> */
}
