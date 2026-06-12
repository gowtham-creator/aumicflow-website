import { cn } from "@/lib/utils";

/** The official AumicFlow wordmark (AUMIC FLOW with the orange asterisk). */
export default function Logo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/aumicflow-logo.svg"
      alt="AumicFlow"
      className={cn("h-7 w-auto select-none", className)}
      draggable={false}
    />
  );
}
