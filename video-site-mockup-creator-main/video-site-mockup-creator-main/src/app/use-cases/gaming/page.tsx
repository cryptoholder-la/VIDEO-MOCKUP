"use client"

import { Navigation } from "@/components/Navigation"
import { MotionCard } from "@/components/MotionCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { 
  Gamepad2,
  Zap,
  CheckCircle2,
  ArrowRight,
  Download,
  Code,
  Sparkles,
  Target,
  Users,
  TrendingUp,
  Clock,
  Shield,
  Cpu,
  Layers,
  Play,
  Swords,
  Mountain,
  Film,
  Heart,
  Trophy,
  Wrench,
  Boxes,
  Footprints,
  Brain,
  Wand2,
  PenTool,
  FileCode
} from "lucide-react"

export default function GamingUseCasePage() {
  const features = [
    {
      icon: Zap,
      title: "Real-Time Retargeting",
      description: "Instantly apply motion capture to any rigged character with automatic bone mapping and constraint solving.",
      color: "primary"
    },
    {
      icon: Code,
      title: "Unity & Unreal Ready",
      description: "Direct export to game engines with optimized animation clips, blend trees, and state machines.",
      color: "secondary"
    },
    {
      icon: Target,
      title: "Combat Animations",
      description: "Specialized action sequences including melee combat, ranged attacks, dodges, and special moves.",
      color: "accent"
    },
    {
      icon: Layers,
      title: "Animation Layering",
      description: "Blend multiple motion capture takes with procedural animations for dynamic gameplay.",
      color: "primary"
    },
    {
      icon: Cpu,
      title: "Performance Optimized",
      description: "LOD support and frame reduction for mobile games without sacrificing quality.",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Multi-Character Sync",
      description: "Capture and synchronize multiple actors for cooperative actions and cinematic sequences.",
      color: "accent"
    }
  ]

  const workflows = [
    {
      step: "1",
      title: "Upload Gameplay Video",
      description: "Record your actor performing game actions - combat, traversal, emotes, and interactions.",
      icon: Play
    },
    {
      step: "2",
      title: "Select Character Rig",
      description: "Choose from humanoid, creature, or custom rigs. We support standard Unity/Unreal skeletons.",
      icon: Gamepad2
    },
    {
      step: "3",
      title: "Configure Export",
      description: "Set animation compression, frame rate, and export format optimized for your target platform.",
      icon: Code
    },
    {
      step: "4",
      title: "Integrate & Test",
      description: "Download animation clips and import directly into your game engine with full retargeting support.",
      icon: Download
    }
  ]

  const gameTemplates = [
    {
      icon: Swords,
      title: "Action RPG Template",
      description: "Complete animation set for RPG characters",
      animations: ["Combat combos", "Magic casting", "Item usage", "Idle variations"],
      color: "primary"
    },
    {
      icon: Target,
      title: "FPS Character Template",
      description: "First-person shooter animation library",
      animations: ["Weapon handling", "Reload sequences", "Cover transitions", "Melee attacks"],
      color: "secondary"
    },
    {
      icon: Trophy,
      title: "Fighting Game Template",
      description: "Competitive fighting game movesets",
      animations: ["Light/Heavy attacks", "Special moves", "Blocks & parries", "Victory poses"],
      color: "accent"
    },
    {
      icon: Mountain,
      title: "Platformer Template",
      description: "Dynamic platforming animations",
      animations: ["Jump variations", "Wall climbing", "Ledge grabs", "Roll & slide"],
      color: "primary"
    },
    {
      icon: Users,
      title: "Sports Game Template",
      description: "Athletic movements and sports actions",
      animations: ["Running cycles", "Jumping", "Throwing", "Celebration emotes"],
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Social Game Template",
      description: "Expressive character interactions",
      animations: ["Emotes", "Dancing", "Waving", "Sitting/Standing"],
      color: "accent"
    }
  ]

  const sceneTypes = [
    {
      icon: Swords,
      title: "Combat Scenes",
      description: "Battle and action sequences",
      features: ["Melee & ranged combat", "Combo attacks", "Defensive moves", "Finishers"],
      color: "primary"
    },
    {
      icon: Mountain,
      title: "Exploration & Traversal",
      description: "Movement and navigation",
      features: ["Walk/run cycles", "Climbing", "Swimming", "Parkour moves"],
      color: "secondary"
    },
    {
      icon: Film,
      title: "Cinematic Cutscenes",
      description: "Story-driven sequences",
      features: ["Dialogue animations", "Emotional expressions", "Gestures", "Camera-aware poses"],
      color: "accent"
    },
    {
      icon: Users,
      title: "Multiplayer Interactions",
      description: "Social and cooperative actions",
      features: ["Team emotes", "Trade animations", "High-fives", "Group poses"],
      color: "primary"
    },
    {
      icon: Wrench,
      title: "Interactive Objects",
      description: "Environmental interactions",
      features: ["Door opening", "Item pickup", "Lever pulling", "Button pressing"],
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Idle & Ambient",
      description: "Background character behaviors",
      features: ["Breathing cycles", "Weight shifts", "Looking around", "Fidget animations"],
      color: "accent"
    }
  ]

  const advancedFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Motion Blending",
      description: "Automatically blend between animations for seamless transitions using machine learning.",
      color: "primary"
    },
    {
      icon: Wand2,
      title: "Procedural Animation",
      description: "Generate infinite variations from base animations with procedural noise and IK systems.",
      color: "secondary"
    },
    {
      icon: Boxes,
      title: "Physics Integration",
      description: "Ragdoll systems, cloth simulation, and physics-driven secondary motion.",
      color: "accent"
    },
    {
      icon: PenTool,
      title: "Character Customization",
      description: "Support for different body types, proportions, and skeletal variations with auto-retargeting.",
      color: "primary"
    },
    {
      icon: Footprints,
      title: "Foot IK & Ground Adaptation",
      description: "Automatic foot placement on uneven terrain with procedural IK solving.",
      color: "secondary"
    },
    {
      icon: FileCode,
      title: "Animation State Machines",
      description: "Export ready-to-use state machines for Unity Animator and Unreal Animation Blueprints.",
      color: "accent"
    }
  ]

  const caseStudies = [
    {
      game: "Shadow Legends RPG",
      studio: "Nexus Studios",
      result: "Reduced animation production time by 75%",
      stat: "500+ animations",
      description: "AAA RPG with 50+ unique character models and complex combat system."
    },
    {
      game: "Mobile Battle Arena",
      studio: "Pixel Forge",
      result: "Launched 3 months ahead of schedule",
      stat: "200+ characters",
      description: "Fast-paced mobile game with optimized animations for 60 FPS gameplay."
    },
    {
      game: "VR Fighting Championship",
      studio: "ImmersiveWorks",
      result: "99.9% animation accuracy for VR",
      stat: "1M+ downloads",
      description: "Full-body tracking for immersive VR fighting with realistic movements."
    }
  ]

  const technicalSpecs = [
    { label: "Supported Skeletons", value: "Humanoid, Creature, Custom" },
    { label: "Frame Rate", value: "24-120 FPS" },
    { label: "Export Formats", value: "FBX, BVH, Alembic, USD" },
    { label: "Bone Count", value: "Up to 256 joints" },
    { label: "Animation Clips", value: "Unlimited per project" },
    { label: "Retargeting", value: "Automatic IK/FK solving" },
    { label: "Blend Shapes", value: "52 facial expressions" },
    { label: "Performance", value: "Mobile to PC optimization" }
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
            <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-primary/10 border-2 border-primary/20">
              <Gamepad2 className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1">
              <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                Most Popular
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Gaming & Game Development
              </h1>
              <p className="text-xl text-muted-foreground">
                Professional motion capture for AAA games, indie studios, and mobile gaming. Create lifelike character animations with real-time retargeting and game engine integration.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-2xl font-bold">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Games Shipped</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-secondary" />
                <span className="text-2xl font-bold">120+</span>
              </div>
              <p className="text-sm text-muted-foreground">Game Studios</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-2xl font-bold">75%</span>
              </div>
              <p className="text-sm text-muted-foreground">Time Saved</p>
            </div>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-2xl font-bold">98%</span>
              </div>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="features" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="workflow">Workflow</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="specs">Technical Specs</TabsTrigger>
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
                title="Game Engine Integration"
                description="Seamless workflow with popular game engines"
                icon={Code}
                glowColor="purple"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4 text-primary" />
                      Unity Integration
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Humanoid & Generic rig support</li>
                      <li>• Animator Controller setup</li>
                      <li>• Animation events & curves</li>
                      <li>• Root motion configuration</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4 text-secondary" />
                      Unreal Engine Integration
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Control Rig retargeting</li>
                      <li>• Animation Blueprint ready</li>
                      <li>• Motion Matching support</li>
                      <li>• Full Body IK integration</li>
                    </ul>
                  </div>
                </div>
              </MotionCard>
            </TabsContent>

            {/* Workflow Tab */}
            <TabsContent value="workflow" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {workflows.map((workflow, idx) => {
                  const Icon = workflow.icon
                  return (
                    <div key={idx} className="flex gap-6 p-6 rounded-lg border-2 border-border bg-card hover:border-primary/50 transition-all">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 text-2xl font-bold text-primary">
                          {workflow.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-primary" />
                          <h3 className="text-xl font-bold">{workflow.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{workflow.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <MotionCard
                title="Start Your First Game Animation"
                description="Try our platform with a free trial"
                icon={Sparkles}
                glowColor="cyan"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="flex-1">
                    <Link href="/upload">
                      Upload Game Footage
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="flex-1">
                    <Link href="/results">
                      View Demo Results
                    </Link>
                  </Button>
                </div>
              </MotionCard>
            </TabsContent>

            {/* Case Studies Tab */}
            <TabsContent value="case-studies" className="space-y-6">
              {caseStudies.map((study, idx) => (
                <MotionCard
                  key={idx}
                  title={study.game}
                  description={study.description}
                  icon={Gamepad2}
                  glowColor={idx % 3 === 0 ? "cyan" : idx % 3 === 1 ? "purple" : "magenta"}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground mb-1">Studio</p>
                      <p className="font-semibold">{study.studio}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground mb-1">Result</p>
                      <p className="font-semibold text-primary">{study.result}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground mb-1">Scale</p>
                      <p className="font-semibold text-secondary">{study.stat}</p>
                    </div>
                  </div>
                </MotionCard>
              ))}

              <div className="p-6 rounded-lg border-2 border-primary/20 bg-primary/5 text-center">
                <h3 className="text-xl font-bold mb-2">Want to be featured?</h3>
                <p className="text-muted-foreground mb-4">
                  Share your success story and showcase how you're using motion capture in your games.
                </p>
                <Button variant="outline">
                  Submit Your Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            {/* Technical Specs Tab */}
            <TabsContent value="specs" className="space-y-6">
              <MotionCard
                title="Technical Specifications"
                description="Complete technical details for game development"
                icon={Cpu}
                glowColor="purple"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {technicalSpecs.map((spec, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <span className="font-semibold">{spec.label}</span>
                      <Badge variant="outline">{spec.value}</Badge>
                    </div>
                  ))}
                </div>
              </MotionCard>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MotionCard
                  title="Platform Support"
                  icon={Gamepad2}
                  glowColor="cyan"
                >
                  <div className="space-y-3">
                    {[
                      { platform: "PC (Windows/Mac/Linux)", status: "Full Support" },
                      { platform: "PlayStation 5", status: "Full Support" },
                      { platform: "Xbox Series X|S", status: "Full Support" },
                      { platform: "Nintendo Switch", status: "Full Support" },
                      { platform: "Mobile (iOS/Android)", status: "Optimized" },
                      { platform: "VR Platforms", status: "Full Support" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
                        <span className="text-sm font-medium">{item.platform}</span>
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          {item.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </MotionCard>

                <MotionCard
                  title="Performance Metrics"
                  icon={Zap}
                  glowColor="magenta"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Processing Speed</span>
                        <span className="text-sm font-semibold">5x Real-time</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary w-[95%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Animation Accuracy</span>
                        <span className="text-sm font-semibold">98.5%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-secondary to-accent w-[98.5%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">File Size Optimization</span>
                        <span className="text-sm font-semibold">85% Reduced</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-accent to-primary w-[85%]" />
                      </div>
                    </div>
                  </div>
                </MotionCard>
              </div>
            </TabsContent>
          </Tabs>

          {/* Game Templates Section */}
          <div className="mt-16 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Game Templates</h2>
              <Badge className="bg-primary/10 text-primary border-primary/20">Ready to Use</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gameTemplates.map((template, idx) => {
                const Icon = template.icon
                const colorMap = {
                  primary: "border-primary/50 hover:border-primary bg-primary/5",
                  secondary: "border-secondary/50 hover:border-secondary bg-secondary/5",
                  accent: "border-accent/50 hover:border-accent bg-accent/5"
                }
                const iconColorMap = {
                  primary: "bg-primary/10 text-primary",
                  secondary: "bg-secondary/10 text-secondary",
                  accent: "bg-accent/10 text-accent"
                }
                
                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-lg border-2 ${colorMap[template.color as keyof typeof colorMap]} transition-all duration-300`}
                  >
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${iconColorMap[template.color as keyof typeof iconColorMap]} mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{template.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                    <div className="space-y-2">
                      {template.animations.map((anim, animIdx) => (
                        <div key={animIdx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{anim}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Scene Types Section */}
          <div className="mt-16 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Film className="w-6 h-6 text-secondary" />
              <h2 className="text-3xl font-bold">Scene Types & Categories</h2>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">Optimized</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sceneTypes.map((scene, idx) => {
                const Icon = scene.icon
                const colorMap = {
                  primary: "border-primary/50 hover:border-primary",
                  secondary: "border-secondary/50 hover:border-secondary",
                  accent: "border-accent/50 hover:border-accent"
                }
                const iconColorMap = {
                  primary: "bg-primary/10 text-primary",
                  secondary: "bg-secondary/10 text-secondary",
                  accent: "bg-accent/10 text-accent"
                }
                
                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-lg border-2 bg-card ${colorMap[scene.color as keyof typeof colorMap]} transition-all duration-300`}
                  >
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${iconColorMap[scene.color as keyof typeof iconColorMap]} mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{scene.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{scene.description}</p>
                    <div className="space-y-2">
                      {scene.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Advanced Features Section */}
          <div className="mt-16 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold">Advanced Gaming Features</h2>
              <Badge className="bg-accent/10 text-accent border-accent/20">Pro</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advancedFeatures.map((feature, idx) => {
                const Icon = feature.icon
                const colorMap = {
                  primary: "bg-primary/10 border-primary/20 text-primary",
                  secondary: "bg-secondary/10 border-secondary/20 text-secondary",
                  accent: "bg-accent/10 border-accent/20 text-accent"
                }
                
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-lg border-2 border-border bg-card hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${colorMap[feature.color as keyof typeof colorMap]} border-2 flex-shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <MotionCard
              title="Ready to Level Up Your Game Development?"
              description="Start creating professional game animations today"
              icon={Gamepad2}
              glowColor="cyan"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="flex-1">
                  <Link href="/upload">
                    Start Creating
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1">
                  <Link href="/results">
                    View Examples
                  </Link>
                </Button>
              </div>
            </MotionCard>
          </div>
        </div>
      </div>
    </div>
  )
}