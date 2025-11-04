"use client"

import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { FileUploadZone } from "@/components/FileUploadZone"
import { MotionCard } from "@/components/MotionCard"
import { MultiStageProgress } from "@/components/MotionProgress"
import { Button } from "@/components/ui/button"
import { 
  Upload, 
  Video, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  ArrowRight,
  PlayCircle,
  Users,
  Cloud,
  Smile,
  Grid3x3
} from "lucide-react"
import Link from "next/link"

type ProcessingState = "idle" | "uploading" | "processing" | "completed" | "error"

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [processingState, setProcessingState] = useState<ProcessingState>("idle")
  const [videoPreview, setVideoPreview] = useState<string>("")

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
    setProcessingState("idle")
    
    // Create video preview
    const url = URL.createObjectURL(file)
    setVideoPreview(url)
  }

  const startProcessing = () => {
    if (!selectedFile) return

    setProcessingState("uploading")
    
    // Simulate upload progress
    setTimeout(() => {
      setProcessingState("processing")
      
      // Simulate processing
      setTimeout(() => {
        setProcessingState("completed")
      }, 5000)
    }, 2000)
  }

  const processingStages = [
    {
      id: "upload",
      label: "Uploading Video",
      status: processingState === "uploading" ? "processing" : 
              processingState === "processing" || processingState === "completed" ? "completed" : "pending"
    },
    {
      id: "analyze",
      label: "Analyzing Motion",
      status: processingState === "processing" ? "processing" : 
              processingState === "completed" ? "completed" : "pending"
    },
    {
      id: "extract",
      label: "Extracting Keyframes",
      status: processingState === "completed" ? "completed" : "pending"
    },
    {
      id: "rig",
      label: "Rigging 3D Model",
      status: processingState === "completed" ? "completed" : "pending"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Upload Your Video
          </h1>
          <p className="text-lg text-muted-foreground">
            Select a video file to begin motion capture extraction
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <MotionCard
              title="Video Upload"
              description="Drag and drop or click to select a video file"
              icon={Upload}
              glowColor="cyan"
            >
              <FileUploadZone
                onFileSelect={handleFileSelect}
                maxSize={500}
              />
              
              {selectedFile && processingState === "idle" && (
                <div className="mt-4">
                  <Button 
                    onClick={startProcessing} 
                    className="w-full gap-2"
                    size="lg"
                  >
                    <Video className="w-5 h-5" />
                    Start Processing
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              )}
            </MotionCard>

            {/* Video Preview */}
            {videoPreview && (
              <MotionCard
                title="Video Preview"
                description="Preview of your uploaded video"
                icon={Video}
                glowColor="purple"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                  <video
                    src={videoPreview}
                    controls
                    className="w-full h-full"
                  />
                </div>
              </MotionCard>
            )}
          </div>

          {/* Processing Status Section */}
          <div className="space-y-6">
            {processingState !== "idle" && (
              <>
                <MotionCard
                  title="Processing Status"
                  description="Track the progress of your motion capture"
                  icon={processingState === "completed" ? CheckCircle2 : Loader2}
                  glowColor="magenta"
                  animated={processingState === "processing" || processingState === "uploading"}
                >
                  <MultiStageProgress stages={processingStages} />
                  
                  {processingState === "completed" && (
                    <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-primary">Processing Complete!</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Your motion capture data is ready. View the results to see your 3D model and motion data.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {processingState === "error" && (
                    <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-destructive">Processing Error</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Something went wrong during processing. Please try again.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </MotionCard>

                {processingState === "completed" && (
                  <Link href="/results">
                    <Button className="w-full gap-2" size="lg">
                      View Results
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                )}
              </>
            )}

            {processingState === "idle" && !selectedFile && (
              <>
                <MotionCard
                  title="Getting Started"
                  description="Tips for best results"
                  glowColor="purple"
                >
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                        1
                      </div>
                      <p>Use videos with clear visibility of the subject performing the motion</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                        2
                      </div>
                      <p>Ensure good lighting conditions for better accuracy</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                        3
                      </div>
                      <p>Keep the camera steady and maintain a consistent viewing angle</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                        4
                      </div>
                      <p>Recommended video length: 5-60 seconds for optimal results</p>
                    </div>
                  </div>
                </MotionCard>

                <MotionCard
                  title="Coming Soon"
                  description="Exciting features in development"
                  glowColor="cyan"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                      <PlayCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">Real-time motion preview</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                      <Users className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm font-medium">Collaborative projects</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                      <Cloud className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium">Cloud storage integration</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                      <Smile className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">Advanced emotion blending</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                      <Grid3x3 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm font-medium">Custom rig mapping</span>
                    </div>
                  </div>
                </MotionCard>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}