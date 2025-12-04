import { useState } from "react";
import { Plus } from "lucide-react";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-xl p-1.5 sm:p-2 flex gap-1.5 sm:gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 bg-transparent px-3 sm:px-4 py-2.5 sm:py-3 text-base sm:text-lg placeholder:text-muted-foreground/50 focus:outline-none min-w-0"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="px-3 sm:px-5 py-2.5 sm:py-3 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-primary-foreground font-medium flex items-center gap-1.5 sm:gap-2 transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
      >
        <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Add</span>
      </button>
    </form>
  );
};
