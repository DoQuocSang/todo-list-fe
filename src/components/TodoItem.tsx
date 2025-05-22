import type { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onCompleteChange: (id: number, completed:boolean) => void;
}

export default function TodoItem({todo, onCompleteChange}: TodoItemProps) {
    return (
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
            <label className="flex items-center">
                <input 
                    type="checkbox" 
                    className="mr-2" 
                    checked={todo.completed} 
                    onChange={(e) => onCompleteChange(todo.id, e.target.checked)}
                />
                <span className={"text-gray-800 " + (todo.completed ? "line-through text-gray-500" : "")}>
                    {todo.title}
                </span>
            </label>
            <button className="text-red-500 hover:text-red-700">Delete</button>
        </div>
    );
}