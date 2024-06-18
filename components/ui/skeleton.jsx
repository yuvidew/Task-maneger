import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md dark:bg-stone-700 bg-stone-300", className)} {...props} />);
}

export { Skeleton }
