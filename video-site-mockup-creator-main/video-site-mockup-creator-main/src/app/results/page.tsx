"use client"

import { useState, useRef } from "react"
import { Navigation } from "@/components/Navigation"
import { ModelViewer } from "@/components/ModelViewer"
import { MotionCard } from "@/components/MotionCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { 
  Download, 
  Box, 
  Activity, 
  BarChart3, 
  FileJson,
  Share2,
  Copy,
  CheckCircle2,
  Upload,
  Star,
  Users,
  Smile,
  MessageSquare,
  Languages,
  Mic,
  Play,
  Zap,
  FileType,
  Globe,
  Film,
  Layers,
  Package,
  Gamepad2,
  Clapperboard,
  GraduationCap,
  Megaphone,
  Headset,
  ArrowRight
} from "lucide-react"

// Emotion presets
const emotions = [
  { id: "neutral", name: "Neutral", icon: "😐", color: "text-muted-foreground" },
  { id: "happy", name: "Happy", icon: "😊", color: "text-secondary" },
  { id: "sad", name: "Sad", icon: "😢", color: "text-blue-400" },
  { id: "angry", name: "Angry", icon: "😠", color: "text-destructive" },
  { id: "surprised", name: "Surprised", icon: "😲", color: "text-accent" },
  { id: "fear", name: "Fear", icon: "😨", color: "text-purple-400" },
  { id: "disgust", name: "Disgust", icon: "🤢", color: "text-green-400" },
  { id: "thinking", name: "Thinking", icon: "🤔", color: "text-primary" }
]

// Top 5 most spoken languages globally
const languages = [
  { code: "en", name: "English", flag: "🇬🇧", speakers: "1.5B" },
  { code: "zh", name: "Mandarin Chinese", flag: "🇨🇳", speakers: "1.1B" },
  { code: "hi", name: "Hindi", flag: "🇮🇳", speakers: "602M" },
  { code: "es", name: "Spanish", flag: "🇪🇸", speakers: "559M" },
  { code: "ar", name: "Arabic", flag: "🇸🇦", speakers: "274M" }
]

// Use cases data
const useCases = [
  {
    id: 1,
    slug: "gaming",
    title: "Gaming & Game Development",
    description: "Bring your game characters to life with realistic motion capture animations for AAA games, indie titles, and mobile gaming.",
    icon: Gamepad2,
    color: "primary",
    features: ["Real-time retargeting", "Unity & Unreal ready", "Combat animations"],
    stats: "Used in 500+ games"
  },
  {
    id: 2,
    slug: "film",
    title: "Film & Animation",
    description: "Create Hollywood-quality character performances for movies, TV shows, and animated features with professional-grade mocap.",
    icon: Clapperboard,
    color: "secondary",
    features: ["Cinema-quality output", "Multi-actor support", "VFX integration"],
    stats: "20+ film studios"
  },
  {
    id: 3,
    slug: "vr",
    title: "Virtual Reality & Metaverse",
    description: "Immersive VR experiences with full-body tracking, facial expressions, and real-time avatar animation.",
    icon: Headset,
    color: "accent",
    features: ["Full-body IK", "Real-time streaming", "Avatar customization"],
    stats: "1M+ VR users"
  },
  {
    id: 4,
    slug: "education",
    title: "Education & Training",
    description: "Develop interactive training simulations and educational content with accurate human movement and gesture recognition.",
    icon: GraduationCap,
    color: "primary",
    features: ["Medical simulations", "Safety training", "Sports analysis"],
    stats: "150+ institutions"
  },
  {
    id: 5,
    slug: "marketing",
    title: "Marketing & Advertising",
    description: "Create engaging branded content, product demonstrations, and social media campaigns with eye-catching character animations.",
    icon: Megaphone,
    color: "secondary",
    features: ["Quick turnaround", "Brand mascots", "Social media ready"],
    stats: "300+ campaigns"
  }
]

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("model")
  const [copied, setCopied] = useState(false)
  const [selectedModel, setSelectedModel] = useState<string | null>(null)
  const [uploadedModel, setUploadedModel] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Facial animation states
  const [lipSyncText, setLipSyncText] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [selectedEmotion, setSelectedEmotion] = useState("neutral")
  const [emotionIntensity, setEmotionIntensity] = useState([50])
  const [vocalPitch, setVocalPitch] = useState([50])
  const [vocalSpeed, setVocalSpeed] = useState([50])
  const [vocalEmphasis, setVocalEmphasis] = useState([50])
  const [isGenerating, setIsGenerating] = useState(false)

  const motionData = {
    duration: "12.5s",
    frames: 375,
    fps: 30,
    keyframes: 45,
    joints: 24,
    accuracy: "98.5%",
    facialBlendShapes: 52,
    lipSyncFrames: 375,
    emotionKeyframes: 28
  }

  const top5Models = [
    { id: 1, name: "Human Base Rig", downloads: "12.5K", rating: 4.9, preview: "/models/human.jpg" },
    { id: 2, name: "Character Hero", downloads: "9.8K", rating: 4.8, preview: "/models/hero.jpg" },
    { id: 3, name: "Athletic Body", downloads: "8.2K", rating: 4.7, preview: "/models/athletic.jpg" },
    { id: 4, name: "Stylized Character", downloads: "7.1K", rating: 4.6, preview: "/models/stylized.jpg" },
    { id: 5, name: "Realistic Avatar", downloads: "6.3K", rating: 4.5, preview: "/models/avatar.jpg" }
  ]

  const exportFormats = [
    { name: "FBX", description: "Industry standard format", icon: Box, extension: "fbx" },
    { name: "BVH", description: "Motion capture format", icon: Activity, extension: "bvh" },
    { name: "JSON", description: "Web-friendly format", icon: FileJson, extension: "json" },
    { name: "glTF", description: "Modern web 3D format", icon: Globe, extension: "gltf" },
    { name: "GLB", description: "Binary glTF format", icon: Package, extension: "glb" },
    { name: "USD", description: "Universal Scene Description", icon: Layers, extension: "usd" },
    { name: "USDZ", description: "Apple AR format", icon: Layers, extension: "usdz" },
    { name: "Alembic", description: "VFX industry standard", icon: Film, extension: "abc" },
    { name: "COLLADA", description: "Open standard format", icon: FileType, extension: "dae" }
  ]

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = (format: string, extension: string) => {
    const content = `Mock ${format} motion capture data\n\nDuration: ${motionData.duration}\nFrames: ${motionData.frames}\nFPS: ${motionData.fps}\nJoints: ${motionData.joints}\nAccuracy: ${motionData.accuracy}\n\nFacial Animation:\nBlend Shapes: ${motionData.facialBlendShapes}\nLip Sync Frames: ${motionData.lipSyncFrames}\nEmotion Keyframes: ${motionData.emotionKeyframes}`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `motion_capture_${Date.now()}.${extension}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleModelSelect = (modelId: number) => {
    setSelectedModel(`model-${modelId}`)
    setUploadedModel(null)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const validTypes = ['.fbx', '.obj', '.gltf', '.glb', '.dae']
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
      
      if (validTypes.includes(fileExtension)) {
        setUploadedModel(file)
        setSelectedModel(null)
      } else {
        alert('Please upload a valid 3D model file (.fbx, .obj, .gltf, .glb, .dae)')
      }
    }
  }

  const triggerFileUpload = () => {
    fileInputRef.current?.click()
  }

  const handleGenerateLipSync = () => {
    setIsGenerating(true)
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold">
                  Motion Capture Results
                </h1>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Completed
                </Badge>
              </div>
              <p className="text-muted-foreground">
                Your motion capture data is ready for export
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                onClick={handleCopyLink}
                className="gap-2"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    Share
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* 3D Model Viewer */}
            <MotionCard
              title="3D Model Viewer"
              description="Interactive preview of your rigged model"
              icon={Box}
              glowColor="cyan"
            >
              <ModelViewer />
              {uploadedModel && (
                <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm font-medium">Custom Model Loaded: {uploadedModel.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Size: {(uploadedModel.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              )}
            </MotionCard>

            {/* Facial Animation Controls */}
            <MotionCard
              title="Facial Animation & Lip Sync"
              description="Advanced emotion rigging and speech synthesis"
              icon={Smile}
              glowColor="purple"
            >
              <div className="space-y-6">
                {/* Lip Sync Text Input */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Lip Sync Text
                    </label>
                    <Badge variant="outline" className="text-xs">
                      {lipSyncText.length} characters
                    </Badge>
                  </div>
                  <Textarea
                    placeholder="Enter text for lip sync generation... The character will speak this text with realistic mouth movements."
                    value={lipSyncText}
                    onChange={(e) => setLipSyncText(e.target.value)}
                    className="min-h-[100px] bg-muted/50 border-primary/20 focus:border-primary"
                  />
                </div>

                {/* Language Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    <Languages className="w-4 h-4 text-secondary" />
                    Speech Language
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setSelectedLanguage(lang.code)}
                        className={`p-3 rounded-lg border-2 transition-all text-left ${
                          selectedLanguage === lang.code
                            ? 'border-secondary bg-secondary/10'
                            : 'border-border bg-card hover:border-secondary/50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{lang.flag}</span>
                          <div className="flex-1">
                            <p className="font-semibold text-sm">{lang.name}</p>
                            <p className="text-xs text-muted-foreground">{lang.speakers} speakers</p>
                          </div>
                          {selectedLanguage === lang.code && (
                            <CheckCircle2 className="w-4 h-4 text-secondary" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Emotion Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    <Smile className="w-4 h-4 text-accent" />
                    Emotion Rigging
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {emotions.map((emotion) => (
                      <button
                        key={emotion.id}
                        onClick={() => setSelectedEmotion(emotion.id)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          selectedEmotion === emotion.id
                            ? 'border-accent bg-accent/10'
                            : 'border-border bg-card hover:border-accent/50'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-3xl mb-1">{emotion.icon}</div>
                          <p className={`text-xs font-semibold ${emotion.color}`}>
                            {emotion.name}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Emotion Intensity */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold">Emotion Intensity</label>
                    <Badge variant="outline" className="text-xs">{emotionIntensity[0]}%</Badge>
                  </div>
                  <Slider
                    value={emotionIntensity}
                    onValueChange={setEmotionIntensity}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Vocal Parameters */}
                <div className="space-y-4 p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Mic className="w-4 h-4 text-primary" />
                    <h4 className="text-sm font-semibold">Vocal Speech Parameters</h4>
                  </div>

                  <div className="space-y-3">
                    {/* Pitch */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs text-muted-foreground">Pitch</label>
                        <span className="text-xs font-mono">{vocalPitch[0] - 50 > 0 ? '+' : ''}{vocalPitch[0] - 50}</span>
                      </div>
                      <Slider
                        value={vocalPitch}
                        onValueChange={setVocalPitch}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* Speed */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs text-muted-foreground">Speed</label>
                        <span className="text-xs font-mono">{(vocalSpeed[0] / 50).toFixed(1)}x</span>
                      </div>
                      <Slider
                        value={vocalSpeed}
                        onValueChange={setVocalSpeed}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* Emphasis */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs text-muted-foreground">Emphasis / Inflection</label>
                        <span className="text-xs font-mono">{vocalEmphasis[0]}%</span>
                      </div>
                      <Slider
                        value={vocalEmphasis}
                        onValueChange={setVocalEmphasis}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <div className="flex gap-3">
                  <Button
                    onClick={handleGenerateLipSync}
                    disabled={!lipSyncText || isGenerating}
                    className="flex-1 gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <Zap className="w-4 h-4 animate-pulse" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Generate Lip Sync
                      </>
                    )}
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Play className="w-4 h-4" />
                    Preview
                  </Button>
                </div>
              </div>
            </MotionCard>

            {/* Top 5 3D Models */}
            <MotionCard
              title="Popular 3D Models"
              description="Choose from our top-rated rigged models"
              icon={Star}
              glowColor="magenta"
            >
              <div className="space-y-3">
                {top5Models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => handleModelSelect(model.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all hover:border-primary/50 text-left ${
                      selectedModel === `model-${model.id}` 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border bg-card'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <Box className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{model.name}</h4>
                          {model.id === 1 && (
                            <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20 text-xs">
                              Most Popular
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {model.downloads} downloads
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-secondary text-secondary" />
                            {model.rating}
                          </span>
                        </div>
                      </div>
                      {selectedModel === `model-${model.id}` && (
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </MotionCard>

            {/* Upload Custom Model */}
            <MotionCard
              title="Upload Custom Model"
              description="Use your own 3D model for motion capture"
              icon={Upload}
              glowColor="purple"
            >
              <div className="space-y-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".fbx,.obj,.gltf,.glb,.dae"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  onClick={triggerFileUpload}
                  className="w-full p-8 border-2 border-dashed border-border hover:border-primary/50 rounded-lg transition-all bg-muted/20 hover:bg-muted/40"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Upload className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold mb-1">Click to upload 3D model</p>
                      <p className="text-sm text-muted-foreground">
                        Supports FBX, OBJ, GLTF, GLB, DAE
                      </p>
                    </div>
                  </div>
                </button>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-card border border-border rounded-lg">
                    <p className="font-semibold mb-1">Supported Formats</p>
                    <p className="text-muted-foreground">FBX, OBJ, GLTF, GLB, DAE</p>
                  </div>
                  <div className="p-3 bg-card border border-border rounded-lg">
                    <p className="font-semibold mb-1">Max File Size</p>
                    <p className="text-muted-foreground">100 MB</p>
                  </div>
                </div>
              </div>
            </MotionCard>

            {/* Use Cases Section */}
            <MotionCard
              title="Industry Use Cases"
              description="See how motion capture powers innovation across industries"
              icon={Star}
              glowColor="cyan"
            >
              <div className="space-y-4">
                {useCases.map((useCase) => {
                  const Icon = useCase.icon
                  const colorMap = {
                    primary: "text-primary border-primary/20 bg-primary/5",
                    secondary: "text-secondary border-secondary/20 bg-secondary/5",
                    accent: "text-accent border-accent/20 bg-accent/5"
                  }
                  const glowMap = {
                    primary: "group-hover:shadow-[0_0_20px_var(--color-primary)]",
                    secondary: "group-hover:shadow-[0_0_20px_var(--color-secondary)]",
                    accent: "group-hover:shadow-[0_0_20px_var(--color-accent)]"
                  }
                  
                  return (
                    <Link key={useCase.id} href={`/use-cases/${useCase.slug}`}>
                      <div
                        className={`group p-5 rounded-lg border-2 transition-all duration-300 cursor-pointer ${colorMap[useCase.color as keyof typeof colorMap]} hover:scale-[1.02] ${glowMap[useCase.color as keyof typeof glowMap]}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`flex items-center justify-center w-14 h-14 rounded-lg ${colorMap[useCase.color as keyof typeof colorMap]} border-2`}>
                            <Icon className={`w-7 h-7 ${useCase.color === 'primary' ? 'text-primary' : useCase.color === 'secondary' ? 'text-secondary' : 'text-accent'}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">{useCase.title}</h4>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs whitespace-nowrap">
                                  {useCase.stats}
                                </Badge>
                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {useCase.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {useCase.features.map((feature, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-2 py-1 rounded-md bg-muted/50 border border-border"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
              
              <div className="mt-6 p-4 rounded-lg border-2 border-primary/20 bg-primary/5 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Explore detailed features, case studies, and technical specifications for each industry
                </p>
                <Link href="/use-cases">
                  <Button variant="outline" className="gap-2">
                    View All Use Cases
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </MotionCard>

            {/* Tabs for different views */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="model">Model</TabsTrigger>
                <TabsTrigger value="motion">Motion Data</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>
              
              <TabsContent value="model" className="mt-6">
                <MotionCard
                  title="Model Information"
                  icon={Box}
                  glowColor="purple"
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Body Joints</p>
                        <p className="text-2xl font-bold text-primary">{motionData.joints}</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Accuracy</p>
                        <p className="text-2xl font-bold text-secondary">{motionData.accuracy}</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Blend Shapes</p>
                        <p className="text-2xl font-bold text-accent">{motionData.facialBlendShapes}</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Emotion Keys</p>
                        <p className="text-2xl font-bold text-accent">{motionData.emotionKeyframes}</p>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h4 className="font-semibold mb-3">Skeleton Structure</h4>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>Root → Spine → Chest</span>
                        </div>
                        <div className="flex items-center gap-2 pl-4">
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                          <span>Chest → LeftShoulder → LeftElbow → LeftHand</span>
                        </div>
                        <div className="flex items-center gap-2 pl-4">
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                          <span>Chest → RightShoulder → RightElbow → RightHand</span>
                        </div>
                        <div className="flex items-center gap-2 pl-4">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span>Root → LeftHip → LeftKnee → LeftFoot</span>
                        </div>
                        <div className="flex items-center gap-2 pl-4">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span>Root → RightHip → RightKnee → RightFoot</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-card border border-border rounded-lg">
                      <h4 className="font-semibold mb-3">Facial Rig</h4>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span>Jaw → Mouth → Lips (Upper/Lower)</span>
                        </div>
                        <div className="flex items-center gap-2 pl-4">
                          <div className="w-2 h-2 rounded-full bg-secondary" />
                          <span>Eyebrows → Eyes → Eyelids</span>
                        </div>
                        <div className="flex items-center gap-2 pl-4">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>Cheeks → Nose → Tongue</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionCard>
              </TabsContent>
              
              <TabsContent value="motion" className="mt-6">
                <MotionCard
                  title="Motion Statistics"
                  icon={Activity}
                  glowColor="magenta"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Duration</p>
                      <p className="text-xl font-bold">{motionData.duration}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Total Frames</p>
                      <p className="text-xl font-bold">{motionData.frames}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Frame Rate</p>
                      <p className="text-xl font-bold">{motionData.fps} FPS</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Keyframes</p>
                      <p className="text-xl font-bold">{motionData.keyframes}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Body Joints</p>
                      <p className="text-xl font-bold">{motionData.joints}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Accuracy</p>
                      <p className="text-xl font-bold text-primary">{motionData.accuracy}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Blend Shapes</p>
                      <p className="text-xl font-bold text-accent">{motionData.facialBlendShapes}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Lip Sync Frames</p>
                      <p className="text-xl font-bold text-secondary">{motionData.lipSyncFrames}</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Emotion Keys</p>
                      <p className="text-xl font-bold text-accent">{motionData.emotionKeyframes}</p>
                    </div>
                  </div>
                </MotionCard>
              </TabsContent>
              
              <TabsContent value="timeline" className="mt-6">
                <MotionCard
                  title="Motion Timeline"
                  icon={BarChart3}
                  glowColor="cyan"
                >
                  <div className="space-y-4">
                    <div className="relative h-32 bg-muted/50 rounded-lg p-4">
                      <div className="absolute inset-0 flex items-center px-4">
                        <div className="w-full h-2 bg-background rounded-full relative">
                          {[10, 25, 45, 60, 75, 90].map((position, i) => (
                            <div
                              key={i}
                              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background"
                              style={{ left: `${position}%` }}
                            />
                          ))}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 rounded-full" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div>
                        <p className="text-muted-foreground">Start</p>
                        <p className="font-mono font-semibold">0:00</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Middle</p>
                        <p className="font-mono font-semibold">6:25</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">End</p>
                        <p className="font-mono font-semibold">12:50</p>
                      </div>
                    </div>
                  </div>
                </MotionCard>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Export Options */}
            <MotionCard
              title="Export Options"
              description="Download your motion capture data"
              icon={Download}
              glowColor="purple"
            >
              <div className="space-y-3">
                {exportFormats.map((format) => {
                  const Icon = format.icon
                  return (
                    <Button
                      key={format.name}
                      variant="outline"
                      className="w-full justify-start gap-3 h-auto py-3"
                      onClick={() => handleDownload(format.name, format.extension)}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-semibold">{format.name}</p>
                        <p className="text-xs text-muted-foreground">{format.description}</p>
                      </div>
                      <Download className="w-4 h-4" />
                    </Button>
                  )
                })}
              </div>
            </MotionCard>

            {/* Quick Stats */}
            <MotionCard
              title="Quick Stats"
              icon={BarChart3}
              glowColor="magenta"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Processing Time</span>
                  <span className="font-semibold">7.2s</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">File Size</span>
                  <span className="font-semibold">2.4 MB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Quality</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    High
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Format</span>
                  <span className="font-semibold">MP4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Facial Data</span>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    Included
                  </Badge>
                </div>
              </div>
            </MotionCard>
          </div>
        </div>
      </div>
    </div>
  )
}