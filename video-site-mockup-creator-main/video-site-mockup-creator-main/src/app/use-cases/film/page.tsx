"use client"

import { Navigation } from "@/components/Navigation"
import { MotionCard } from "@/components/MotionCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { 
  Clapperboard,
  Film,
  CheckCircle2,
  ArrowRight,
  Camera,
  Sparkles,
  Users,
  TrendingUp,
  Clock,
  Award,
  Layers,
  Video,
  Zap,
  Globe,
  FileText,
  Sword,
  MessageSquare,
  Heart,
  Laugh,
  Mountain,
  Brain,
  Wand2,
  SplitSquareHorizontal,
  BookOpen,
  Aperture,
  Timer,
  Crosshair,
  Layout,
  Palette,
  ImagePlus,
  Frame,
  Play,
  Download,
  Share2,
  Crown,
  Rocket,
  Target,
  Cpu,
  Network,
  Lock,
  Sliders,
  Database,
  CloudCog
} from "lucide-react"

export default function FilmUseCasePage() {
  const features = [
    {
      icon: Camera,
      title: "Cinema-Quality Capture",
      description: "4K+ facial capture with 52 blend shapes for photorealistic character performances and micro-expressions.",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Multi-Actor Recording",
      description: "Synchronize multiple performers in the same scene with frame-perfect accuracy and timing.",
      color: "primary"
    },
    {
      icon: Layers,
      title: "VFX-Ready Exports",
      description: "Industry-standard formats (Alembic, USD, FBX) with complete metadata for seamless VFX pipeline integration.",
      color: "accent"
    },
    {
      icon: Clock,
      title: "Frame-Perfect Sync",
      description: "Timecode synchronization with audio and video for perfect lip-sync and emotion matching.",
      color: "secondary"
    },
    {
      icon: Film,
      title: "HDR Color Space",
      description: "Support for Rec. 2020, DCI-P3, and HDR workflows for cinematic color grading integration.",
      color: "primary"
    },
    {
      icon: Sparkles,
      title: "AI Enhancement",
      description: "AI-powered cleanup, noise reduction, and motion smoothing for pristine animation quality.",
      color: "accent"
    }
  ]

  const filmTemplates = [
    {
      icon: Sword,
      title: "Action & Stunt Template",
      description: "Pre-configured for high-intensity action sequences",
      features: ["Fight choreography", "Vehicle stunts", "Chase sequences", "Weapon handling", "Parkour & acrobatics"],
      color: "primary"
    },
    {
      icon: MessageSquare,
      title: "Dialogue & Drama Template",
      description: "Optimized for conversation and emotional scenes",
      features: ["Subtle facial expressions", "Gesture nuances", "Sitting/standing interactions", "Multi-character dialogue", "Emotional beats"],
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Romance & Intimacy Template",
      description: "Specialized for romantic and intimate moments",
      features: ["Tender gestures", "Eye contact tracking", "Dance sequences", "Embrace animations", "Emotional transitions"],
      color: "accent"
    },
    {
      icon: Laugh,
      title: "Comedy & Slapstick Template",
      description: "Built for comedic timing and physical comedy",
      features: ["Exaggerated expressions", "Pratfall animations", "Reaction shots", "Comic timing markers", "Physical gags"],
      color: "primary"
    },
    {
      icon: Mountain,
      title: "Epic & Adventure Template",
      description: "Large-scale sequences with environmental interaction",
      features: ["Climbing & traversal", "Weather reactions", "Crowd scenes", "Hero moments", "Environmental hazards"],
      color: "secondary"
    },
    {
      icon: Video,
      title: "Sci-Fi & Fantasy Template",
      description: "Support for otherworldly and fantastical movements",
      features: ["Zero-gravity simulation", "Creature performance", "Magic casting", "Alien locomotion", "Energy manipulation"],
      color: "accent"
    }
  ]

  const sceneTypes = [
    {
      icon: Sword,
      title: "Action Sequences",
      description: "High-intensity combat and stunt choreography",
      optimizations: ["120 FPS capture", "Multiple camera angles", "Slow-motion support", "Impact detection"],
      color: "primary"
    },
    {
      icon: MessageSquare,
      title: "Dialogue Scenes",
      description: "Conversation-focused with facial emphasis",
      optimizations: ["Micro-expression tracking", "Lip-sync precision", "Eye-line matching", "Subtle gestures"],
      color: "secondary"
    },
    {
      icon: Aperture,
      title: "Cinematic Establishing",
      description: "Wide shots and environment interaction",
      optimizations: ["Full-body tracking", "Spatial awareness", "Group choreography", "Scene composition"],
      color: "accent"
    },
    {
      icon: Heart,
      title: "Emotional Moments",
      description: "High-emotion character-driven scenes",
      optimizations: ["Advanced facial rig", "Tear tracking", "Breathing patterns", "Emotional intensity mapping"],
      color: "primary"
    },
    {
      icon: Timer,
      title: "Montage & Transitions",
      description: "Quick cuts and time-lapse sequences",
      optimizations: ["Variable frame rates", "Motion blur control", "Speed ramping", "Transition markers"],
      color: "secondary"
    },
    {
      icon: Users,
      title: "Ensemble & Crowd",
      description: "Multi-actor synchronized performances",
      optimizations: ["Mass capture", "Character isolation", "Sync verification", "Crowd duplication tools"],
      color: "accent"
    }
  ]

  const filmInnovations = [
    {
      icon: FileText,
      title: "AI Script Breakdown",
      description: "Automated script analysis that identifies character beats, action sequences, and emotion arcs. Generate shot lists and motion capture requirements directly from screenplay.",
      color: "primary"
    },
    {
      icon: Brain,
      title: "Scene Generation AI",
      description: "Generate complete motion sequences from script descriptions. Input dialogue and stage directions, output fully animated character performances.",
      color: "secondary"
    },
    {
      icon: Wand2,
      title: "Auto-Retargeting Magic",
      description: "Instantly adapt captured performances to any character rig. One performance, infinite characters - from realistic humans to stylized creatures.",
      color: "accent"
    },
    {
      icon: SplitSquareHorizontal,
      title: "Multi-Take Blending",
      description: "Seamlessly blend the best moments from multiple takes. AI-powered selection of optimal performance segments for perfect final result.",
      color: "primary"
    },
    {
      icon: BookOpen,
      title: "Storyboard Integration",
      description: "Import storyboards and animatics for real-time comparison. Match director vision with live performance preview during capture sessions.",
      color: "secondary"
    },
    {
      icon: Crosshair,
      title: "Director's Playback System",
      description: "Real-time 3D preview with virtual camera control. Review performances from any angle instantly without post-processing delays.",
      color: "accent"
    }
  ]

  const storyboardTools = [
    {
      icon: Layout,
      title: "AI Storyboard Generator",
      description: "Transform screenplay text into visual storyboards automatically",
      features: [
        "Script-to-image conversion",
        "Character pose generation",
        "Camera angle suggestions",
        "Scene composition layout",
        "Auto-shot numbering"
      ],
      color: "primary"
    },
    {
      icon: Palette,
      title: "Visual Style Presets",
      description: "Apply cinematic styles to your storyboards instantly",
      features: [
        "Film noir aesthetics",
        "Wes Anderson symmetry",
        "Marvel action framing",
        "Tarantino angles",
        "Custom style training"
      ],
      color: "secondary"
    },
    {
      icon: ImagePlus,
      title: "Shot Library",
      description: "Access thousands of pre-designed shot templates",
      features: [
        "Establishing shots",
        "Over-the-shoulder",
        "Dutch angles",
        "Tracking shots",
        "Aerial perspectives"
      ],
      color: "accent"
    },
    {
      icon: Frame,
      title: "Frame-by-Frame Editor",
      description: "Precise control over every storyboard panel",
      features: [
        "Drag-and-drop interface",
        "Layer management",
        "Annotation tools",
        "Timing indicators",
        "Motion arrows"
      ],
      color: "primary"
    },
    {
      icon: Play,
      title: "Animatic Creator",
      description: "Convert static boards to motion animatics",
      features: [
        "Auto-timing from script",
        "Voice-over sync",
        "Music integration",
        "Transition effects",
        "Export to editors"
      ],
      color: "secondary"
    },
    {
      icon: Users,
      title: "Collaboration Hub",
      description: "Real-time team collaboration on storyboards",
      features: [
        "Multi-user editing",
        "Comment threads",
        "Version control",
        "Director approvals",
        "Client presentations"
      ],
      color: "accent"
    }
  ]

  const storyboardWorkflow = [
    {
      step: "1. Upload Script",
      description: "Import your screenplay in Final Draft, PDF, or plain text format",
      icon: FileText,
      color: "primary"
    },
    {
      step: "2. AI Analysis",
      description: "Our AI breaks down scenes, identifies shots, and suggests camera angles",
      icon: Brain,
      color: "secondary"
    },
    {
      step: "3. Generate Boards",
      description: "Automatically create storyboard panels with characters, props, and framing",
      icon: Layout,
      color: "accent"
    },
    {
      step: "4. Refine & Edit",
      description: "Customize frames, adjust compositions, add notes and motion indicators",
      icon: Palette,
      color: "primary"
    },
    {
      step: "5. Create Animatic",
      description: "Add timing, transitions, and audio to bring your storyboard to life",
      icon: Play,
      color: "secondary"
    },
    {
      step: "6. Export & Share",
      description: "Download as PDF, video, or share directly with your production team",
      icon: Download,
      color: "accent"
    }
  ]

  const premiumFeatures = [
    {
      icon: Crown,
      title: "Neural Performance Capture",
      description: "Next-generation AI that captures nuanced performances with unprecedented fidelity. Deep learning models trained on thousands of professional actor performances.",
      capabilities: [
        "Micro-expression detection",
        "Subtle emotion transitions",
        "Breathing and heartbeat simulation",
        "Performance style matching",
        "Director's intent learning"
      ],
      color: "primary",
      badge: "Enterprise"
    },
    {
      icon: Rocket,
      title: "Real-Time Ray Tracing Preview",
      description: "See your motion capture rendered with cinema-quality lighting in real-time. Make decisions on set with final-look previews.",
      capabilities: [
        "Photorealistic lighting",
        "Global illumination",
        "Material shaders",
        "Environmental effects",
        "HDR output"
      ],
      color: "secondary",
      badge: "Pro"
    },
    {
      icon: Target,
      title: "Precision Body Mechanics",
      description: "Advanced biomechanical simulation ensuring anatomically correct movement. Perfect for realistic action and subtle character acting.",
      capabilities: [
        "Muscle deformation",
        "Cloth dynamics",
        "Hair simulation",
        "Secondary motion",
        "Weight distribution"
      ],
      color: "accent",
      badge: "Studio"
    },
    {
      icon: Cpu,
      title: "Cloud Render Farm",
      description: "Process massive motion capture datasets in minutes instead of hours. Distributed rendering across high-performance GPU clusters.",
      capabilities: [
        "Unlimited processing power",
        "Priority queue access",
        "Batch processing",
        "Auto-scaling",
        "4K/8K support"
      ],
      color: "primary",
      badge: "Enterprise"
    },
    {
      icon: Network,
      title: "Multi-Camera Sync System",
      description: "Synchronize unlimited cameras with sub-frame precision. Capture performances from every angle simultaneously.",
      capabilities: [
        "Timecode synchronization",
        "Camera array management",
        "360-degree coverage",
        "Automatic calibration",
        "Live monitoring"
      ],
      color: "secondary",
      badge: "Pro"
    },
    {
      icon: Database,
      title: "Performance Library",
      description: "Build your own searchable library of captured performances. Reuse and remix motion data across unlimited projects.",
      capabilities: [
        "Unlimited storage",
        "AI-powered search",
        "Tagging system",
        "Quick preview",
        "One-click export"
      ],
      color: "accent",
      badge: "Studio"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level security for your valuable motion capture data. Perfect for confidential pre-release film projects.",
      capabilities: [
        "End-to-end encryption",
        "Private cloud hosting",
        "Access control",
        "Audit logs",
        "NDA compliance"
      ],
      color: "primary",
      badge: "Enterprise"
    },
    {
      icon: Sliders,
      title: "Advanced Post-Processing",
      description: "Studio-grade motion editing with professional tools. Clean up, enhance, and perfect every frame of captured data.",
      capabilities: [
        "Noise reduction",
        "Gap filling",
        "Smooth interpolation",
        "Keyframe editing",
        "Motion curves"
      ],
      color: "secondary",
      badge: "Pro"
    },
    {
      icon: CloudCog,
      title: "Pipeline Integration",
      description: "Seamless integration with your existing VFX pipeline. Custom API access and webhook support for automated workflows.",
      capabilities: [
        "REST API access",
        "Webhook triggers",
        "Custom plugins",
        "FTP/S3 sync",
        "Dedicated support"
      ],
      color: "accent",
      badge: "Enterprise"
    }
  ]

  const productions = [
    {
      title: "The Last Guardian",
      type: "Feature Film",
      studio: "Apex Pictures",
      achievement: "Oscar Nominated VFX",
      details: "145 min runtime, 300+ VFX shots with motion capture characters",
      stats: { shots: "300+", characters: "12", duration: "145 min" }
    },
    {
      title: "Neon Dreams",
      type: "TV Series",
      studio: "StreamFlix Originals",
      achievement: "Emmy Award Winner",
      details: "8 episodes, cyberpunk aesthetic with digital characters",
      stats: { episodes: "8", characters: "25", duration: "6 hours" }
    },
    {
      title: "Beyond Reality",
      type: "Animated Feature",
      studio: "PixelWorks Animation",
      achievement: "Box Office $500M+",
      details: "Full CG animated feature with performance capture",
      stats: { shots: "2000+", characters: "50+", duration: "112 min" }
    }
  ]

  const workflow = [
    {
      phase: "Pre-Production",
      tasks: [
        "Character design and rigging preparation",
        "Performance planning and storyboarding",
        "Technical requirements assessment",
        "Actor rehearsals and movement blocking"
      ]
    },
    {
      phase: "Production",
      tasks: [
        "Multi-camera motion capture recording",
        "Real-time performance preview",
        "Director feedback and retakes",
        "On-set data verification"
      ]
    },
    {
      phase: "Post-Production",
      tasks: [
        "Motion data cleanup and refinement",
        "Character performance retargeting",
        "VFX integration and rendering",
        "Final color grading and delivery"
      ]
    }
  ]

  const technicalStandards = [
    { standard: "Frame Rate", value: "24, 25, 30, 48, 60, 120 FPS" },
    { standard: "Resolution", value: "Up to 8K capture" },
    { standard: "Color Depth", value: "10-bit, 12-bit support" },
    { standard: "Formats", value: "Alembic, USD, FBX, BVH" },
    { standard: "Facial Fidelity", value: "52 blend shapes + custom" },
    { standard: "Body Tracking", value: "Up to 256 joints" },
    { standard: "Multi-Actor", value: "Unlimited performers" },
    { standard: "Metadata", value: "Full SMPTE compliance" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <Link href="/use-cases" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Use Cases
          </Link>
          
          <div className="flex items-start gap-6 mb-6">
            <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-secondary/10 border-2 border-secondary/20">
              <Clapperboard className="w-10 h-10 text-secondary" />
            </div>
            <div className="flex-1">
              <Badge className="mb-3 bg-secondary/10 text-secondary border-secondary/20">
                Industry Standard
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Film & Animation Production
              </h1>
              <p className="text-xl text-muted-foreground">
                Hollywood-grade motion capture for feature films, TV series, and animated productions. Trusted by award-winning studios for Oscar and Emmy-nominated projects.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
              <div className="flex items-center gap-2 mb-1">
                <Film className="w-4 h-4 text-secondary" />
                <span className="text-2xl font-bold">200+</span>
              </div>
              <p className="text-sm text-muted-foreground">Productions</p>
            </div>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-2xl font-bold">45+</span>
              </div>
              <p className="text-sm text-muted-foreground">Film Studios</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-2xl font-bold">15</span>
              </div>
              <p className="text-sm text-muted-foreground">Award Winners</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-secondary" />
                <span className="text-2xl font-bold">99%</span>
              </div>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="features" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="scenes">Scene Types</TabsTrigger>
              <TabsTrigger value="innovations">Innovations</TabsTrigger>
              <TabsTrigger value="storyboard">Storyboard</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
              <TabsTrigger value="productions">Productions</TabsTrigger>
              <TabsTrigger value="workflow">Workflow</TabsTrigger>
            </TabsList>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, idx) => {
                  const Icon = feature.icon
                  const colorMap = {
                    primary: "bg-primary/10 border-primary/20 text-primary",
                    secondary: "bg-secondary/10 border-secondary/20 text-secondary",
                    accent: "bg-accent/10 border-accent/20 text-accent"
                  }
                  
                  return (
                    <MotionCard
                      key={idx}
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                      glowColor={feature.color === "primary" ? "cyan" : feature.color === "secondary" ? "purple" : "magenta"}
                    >
                      <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${colorMap[feature.color as keyof typeof colorMap]} border-2`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </MotionCard>
                  )
                })}
              </div>

              <MotionCard
                title="Professional VFX Pipeline Integration"
                description="Seamless workflow with industry-standard tools"
                icon={Layers}
                glowColor="purple"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Maya", "Houdini", "Blender", "3ds Max", "Cinema 4D", "MotionBuilder", "Nuke", "After Effects"].map((tool, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-card border border-border text-center">
                      <Globe className="w-6 h-6 mx-auto mb-2 text-secondary" />
                      <p className="text-sm font-semibold">{tool}</p>
                    </div>
                  ))}
                </div>
              </MotionCard>
            </TabsContent>

            {/* Film Templates Tab */}
            <TabsContent value="templates" className="space-y-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clapperboard className="w-6 h-6 text-secondary" />
                  <h2 className="text-2xl font-bold">Film Production Templates</h2>
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20 text-xs">
                    Ready to Use
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  Pre-configured templates for common film scenarios with optimized motion capture settings
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filmTemplates.map((template, idx) => {
                  const Icon = template.icon
                  const colorMap = {
                    primary: "border-primary/30 hover:border-primary/50",
                    secondary: "border-secondary/30 hover:border-secondary/50",
                    accent: "border-accent/30 hover:border-accent/50"
                  }
                  const iconColorMap = {
                    primary: "bg-primary/10 text-primary",
                    secondary: "bg-secondary/10 text-secondary",
                    accent: "bg-accent/10 text-accent"
                  }
                  
                  return (
                    <div
                      key={idx}
                      className={`p-6 rounded-lg border-2 bg-card ${colorMap[template.color as keyof typeof colorMap]} transition-all hover:shadow-lg`}
                    >
                      <div className={`w-12 h-12 rounded-lg ${iconColorMap[template.color as keyof typeof iconColorMap]} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{template.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                      <div className="space-y-2">
                        {template.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabsContent>

            {/* Scene Types Tab */}
            <TabsContent value="scenes" className="space-y-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Scene Types & Optimizations</h2>
                  <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                    Specialized
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  Tailored capture settings for different scene types and filming requirements
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sceneTypes.map((scene, idx) => {
                  const Icon = scene.icon
                  const colorMap = {
                    primary: "border-primary/30 hover:border-primary/50 bg-primary/5",
                    secondary: "border-secondary/30 hover:border-secondary/50 bg-secondary/5",
                    accent: "border-accent/30 hover:border-accent/50 bg-accent/5"
                  }
                  const iconColorMap = {
                    primary: "bg-primary/20 text-primary",
                    secondary: "bg-secondary/20 text-secondary",
                    accent: "bg-accent/20 text-accent"
                  }
                  
                  return (
                    <div
                      key={idx}
                      className={`p-6 rounded-lg border-2 ${colorMap[scene.color as keyof typeof colorMap]} transition-all hover:shadow-lg`}
                    >
                      <div className={`w-12 h-12 rounded-lg ${iconColorMap[scene.color as keyof typeof iconColorMap]} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{scene.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{scene.description}</p>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Optimizations
                        </p>
                        {scene.optimizations.map((opt, oIdx) => (
                          <div key={oIdx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{opt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabsContent>

            {/* Film Innovations Tab */}
            <TabsContent value="innovations" className="space-y-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold">Film Production Innovations</h2>
                  <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                    New
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  Cutting-edge AI-powered tools including script generation and scene automation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filmInnovations.map((innovation, idx) => {
                  const Icon = innovation.icon
                  const colorMap = {
                    primary: "border-primary/30 hover:border-primary/50",
                    secondary: "border-secondary/30 hover:border-secondary/50",
                    accent: "border-accent/30 hover:border-accent/50"
                  }
                  const iconColorMap = {
                    primary: "bg-primary/10 text-primary",
                    secondary: "bg-secondary/10 text-secondary",
                    accent: "bg-accent/10 text-accent"
                  }
                  
                  return (
                    <div
                      key={idx}
                      className={`p-6 rounded-lg border-2 bg-card ${colorMap[innovation.color as keyof typeof colorMap]} transition-all hover:shadow-lg`}
                    >
                      <div className={`w-12 h-12 rounded-lg ${iconColorMap[innovation.color as keyof typeof iconColorMap]} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{innovation.title}</h3>
                      <p className="text-sm text-muted-foreground">{innovation.description}</p>
                    </div>
                  )
                })}
              </div>

              <MotionCard
                title="AI-Powered Script to Screen"
                description="Revolutionary workflow automation"
                icon={Brain}
                glowColor="purple"
              >
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Upload Screenplay
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Import Final Draft, Celtx, or plain text screenplays. Our AI analyzes character actions, emotions, and blocking.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-secondary" />
                      AI Scene Generation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Automatically generate base motion capture from script descriptions. Perfect starting point for director refinement.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Wand2 className="w-5 h-5 text-accent" />
                      Real-Time Preview
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      View generated animations in real-time 3D preview. Make adjustments before scheduling expensive capture sessions.
                    </p>
                  </div>
                </div>
              </MotionCard>
            </TabsContent>

            {/* Storyboard Tab */}
            <TabsContent value="storyboard" className="space-y-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Layout className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">AI Storyboard Creation</h2>
                  <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                    New
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  Transform your screenplay into professional storyboards automatically with AI-powered visual generation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {storyboardTools.map((tool, idx) => {
                  const Icon = tool.icon
                  const colorMap = {
                    primary: "border-primary/30 hover:border-primary/50",
                    secondary: "border-secondary/30 hover:border-secondary/50",
                    accent: "border-accent/30 hover:border-accent/50"
                  }
                  const iconColorMap = {
                    primary: "bg-primary/10 text-primary",
                    secondary: "bg-secondary/10 text-secondary",
                    accent: "bg-accent/10 text-accent"
                  }
                  
                  return (
                    <div
                      key={idx}
                      className={`p-6 rounded-lg border-2 bg-card ${colorMap[tool.color as keyof typeof colorMap]} transition-all hover:shadow-lg`}
                    >
                      <div className={`w-12 h-12 rounded-lg ${iconColorMap[tool.color as keyof typeof iconColorMap]} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                      <div className="space-y-2">
                        {tool.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              <MotionCard
                title="Storyboard Creation Workflow"
                description="From script to animatic in 6 simple steps"
                icon={Layout}
                glowColor="cyan"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {storyboardWorkflow.map((step, idx) => {
                    const Icon = step.icon
                    const colorMap = {
                      primary: "bg-primary/10 border-primary/20 text-primary",
                      secondary: "bg-secondary/10 border-secondary/20 text-secondary",
                      accent: "bg-accent/10 border-accent/20 text-accent"
                    }
                    
                    return (
                      <div key={idx} className="p-4 rounded-lg bg-muted/50 border border-border">
                        <div className={`w-10 h-10 rounded-lg ${colorMap[step.color as keyof typeof colorMap]} flex items-center justify-center mb-3`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold mb-1">{step.step}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    )
                  })}
                </div>
              </MotionCard>

              <MotionCard
                title="Export & Share Options"
                description="Multiple formats for every workflow"
                icon={Share2}
                glowColor="purple"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { format: "PDF", desc: "Print-ready boards" },
                    { format: "MP4", desc: "Video animatic" },
                    { format: "PNG", desc: "Individual frames" },
                    { format: "Web Link", desc: "Shareable URL" }
                  ].map((option, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-card border border-border text-center">
                      <Download className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-semibold">{option.format}</p>
                      <p className="text-xs text-muted-foreground mt-1">{option.desc}</p>
                    </div>
                  ))}
                </div>
              </MotionCard>
            </TabsContent>

            {/* Premium Features Tab */}
            <TabsContent value="premium" className="space-y-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold">Premium Film Features</h2>
                  <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                    Enterprise
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  Advanced capabilities for professional film productions and VFX studios
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumFeatures.map((feature, idx) => {
                  const Icon = feature.icon
                  const colorMap = {
                    primary: "border-primary/30 hover:border-primary/50",
                    secondary: "border-secondary/30 hover:border-secondary/50",
                    accent: "border-accent/30 hover:border-accent/50"
                  }
                  const iconColorMap = {
                    primary: "bg-primary/10 text-primary",
                    secondary: "bg-secondary/10 text-secondary",
                    accent: "bg-accent/10 text-accent"
                  }
                  const badgeColorMap = {
                    Enterprise: "bg-accent/10 text-accent border-accent/20",
                    Pro: "bg-primary/10 text-primary border-primary/20",
                    Studio: "bg-secondary/10 text-secondary border-secondary/20"
                  }
                  
                  return (
                    <div
                      key={idx}
                      className={`p-6 rounded-lg border-2 bg-card ${colorMap[feature.color as keyof typeof colorMap]} transition-all hover:shadow-lg`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg ${iconColorMap[feature.color as keyof typeof iconColorMap]} flex items-center justify-center`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <Badge className={`text-xs ${badgeColorMap[feature.badge as keyof typeof badgeColorMap]}`}>
                          {feature.badge}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Capabilities
                        </p>
                        {feature.capabilities.map((capability, cIdx) => (
                          <div key={cIdx} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                            <span>{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              <MotionCard
                title="Premium Tier Comparison"
                description="Choose the right plan for your production"
                icon={Crown}
                glowColor="magenta"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-6 rounded-lg border-2 border-primary/30 bg-primary/5">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                        Pro
                      </div>
                    </h3>
                    <p className="text-2xl font-bold mb-4">$499<span className="text-sm text-muted-foreground">/mo</span></p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Real-time ray tracing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Multi-camera sync</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Advanced post-processing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>50 hours render/month</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      Learn More
                    </Button>
                  </div>

                  <div className="p-6 rounded-lg border-2 border-secondary/30 bg-secondary/5">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center">
                        Studio
                      </div>
                    </h3>
                    <p className="text-2xl font-bold mb-4">$999<span className="text-sm text-muted-foreground">/mo</span></p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        <span>Everything in Pro</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        <span>Precision body mechanics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        <span>Performance library</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                        <span>200 hours render/month</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
                      Learn More
                    </Button>
                  </div>

                  <div className="p-6 rounded-lg border-2 border-accent/30 bg-accent/5">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center">
                        <Crown className="w-4 h-4" />
                      </div>
                      Enterprise
                    </h3>
                    <p className="text-2xl font-bold mb-4">Custom</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span>Everything in Studio</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span>Neural performance capture</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span>Enterprise security</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span>Unlimited everything</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-4">
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </MotionCard>
            </TabsContent>

            {/* Productions Tab */}
            <TabsContent value="productions" className="space-y-6">
              {productions.map((prod, idx) => (
                <MotionCard
                  key={idx}
                  title={prod.title}
                  description={prod.details}
                  icon={Film}
                  glowColor={idx % 3 === 0 ? "purple" : idx % 3 === 1 ? "cyan" : "magenta"}
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground mb-1">Type</p>
                      <p className="font-semibold">{prod.type}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground mb-1">Studio</p>
                      <p className="font-semibold">{prod.studio}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 md:col-span-2">
                      <p className="text-sm text-muted-foreground mb-1">Achievement</p>
                      <p className="font-semibold text-secondary flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {prod.achievement}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(prod.stats).map(([key, value]) => (
                      <Badge key={key} variant="outline" className="text-xs">
                        {value} {key}
                      </Badge>
                    ))}
                  </div>
                </MotionCard>
              ))}

              <div className="p-6 rounded-lg border-2 border-secondary/20 bg-secondary/5 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-2">Your Production Could Be Next</h3>
                <p className="text-muted-foreground mb-4">
                  Join the award-winning studios using our platform for feature film production.
                </p>
                <Button variant="outline">
                  Schedule Studio Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            {/* Workflow Tab */}
            <TabsContent value="workflow" className="space-y-6">
              {workflow.map((phase, idx) => (
                <MotionCard
                  key={idx}
                  title={phase.phase}
                  icon={idx === 0 ? Camera : idx === 1 ? Video : Sparkles}
                  glowColor={idx === 0 ? "cyan" : idx === 1 ? "purple" : "magenta"}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {phase.tasks.map((task, taskIdx) => (
                      <div key={taskIdx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{task}</span>
                      </div>
                    ))}
                  </div>
                </MotionCard>
              ))}

              <MotionCard
                title="Technical Standards & Specifications"
                description="Industry-compliant technical specifications for film production"
                icon={Zap}
                glowColor="cyan"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {technicalStandards.map((spec, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <span className="font-semibold">{spec.standard}</span>
                      <span className="text-sm text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </MotionCard>

              <MotionCard
                title="Start Your Film Production"
                description="Get started with professional motion capture"
                icon={Clapperboard}
                glowColor="purple"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="flex-1">
                    <Link href="/upload">
                      Upload Film Footage
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="flex-1">
                    <Link href="/results">
                      View Cinema Demo
                    </Link>
                  </Button>
                </div>
              </MotionCard>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}