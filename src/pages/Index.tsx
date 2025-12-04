import { useState } from "react";
import { TodoItem } from "@/components/TodoItem";
import { AddTodo } from "@/components/AddTodo";
import { EmptyState } from "@/components/EmptyState";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { CheckCircle2 } from "lucide-react";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prev) => [
      { id: crypto.randomUUID(), text, completed: false },
      ...prev,
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen relative">
      <BackgroundOrbs />
      
      <div className="relative z-10 max-w-xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Tasks</h1>
          </div>
          {todos.length > 0 && (
            <p className="text-muted-foreground">
              {completedCount} of {todos.length} completed
            </p>
          )}
        </div>

        {/* Add Todo */}
        <div className="mb-8">
          <AddTodo onAdd={addTodo} />
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <EmptyState />
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                {...todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
