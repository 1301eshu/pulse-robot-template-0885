import * as React from "react"
import { cn } from "@/lib/utils"

export interface Component18Props extends React.HTMLAttributes<HTMLDivElement> {}

const Component18 = React.forwardRef<HTMLDivElement, Component18Props>(
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
Component18.displayName = "Component18"

export { Component18 }