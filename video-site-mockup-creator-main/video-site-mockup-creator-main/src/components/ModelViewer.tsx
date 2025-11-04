"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { RotateCw, ZoomIn, ZoomOut, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ModelViewerProps {
  className?: string
}

export function ModelViewer({ className }: ModelViewerProps) {
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)

  return (
    <div className={cn("relative rounded-lg overflow-hidden bg-card border border-border", className)}>
      {/* Viewer Area */}
      <div className="relative aspect-video bg-gradient-to-br from-background via-muted/20 to-background cyber-grid">
        {/* Placeholder 3D Model */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="relative transition-transform duration-300"
            style={{ 
              transform: `rotate(${rotation}deg) scale(${zoom})`,
            }}
          >
            {/* Wireframe representation */}
            <div className="relative w-40 h-40">
              {/* Body */}
              <div className="absolute inset-0 border-2 border-primary/50 rounded-lg" />
              
              {/* Joints/Nodes */}
              {[
                { x: "20%", y: "20%", size: "w-3 h-3" },
                { x: "80%", y: "20%", size: "w-3 h-3" },
                { x: "50%", y: "40%", size: "w-4 h-4" },
                { x: "20%", y: "60%", size: "w-3 h-3" },
                { x: "80%", y: "60%", size: "w-3 h-3" },
                { x: "50%", y: "80%", size: "w-3 h-3" },
              ].map((point, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute rounded-full bg-primary animate-pulse-glow",
                    point.size
                  )}
                  style={{ left: point.x, top: point.y }}
                />
              ))}
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                <line x1="20%" y1="20%" x2="50%" y2="40%" className="stroke-secondary stroke-2" />
                <line x1="80%" y1="20%" x2="50%" y2="40%" className="stroke-secondary stroke-2" />
                <line x1="50%" y1="40%" x2="20%" y2="60%" className="stroke-secondary stroke-2" />
                <line x1="50%" y1="40%" x2="80%" y2="60%" className="stroke-secondary stroke-2" />
                <line x1="50%" y1="40%" x2="50%" y2="80%" className="stroke-secondary stroke-2" />
              </svg>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/10 blur-2xl" />
          </div>
        </div>

        {/* Info overlay */}
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-md border border-border/50">
          <p className="text-xs font-mono text-muted-foreground">3D Model Preview</p>
          <p className="text-xs font-mono text-primary">Rotation: {rotation}° | Zoom: {(zoom * 100).toFixed(0)}%</p>
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-20 animate-scan-line" />
        </div>
      </div>

      {/* Controls */}
      <div className="p-4 bg-card/50 backdrop-blur-sm border-t border-border/50 flex items-center justify-center gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setRotation(r => r - 45)}
          className="gap-2"
        >
          <RotateCw className="w-4 h-4 rotate-180" />
          Rotate Left
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => setRotation(r => r + 45)}
          className="gap-2"
        >
          Rotate Right
          <RotateCw className="w-4 h-4" />
        </Button>
        
        <div className="h-6 w-px bg-border mx-2" />
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => setZoom(z => Math.max(0.5, z - 0.25))}
          disabled={zoom <= 0.5}
        >
          <ZoomOut className="w-4 h-4" />
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => setZoom(z => Math.min(2, z + 0.25))}
          disabled={zoom >= 2}
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
        
        <div className="h-6 w-px bg-border mx-2" />
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setRotation(0)
            setZoom(1)
          }}
        >
          <Maximize2 className="w-4 h-4" />
          Reset
        </Button>
      </div>
    </div>
  )
}