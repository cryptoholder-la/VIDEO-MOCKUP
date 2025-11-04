"use client"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/Navigation"
import { FeatureCard } from "@/components/MotionCard"
import Link from "next/link"
import { 
  Video, 
  Zap, 
  Box, 
  Download, 
  Sparkles, 
  Activity,
  ArrowRight,
  Play,
  Clapperboard,
  Gamepad2,
  GraduationCap,
  Megaphone,
  Headset,
  Camera,
  Users,
  Brain,
  Target,
  Eye,
  Code,
  Languages,
  Shield,
  Globe,
  Clock,
  Palette,
  TestTube2,
  Hand,
  Radio,
  Layers,
  FileText
} from "lucide-react"

export default function Home() {
  const coreFeatures = [
    {
      title: "Video Analysis",
      description: "Advanced AI algorithms extract motion data from any video content with high precision and accuracy.",
      icon: Video
    },
    {
      title: "Real-time Processing",
      description: "Lightning-fast processing pipeline converts your videos into motion capture data in minutes, not hours.",
      icon: Zap
    },
    {
      title: "3D Model Rigging",
      description: "Automatically rig 3D models with industry-standard skeletal structures compatible with major platforms.",
      icon: Box
    },
    {
      title: "Motion Mimicry",
      description: "Apply captured motion data to any rigged model with perfect synchronization and natural movement.",
      icon: Activity
    },
    {
      title: "Multiple Formats",
      description: "Export your motion capture data in FBX, BVH, or JSON formats for seamless integration.",
      icon: Download
    },
    {
      title: "AI Enhancement",
      description: "Machine learning algorithms smooth and enhance motion data for professional-grade results.",
      icon: Sparkles
    }
  ]

  const industryFeatures = [
    {
      title: "Film & Animation",
      description: "Cinema-quality capture with 52 blend shapes, multi-actor recording, VFX-ready exports, and AI script breakdown.",
      icon: Clapperboard,
      color: "secondary"
    },
    {
      title: "Gaming Development",
      description: "Real-time retargeting, Unity/Unreal integration, combat animations, and game-ready optimization.",
      icon: Gamepad2,
      color: "primary"
    },
    {
      title: "Education & Training",
      description: "Medical simulations, safety training, sports analysis, virtual labs, and automated assessment systems.",
      icon: GraduationCap,
      color: "accent"
    },
    {
      title: "Marketing & Advertising",
      description: "Rapid production, brand mascots, social media optimization, A/B testing, and multi-platform delivery.",
      icon: Megaphone,
      color: "secondary"
    },
    {
      title: "VR & Metaverse",
      description: "Full-body IK, real-time streaming, avatar customization, eye/face tracking, and cross-platform support.",
      icon: Headset,
      color: "primary"
    }
  ]

  const advancedCapabilities = [
    {
      title: "Facial Animation System",
      description: "52 blend shapes, 8 emotion presets, 375 lip sync frames, and vocal speech parameters.",
      icon: Eye
    },
    {
      title: "Multi-Actor Recording",
      description: "Synchronize unlimited performers with frame-perfect accuracy for team-based scenes.",
      icon: Users
    },
    {
      title: "AI-Powered Tools",
      description: "Script breakdown, scene generation, auto-retargeting, and adaptive learning systems.",
      icon: Brain
    },
    {
      title: "Game Engine Integration",
      description: "Direct export to Unity and Unreal with animation controllers, blend trees, and state machines.",
      icon: Code
    },
    {
      title: "Multi-Language Support",
      description: "AI-powered lip sync in English, Mandarin, Hindi, Spanish, and Arabic with cultural adaptation.",
      icon: Languages
    },
    {
      title: "Professional Safety",
      description: "Industrial training simulations, hazard recognition, and emergency response protocols.",
      icon: Shield
    },
    {
      title: "Platform Optimization",
      description: "Format and optimize content for Instagram, TikTok, YouTube, and all major social platforms.",
      icon: Globe
    },
    {
      title: "Rapid Turnaround",
      description: "Create professional animations in 24-72 hours with unlimited revisions and iterations.",
      icon: Clock
    },
    {
      title: "Custom Branding",
      description: "Match brand colors, style guides, and visual identity with custom templates and presets.",
      icon: Palette
    },
    {
      title: "Virtual Labs",
      description: "Interactive physics, anatomy, chemistry, and engineering simulations with real-time feedback.",
      icon: TestTube2
    },
    {
      title: "VR Full-Body Tracking",
      description: "Complete inverse kinematics with hand, foot, head, and eye tracking for immersive experiences.",
      icon: Hand
    },
    {
      title: "Real-Time Streaming",
      description: "Low-latency motion data streaming under 20ms for live events and responsive applications.",
      icon: Radio
    }
  ]

  const technicalSpecs = [
    { label: "Tracking Accuracy", value: "98.5%" },
    { label: "Body Joints", value: "24-256" },
    { label: "Frame Rate", value: "24-120 FPS" },
    { label: "Blend Shapes", value: "52" },
    { label: "Processing Speed", value: "5x Real-time" },
    { label: "Latency", value: "< 20ms" },
    { label: "Export Formats", value: "FBX, BVH, JSON, Alembic, USD" },
    { label: "Platform Support", value: "Unity, Unreal, Maya, Blender+" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary animate-pulse-glow">
              <Sparkles className="w-4 h-4" />
              AI-Powered Motion Capture
            </div>
            
            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Transform{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                moTION
              </span>
              {" "}into{" "}
              <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                capTURE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Extract motion data from video, rig 3D models, and create stunning animations with cutting-edge AI technology
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/upload">
                <Button size="lg" className="gap-2 text-lg px-8 py-6 glow-cyan group">
                  <Video className="w-5 h-5 group-hover:animate-pulse" />
                  Start Capturing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              {[
                { value: "99.9%", label: "Accuracy" },
                { value: "10x", label: "Faster" },
                { value: "50K+", label: "Captures" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-card shadow-2xl">
              {/* Placeholder for demo video */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background cyber-grid">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="inline-flex p-6 rounded-full bg-primary/10 border border-primary/20">
                      <Play className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-lg font-medium text-muted-foreground">
                      Demo Video Coming Soon
                    </p>
                  </div>
                </div>
                
                {/* Scan line effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent h-20 animate-scan-line" />
                </div>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=675&fit=crop" 
                alt="Motion capture demo"
                className="w-full h-full object-cover opacity-40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional motion capture technology powered by advanced AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {coreFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Industry Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized features for every creative industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {industryFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="p-6 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-all group">
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
                    feature.color === "primary" ? "bg-primary/10 text-primary" :
                    feature.color === "secondary" ? "bg-secondary/10 text-secondary" :
                    "bg-accent/10 text-accent"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade features for professional productions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {advancedCapabilities.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="p-5 rounded-lg bg-card border border-border hover:border-accent/50 transition-all group">
                  <Icon className="w-8 h-8 mb-3 text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical Specifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-leading performance and compatibility
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="p-6 rounded-lg bg-card border border-border text-center">
                <p className="text-sm text-muted-foreground mb-2">{spec.label}</p>
                <p className="text-2xl font-bold text-primary">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple three-step process from video to motion capture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Upload Video",
                description: "Upload your video content with the motion you want to capture. Supports all major video formats."
              },
              {
                step: "02",
                title: "AI Processing",
                description: "Our AI analyzes the video, extracts motion data, and creates a rigged 3D model automatically."
              },
              {
                step: "03",
                title: "Export & Use",
                description: "Download your motion capture data and rigged model in your preferred format for any project."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold glow-cyan">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Start Capturing?
            </h2>
            <p className="text-xl text-muted-foreground">
              Upload your first video and experience the future of motion capture technology
            </p>
            <Link href="/upload">
              <Button size="lg" className="gap-2 text-lg px-8 py-6 glow-cyan group">
                <Video className="w-5 h-5 group-hover:animate-pulse" />
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 moTION capTURE. Powered by AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}