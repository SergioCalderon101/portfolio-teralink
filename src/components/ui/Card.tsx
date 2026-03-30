import { ReactNode } from "react";

export function Card({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`bg-surface rounded-lg border border-border ${
        hover ? "transition-colors duration-300 hover:border-border-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
