"use client"

import { useCallback, useState } from "react"
import { Upload, Video, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileUploadZoneProps {
  onFileSelect?: (file: File) => void
  className?: string
  maxSize?: number // in MB
}

export function FileUploadZone({ 
  onFileSelect, 
  className,
  maxSize = 500 
}: FileUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [error, setError] = useState<string>("")

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true)
    } else if (e.type === "dragleave") {
      setIsDragging(false)
    }
  }, [])

  const validateFile = (file: File) => {
    const validTypes = ["video/mp4", "video/quicktime", "video/x-msvideo", "video/webm"]
    if (!validTypes.includes(file.type)) {
      setError("Please upload a valid video file (MP4, MOV, AVI, WEBM)")
      return false
    }
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size must be less than ${maxSize}MB`)
      return false
    }
    setError("")
    return true
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      if (validateFile(files[0])) {
        setSelectedFile(files[0])
        onFileSelect?.(files[0])
      }
    }
  }, [onFileSelect, maxSize])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files[0]) {
      if (validateFile(files[0])) {
        setSelectedFile(files[0])
        onFileSelect?.(files[0])
      }
    }
  }

  const clearFile = () => {
    setSelectedFile(null)
    setError("")
  }

  return (
    <div className={cn("relative", className)}>
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={cn(
          "relative border-2 border-dashed rounded-lg p-12 transition-all duration-300",
          "flex flex-col items-center justify-center gap-4 min-h-[300px]",
          "bg-card/50 backdrop-blur-sm",
          isDragging
            ? "border-primary bg-primary/10 scale-[1.02]"
            : "border-border hover:border-primary/50",
          selectedFile && "border-solid border-primary"
        )}
      >
        <input
          type="file"
          id="file-upload"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleChange}
          accept="video/*"
        />
        
        {selectedFile ? (
          <div className="flex flex-col items-center gap-4 relative z-10">
            <div className="relative">
              <Video className="w-16 h-16 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-foreground">{selectedFile.name}</p>
              <p className="text-sm text-muted-foreground">
                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                clearFile()
              }}
              className="absolute top-0 right-0 p-2 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90 transition-colors z-20"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="relative">
              <Upload className={cn(
                "w-16 h-16 transition-colors",
                isDragging ? "text-primary scale-110" : "text-muted-foreground"
              )} />
              {isDragging && (
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
              )}
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground mb-2">
                {isDragging ? "Drop your video here" : "Upload Video for Motion Capture"}
              </p>
              <p className="text-sm text-muted-foreground">
                Drag and drop or click to browse
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Supports MP4, MOV, AVI, WEBM (Max {maxSize}MB)
              </p>
            </div>
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-destructive mt-2 text-center">{error}</p>
      )}
    </div>
  )
}