import * as React from "react"
import { cn } from "@/lib/utils"

export interface Component14Props extends React.HTMLAttributes<HTMLDivElement> {}

const Component14 = React.forwardRef<HTMLDivElement, Component14Props>(
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
Component14.displayName = "Component14"

export { Component14 }