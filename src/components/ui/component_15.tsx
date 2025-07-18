import * as React from "react"
import { cn } from "@/lib/utils"

export interface Component15Props extends React.HTMLAttributes<HTMLDivElement> {}

const Component15 = React.forwardRef<HTMLDivElement, Component15Props>(
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
Component15.displayName = "Component15"

export { Component15 }