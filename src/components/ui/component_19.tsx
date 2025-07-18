import * as React from "react"
import { cn } from "@/lib/utils"

export interface Component19Props extends React.HTMLAttributes<HTMLDivElement> {}

const Component19 = React.forwardRef<HTMLDivElement, Component19Props>(
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
Component19.displayName = "Component19"

export { Component19 }