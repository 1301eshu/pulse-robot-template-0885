import * as React from "react"
import { cn } from "@/lib/utils"

export interface Component20Props extends React.HTMLAttributes<HTMLDivElement> {}

const Component20 = React.forwardRef<HTMLDivElement, Component20Props>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("", className)}
        {...props}
      />
    )
  }
)
Component20.displayName = "Component20"

export { Component20 }