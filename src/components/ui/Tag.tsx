export function Tag({ children }: { children: string }) {
  return (
    <span className="px-3 py-1 rounded-full text-sm border border-border text-text-secondary">
      {children}
    </span>
  );
}
