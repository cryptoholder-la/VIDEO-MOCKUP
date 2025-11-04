"use client"

import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface MotionProgressProps {
  value: number
  label?: string
  className?: string
  showPercentage?: boolean
}

export function MotionProgress({ 
  value, 
  label, 
  className,
  showPercentage = true 
}: MotionProgressProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between text-sm">
          {label && <span className="font-medium text-foreground">{label}</span>}
          {showPercentage && (
            <span className="text-muted-foreground font-mono">{value}%</span>
          )}
        </div>
      )}
      <div className="relative">
        <Progress value={value} className="h-2 bg-muted" />
        {/* Glow effect on the progress */}
        <div 
          className="absolute top-0 left-0 h-full bg-primary/30 blur-sm transition-all duration-300 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

interface ProcessingStage {
  id: string
  label: string
  status: "pending" | "processing" | "completed" | "error"
}

interface MultiStageProgressProps {
  stages: ProcessingStage[]
  className?: string
}

export function MultiStageProgress({ stages, className }: MultiStageProgressProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {stages.map((stage, index) => (
        <div key={stage.id} className="flex items-center gap-4">
          <div className={cn(
            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
            stage.status === "completed" && "bg-primary text-primary-foreground glow-cyan",
            stage.status === "processing" && "bg-secondary text-secondary-foreground animate-pulse-glow",
            stage.status === "pending" && "bg-muted text-muted-foreground",
            stage.status === "error" && "bg-destructive text-destructive-foreground"
          )}>
            {stage.status === "completed" ? "✓" : index + 1}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className={cn(
                "text-sm font-medium",
                stage.status === "processing" && "text-primary",
                stage.status === "completed" && "text-foreground",
                stage.status === "pending" && "text-muted-foreground",
                stage.status === "error" && "text-destructive"
              )}>
                {stage.label}
              </span>
              <span className="text-xs text-muted-foreground capitalize">
                {stage.status}
              </span>
            </div>
            
            {stage.status === "processing" && (
              <div className="h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary animate-pulse w-2/3" />
              </div>
            )}
            
            {stage.status === "completed" && (
              <div className="h-1 bg-primary rounded-full" />
            )}
            
            {(stage.status === "pending" || stage.status === "error") && (
              <div className={cn(
                "h-1 rounded-full",
                stage.status === "pending" && "bg-muted",
                stage.status === "error" && "bg-destructive/30"
              )} />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}