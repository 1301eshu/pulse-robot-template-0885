import * as React from "react"
import { cn } from "@/lib/utils"

export interface Component16Props extends React.HTMLAttributes<HTMLDivElement> {}

const Component16 = React.forwardRef<HTMLDivElement, Component16Props>(
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
Component16.displayName = "Component16"

export { Component16 }