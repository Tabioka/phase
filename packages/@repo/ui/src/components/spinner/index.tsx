import { cn } from "@repo/utils/site"

export interface SpinnerProps extends React.ComponentPropsWithRef<"div"> {}

export function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <div className={cn("relative h-4 w-4", className)} {...props}>
      <div className="absolute inset-0 z-10 translate-x-[38%] translate-y-[46.5%]">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div
              style={{
                animationDelay: `${-1.2 + 0.1 * i}s`,
                transform: `rotate(${i === 0 ? 0.0001 : 30 * i}deg) translate(146%)`,
              }}
              className="absolute h-[8%] w-[24%] animate-[spinner-spin_1.2s_linear_infinite] rounded-md bg-neutral-500"
              key={i}
            />
          ))}
      </div>
      <style>{`
        @keyframes spinner-spin {
          0% { opacity: 1; }
          100% { opacity: 0.15; }
        }
      `}</style>
    </div>
  )
}
