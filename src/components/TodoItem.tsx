import { useState } from "react";
import { Check, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ id, text, completed, onToggle, onDelete }: TodoItemProps) => {
  const [isChecking, setIsChecking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleToggle = () => {
    setIsChecking(true);
    setTimeout(() => {
      onToggle(id);
      setIsChecking(false);
    }, 300);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(id);
    }, 300);
  };

  return (
    <div
      className={cn(
        "group glass glass-hover rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 animate-slide-in",
        isDeleting && "animate-slide-out"
      )}
    >
      <button
        onClick={handleToggle}
        className={cn(
          "w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg border-2 flex items-center justify-center transition-all duration-300 shrink-0",
          completed
            ? "bg-primary border-primary"
            : "border-muted-foreground/50 hover:border-primary/70",
          isChecking && "animate-check-bounce"
        )}
      >
        {completed && <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" strokeWidth={3} />}
      </button>

      <span
        className={cn(
          "flex-1 text-base sm:text-lg transition-all duration-300 break-words",
          completed && "line-through text-muted-foreground"
        )}
      >
        {text}
      </span>

      <button
        onClick={handleDelete}
        className="sm:opacity-0 sm:group-hover:opacity-100 p-1.5 sm:p-2 rounded-lg hover:bg-destructive/20 text-muted-foreground hover:text-destructive transition-all duration-200 shrink-0"
      >
        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};
