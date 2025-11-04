"use client"

import { Navigation } from "@/components/Navigation"
import { MotionCard } from "@/components/MotionCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { 
  Headset,
  Zap,
  CheckCircle2,
  ArrowRight,
  Globe,
  Users,
  TrendingUp,
  Radio,
  Layers,
  Sparkles,
  Gamepad2,
  Eye,
  Hand,
  Radar,
  Volume2,
  Camera,
  RefreshCw,
  Maximize2,
  Waves
} from "lucide-react"

export default function VRUseCasePage() {
  const features = [
    {
      icon: Hand,
      title: "Full-Body IK Solving",
      description: "Complete inverse kinematics for natural full-body movement with hand, foot, and head tracking integration.",
      color: "accent"
    },
    {
      icon: Radio,
      title: "Real-Time Streaming",
      description: "Low-latency motion data streaming under 20ms for responsive VR experiences and live events.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Avatar Customization",
      description: "Dynamic avatar rigging with customizable body proportions, clothing, and accessories.",
      color: "secondary"
    },
    {
      icon: Eye,
      title: "Eye & Face Tracking",
      description: "Precise eye gaze and facial expression tracking for realistic social VR interactions.",
      color: "accent"
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Support for Meta Quest, HTC Vive, PlayStation VR2, Valve Index, and more.",
      color: "primary"
    },
    {
      icon: Layers,
      title: "Metaverse Ready",
      description: "Compatible with major metaverse platforms including VRChat, Rec Room, and custom worlds.",
      color: "secondary"
    }
  ]

  const vrInnovations = [
    {
      icon: Radar,
      title: "Room-Scale Tracking",
      description: "Advanced spatial tracking for full room-scale VR experiences with boundary detection and collision avoidance.",
      color: "primary"
    },
    {
      icon: Volume2,
      title: "Spatial Audio Sync",
      description: "3D spatial audio positioning synchronized with avatar lip-sync and head movements for immersive presence.",
      color: "secondary"
    },
    {
      icon: Waves,
      title: "Haptic Feedback",
      description: "Real-time haptic response integration with motion data for enhanced physical interaction feedback.",
      color: "accent"
    },
    {
      icon: Camera,
      title: "Virtual Camera",
      description: "Dynamic virtual camera controls for content creation, live streaming, and cinematic VR recordings.",
      color: "primary"
    },
    {
      icon: RefreshCw,
      title: "Multi-User Sync",
      description: "Synchronized multi-user motion capture for collaborative VR spaces with sub-frame accuracy.",
      color: "secondary"
    },
    {
      icon: Maximize2,
      title: "360° Movement",
      description: "Complete 360-degree motion tracking with automatic locomotion blending and transition smoothing.",
      color: "accent"
    }
  ]

  const platforms = [
    {
      name: "Meta Quest 2/3/Pro",
      users: "2M+",
      features: ["Hand tracking", "Full-body avatar", "Social VR"],
      performance: "90Hz, Low latency"
    },
    {
      name: "HTC Vive/Focus",
      users: "800K+",
      features: ["Precision tracking", "Enterprise ready", "Multi-user"],
      performance: "120Hz, High fidelity"
    },
    {
      name: "PlayStation VR2",
      users: "1.5M+",
      features: ["Eye tracking", "Haptic feedback", "HDR rendering"],
      performance: "120Hz, Console grade"
    },
    {
      name: "Valve Index",
      users: "600K+",
      features: ["Finger tracking", "Wide FOV", "High refresh"],
      performance: "144Hz, PC VR"
    }
  ]

  const useCaseScenarios = [
    {
      title: "Social VR Platforms",
      description: "Virtual hangouts, events, and communities",
      examples: ["VRChat", "Rec Room", "Horizon Worlds", "AltspaceVR"],
      icon: Users,
      color: "primary"
    },
    {
      title: "Virtual Workspaces",
      description: "Remote collaboration and business meetings",
      examples: ["Spatial", "Immersed", "Engage", "MeetinVR"],
      icon: Globe,
      color: "secondary"
    },
    {
      title: "VR Gaming",
      description: "Multiplayer games and immersive experiences",
      examples: ["Beat Saber", "Population: One", "Echo VR", "Pavlov"],
      icon: Gamepad2,
      color: "accent"
    },
    {
      title: "Virtual Events",
      description: "Concerts, conferences, and live performances",
      examples: ["Wave XR", "VRrOOm", "Engage Events", "MelodyVR"],
      icon: Radio,
      color: "primary"
    }
  ]

  const technicalSpecs = [
    { spec: "Tracking Latency", value: "< 20ms" },
    { spec: "Update Rate", value: "90-144 Hz" },
    { spec: "Skeleton Joints", value: "Up to 256" },
    { spec: "Hand Tracking", value: "21 points per hand" },
    { spec: "Eye Tracking", value: "Bilateral gaze + pupils" },
    { spec: "Facial Capture", value: "52 blend shapes" },
    { spec: "Network Protocol", value: "WebRTC, UDP" },
    { spec: "Platform Support", value: "All major VR headsets" }
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
            <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-accent/10 border-2 border-accent/20">
              <Headset className="w-10 h-10 text-accent" />
            </div>
            <div className="flex-1">
              <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">
                Trending
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Virtual Reality & Metaverse
              </h1>
              <p className="text-xl text-muted-foreground">
                Power immersive VR experiences with full-body tracking, natural facial expressions, and real-time avatar animation. Built for the metaverse generation.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-2xl font-bold">5M+</span>
              </div>
              <p className="text-sm text-muted-foreground">VR Users</p>
            </div>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-2xl font-bold">1M+</span>
              </div>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-secondary" />
                <span className="text-2xl font-bold">&lt;20ms</span>
              </div>
              <p className="text-sm text-muted-foreground">Latency</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-2xl font-bold">97%</span>
              </div>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="features" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="platforms">Platforms</TabsTrigger>
              <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
              <TabsTrigger value="specs">Technical</TabsTrigger>
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

              {/* VR Innovations Section */}
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold">VR Innovations</h2>
                  <Badge className="bg-accent/10 text-accent border-accent/20">New</Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vrInnovations.map((innovation, idx) => {
                    const Icon = innovation.icon
                    const colorMap = {
                      primary: "text-primary",
                      secondary: "text-secondary",
                      accent: "text-accent"
                    }
                    
                    return (
                      <div 
                        key={idx}
                        className="p-6 rounded-lg bg-card border-2 border-border hover:border-accent/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                            <Icon className={`w-5 h-5 ${colorMap[innovation.color as keyof typeof colorMap]}`} />
                          </div>
                          <h3 className="font-bold text-lg">{innovation.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {innovation.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <MotionCard
                title="Advanced Avatar Features"
                description="Next-generation avatar technology"
                icon={Sparkles}
                glowColor="magenta"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <Hand className="w-6 h-6 mb-3 text-accent" />
                    <h4 className="font-semibold mb-2">Hand Gestures</h4>
                    <p className="text-sm text-muted-foreground">21-point finger tracking for natural hand expressions</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <Eye className="w-6 h-6 mb-3 text-primary" />
                    <h4 className="font-semibold mb-2">Eye Contact</h4>
                    <p className="text-sm text-muted-foreground">Bilateral eye tracking for realistic social presence</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <Users className="w-6 h-6 mb-3 text-secondary" />
                    <h4 className="font-semibold mb-2">Body Language</h4>
                    <p className="text-sm text-muted-foreground">Full-body IK for natural posture and movement</p>
                  </div>
                </div>
              </MotionCard>
            </TabsContent>

            {/* Platforms Tab */}
            <TabsContent value="platforms" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {platforms.map((platform, idx) => (
                  <MotionCard
                    key={idx}
                    title={platform.name}
                    description={platform.performance}
                    icon={Headset}
                    glowColor={idx % 3 === 0 ? "cyan" : idx % 3 === 1 ? "purple" : "magenta"}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-accent/10 text-accent border-accent/20">
                          {platform.users} Active Users
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {platform.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </MotionCard>
                ))}
              </div>

              <div className="p-6 rounded-lg border-2 border-accent/20 bg-accent/5 text-center">
                <Headset className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">Don't See Your Platform?</h3>
                <p className="text-muted-foreground mb-4">
                  We support all major VR headsets and metaverse platforms. Contact us for custom integration.
                </p>
                <Button variant="outline">
                  Request Platform Support
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            {/* Use Cases Tab */}
            <TabsContent value="use-cases" className="space-y-6">
              {useCaseScenarios.map((scenario, idx) => {
                const Icon = scenario.icon
                
                return (
                  <MotionCard
                    key={idx}
                    title={scenario.title}
                    description={scenario.description}
                    icon={scenario.icon}
                    glowColor={scenario.color === "primary" ? "cyan" : scenario.color === "secondary" ? "purple" : "magenta"}
                  >
                    <div className="flex flex-wrap gap-2">
                      {scenario.examples.map((example, eidx) => (
                        <Badge key={eidx} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </MotionCard>
                )
              })}

              <MotionCard
                title="Start Your VR Project"
                description="Experience immersive motion capture for VR"
                icon={Headset}
                glowColor="magenta"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="flex-1">
                    <Link href="/upload">
                      Create VR Avatar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="flex-1">
                    <Link href="/results">
                      View VR Demo
                    </Link>
                  </Button>
                </div>
              </MotionCard>
            </TabsContent>

            {/* Technical Specs Tab */}
            <TabsContent value="specs" className="space-y-6">
              <MotionCard
                title="Technical Specifications"
                description="Real-time performance metrics"
                icon={Zap}
                glowColor="cyan"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {technicalSpecs.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <span className="font-semibold">{item.spec}</span>
                      <Badge variant="outline">{item.value}</Badge>
                    </div>
                  ))}
                </div>
              </MotionCard>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MotionCard
                  title="Performance Optimization"
                  icon={Zap}
                  glowColor="purple"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Tracking Accuracy</span>
                        <span className="text-sm font-semibold">98.5%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-accent to-primary w-[98.5%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Network Efficiency</span>
                        <span className="text-sm font-semibold">95%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary w-[95%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Frame Rate Stability</span>
                        <span className="text-sm font-semibold">99%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-secondary to-accent w-[99%]" />
                      </div>
                    </div>
                  </div>
                </MotionCard>

                <MotionCard
                  title="Network Requirements"
                  icon={Radio}
                  glowColor="magenta"
                >
                  <div className="space-y-3">
                    {[
                      { label: "Minimum Bandwidth", value: "5 Mbps" },
                      { label: "Recommended Bandwidth", value: "25 Mbps" },
                      { label: "Latency Target", value: "< 20ms" },
                      { label: "Jitter Tolerance", value: "< 5ms" },
                      { label: "Packet Loss", value: "< 0.1%" }
                    ].map((req, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
                        <span className="text-sm">{req.label}</span>
                        <Badge className="bg-accent/10 text-accent border-accent/20">
                          {req.value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </MotionCard>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}