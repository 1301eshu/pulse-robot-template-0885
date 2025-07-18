import * as React from "react"
import { cn } from "@/lib/utils"

export interface Component17Props extends React.HTMLAttributes<HTMLDivElement> {}

const Component17 = React.forwardRef<HTMLDivElement, Component17Props>(
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
Component17.displayName = "Component17"

export { Component17 }