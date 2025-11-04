"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface MotionCardProps {
  title: string
  description?: string
  icon?: LucideIcon
  children?: React.ReactNode
  className?: string
  glowColor?: "cyan" | "purple" | "magenta" | "none"
  animated?: boolean
}

export function MotionCard({
  title,
  description,
  icon: Icon,
  children,
  className,
  glowColor = "none",
  animated = false
}: MotionCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 hover:scale-[1.02]",
      "bg-card/80 backdrop-blur-sm border-border/50",
      glowColor === "cyan" && "hover:border-primary hover:shadow-[0_0_20px_rgba(0,200,255,0.3)]",
      glowColor === "purple" && "hover:border-secondary hover:shadow-[0_0_20px_rgba(150,80,255,0.3)]",
      glowColor === "magenta" && "hover:border-accent hover:shadow-[0_0_20px_rgba(255,80,200,0.3)]",
      animated && "animate-float",
      className
    )}>
      {/* Scan line effect */}
      {animated && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-20 animate-scan-line" />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start gap-4">
          {Icon && (
            <div className={cn(
              "flex-shrink-0 p-3 rounded-lg",
              "bg-primary/10 text-primary",
              glowColor === "cyan" && "bg-primary/10 text-primary",
              glowColor === "purple" && "bg-secondary/10 text-secondary",
              glowColor === "magenta" && "bg-accent/10 text-accent"
            )}>
              <Icon className="w-6 h-6" />
            </div>
          )}
          <div className="flex-1">
            <CardTitle className="text-xl">{title}</CardTitle>
            {description && (
              <CardDescription className="mt-1">{description}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      
      {children && (
        <CardContent>
          {children}
        </CardContent>
      )}
    </Card>
  )
}

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  index?: number
}

export function FeatureCard({ title, description, icon: Icon, index = 0 }: FeatureCardProps) {
  const glowColors: ("cyan" | "purple" | "magenta")[] = ["cyan", "purple", "magenta"]
  const glowColor = glowColors[index % 3]
  
  return (
    <div className={cn(
      "group relative p-6 rounded-lg transition-all duration-300",
      "bg-card/50 backdrop-blur-sm border border-border/50",
      "hover:bg-card hover:border-primary/50 hover:scale-[1.05]"
    )}>
      {/* Corner accent */}
      <div className={cn(
        "absolute top-0 right-0 w-20 h-20 opacity-20 blur-2xl transition-opacity group-hover:opacity-40",
        glowColor === "cyan" && "bg-primary",
        glowColor === "purple" && "bg-secondary",
        glowColor === "magenta" && "bg-accent"
      )} />
      
      <div className="relative z-10">
        <div className={cn(
          "inline-flex p-3 rounded-lg mb-4",
          glowColor === "cyan" && "bg-primary/10 text-primary",
          glowColor === "purple" && "bg-secondary/10 text-secondary",
          glowColor === "magenta" && "bg-accent/10 text-accent"
        )}>
          <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}