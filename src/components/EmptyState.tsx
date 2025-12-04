import { Sparkles } from "lucide-react";

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
        <Sparkles className="w-10 h-10 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">All clear!</h3>
      <p className="text-muted-foreground">Add a task to get started</p>
    </div>
  );
};
