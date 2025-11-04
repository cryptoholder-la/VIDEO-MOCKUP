"use client"

import { Navigation } from "@/components/Navigation"
import { MotionCard } from "@/components/MotionCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { 
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Users,
  TrendingUp,
  BookOpen,
  Sparkles,
  Target,
  Activity,
  Heart,
  Microscope,
  Shield,
  Brain,
  Dumbbell,
  Building2,
  FlaskConical,
  Stethoscope,
  Hammer,
  Music,
  Languages,
  Calculator,
  Atom,
  Dna,
  Zap,
  BarChart3,
  FileText,
  Video,
  Award,
  Clock,
  Eye,
  Cpu,
  Network,
  BookmarkCheck,
  ClipboardCheck,
  LineChart,
  PieChart,
  Lightbulb,
  Puzzle,
  Beaker,
  TestTube,
  Cog,
  Radio,
  MessageSquare,
  Users2,
  Ruler
} from "lucide-react"

export default function EducationUseCasePage() {
  const features = [
    {
      icon: Microscope,
      title: "Medical Simulations",
      description: "High-fidelity surgical procedures, patient examinations, and emergency response training with accurate anatomy.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Safety Training",
      description: "Industrial safety protocols, hazard recognition, and emergency evacuation procedures in risk-free environments.",
      color: "secondary"
    },
    {
      icon: Dumbbell,
      title: "Sports Analysis",
      description: "Biomechanical analysis, technique refinement, and injury prevention for athletes and coaches.",
      color: "accent"
    },
    {
      icon: Brain,
      title: "Cognitive Learning",
      description: "Interactive demonstrations for complex concepts in physics, biology, chemistry, and engineering.",
      color: "primary"
    },
    {
      icon: Activity,
      title: "Real-Time Assessment",
      description: "Automated performance evaluation with instant feedback and progress tracking for learners.",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Multi-user training scenarios for team-based exercises and peer learning experiences.",
      color: "accent"
    }
  ]

  const learningTemplates = [
    {
      icon: Stethoscope,
      title: "Medical & Healthcare",
      category: "Clinical Training",
      scenarios: ["Surgical Procedures", "Patient Examination", "CPR & First Aid", "Physical Therapy"],
      duration: "15-45 min",
      difficulty: "Advanced",
      color: "primary"
    },
    {
      icon: FlaskConical,
      title: "Laboratory Science",
      category: "STEM Education",
      scenarios: ["Chemistry Experiments", "Biology Dissection", "Physics Demonstrations", "Equipment Handling"],
      duration: "20-60 min",
      difficulty: "Intermediate",
      color: "secondary"
    },
    {
      icon: Hammer,
      title: "Technical & Vocational",
      category: "Skills Training",
      scenarios: ["Tool Operation", "Assembly Procedures", "Quality Inspection", "Safety Protocols"],
      duration: "10-30 min",
      difficulty: "Beginner",
      color: "accent"
    },
    {
      icon: Music,
      title: "Performing Arts",
      category: "Creative Learning",
      scenarios: ["Dance Choreography", "Musical Performance", "Stage Movement", "Expression Techniques"],
      duration: "15-45 min",
      difficulty: "All Levels",
      color: "primary"
    },
    {
      icon: Languages,
      title: "Language & Communication",
      category: "Soft Skills",
      scenarios: ["Sign Language", "Public Speaking", "Body Language", "Presentation Skills"],
      duration: "10-30 min",
      difficulty: "Beginner",
      color: "secondary"
    },
    {
      icon: Dumbbell,
      title: "Physical Education",
      category: "Sports & Fitness",
      scenarios: ["Exercise Form", "Athletic Techniques", "Yoga & Stretching", "Team Drills"],
      duration: "5-20 min",
      difficulty: "All Levels",
      color: "accent"
    }
  ]

  const sceneTypes = [
    {
      icon: Microscope,
      title: "Precision Tasks",
      description: "High-accuracy capture for detailed procedures",
      specs: ["Sub-millimeter tracking", "120 FPS capture", "Hand/finger detection"],
      applications: ["Surgery", "Lab work", "Fine motor skills"],
      color: "primary"
    },
    {
      icon: Users2,
      title: "Group Dynamics",
      description: "Multi-person interaction tracking",
      specs: ["Up to 12 subjects", "Role identification", "Interaction mapping"],
      applications: ["Team training", "Collaborative exercises", "Group assessments"],
      color: "secondary"
    },
    {
      icon: Activity,
      title: "Physical Performance",
      description: "Full-body motion analysis",
      specs: ["360° coverage", "Joint angle calculation", "Force estimation"],
      applications: ["Sports training", "Ergonomics", "Rehabilitation"],
      color: "accent"
    },
    {
      icon: Eye,
      title: "Micro-Expression Learning",
      description: "Facial & emotional analysis",
      specs: ["52-point facial tracking", "Emotion recognition", "Gaze direction"],
      applications: ["Communication skills", "Psychology", "Interview training"],
      color: "primary"
    },
    {
      icon: Ruler,
      title: "Spatial Awareness",
      description: "Environmental interaction capture",
      specs: ["3D space mapping", "Object interaction", "Safety distance monitoring"],
      applications: ["Safety training", "Equipment operation", "Navigation skills"],
      color: "secondary"
    },
    {
      icon: Clock,
      title: "Temporal Analysis",
      description: "Time-based performance evaluation",
      specs: ["Timing precision", "Sequence verification", "Pace analysis"],
      applications: ["Skill timing", "Procedure efficiency", "Reaction training"],
      color: "accent"
    }
  ]

  const aiTeachingTools = [
    {
      icon: Brain,
      title: "Adaptive Learning AI",
      tier: "Pro",
      description: "Personalized difficulty adjustment based on student performance",
      features: [
        "Real-time skill level detection",
        "Dynamic exercise generation",
        "Learning curve optimization",
        "Personalized feedback loops"
      ],
      color: "primary"
    },
    {
      icon: MessageSquare,
      title: "Virtual Teaching Assistant",
      tier: "Studio",
      description: "AI-powered instructor that guides students through exercises",
      features: [
        "Natural language coaching",
        "Multi-language support",
        "Context-aware hints",
        "Student question answering"
      ],
      color: "secondary"
    },
    {
      icon: BarChart3,
      title: "Performance Prediction",
      tier: "Enterprise",
      description: "Predict student outcomes and identify intervention needs",
      features: [
        "Early warning system",
        "Mastery level forecasting",
        "Risk of failure detection",
        "Intervention recommendations"
      ],
      color: "accent"
    },
    {
      icon: Puzzle,
      title: "Skill Gap Analysis",
      tier: "Pro",
      description: "Identify specific areas needing improvement",
      features: [
        "Competency mapping",
        "Weakness identification",
        "Targeted practice plans",
        "Progress milestone tracking"
      ],
      color: "primary"
    },
    {
      icon: Lightbulb,
      title: "Learning Path Generator",
      tier: "Studio",
      description: "Create custom curricula based on goals and abilities",
      features: [
        "Curriculum auto-generation",
        "Prerequisite detection",
        "Optimal sequence planning",
        "Time-to-mastery estimation"
      ],
      color: "secondary"
    },
    {
      icon: Network,
      title: "Peer Comparison Engine",
      tier: "Enterprise",
      description: "Anonymous benchmarking against similar learners",
      features: [
        "Cohort analytics",
        "Percentile ranking",
        "Best practice identification",
        "Collaborative learning suggestions"
      ],
      color: "accent"
    }
  ]

  const virtualLabs = [
    {
      icon: Atom,
      title: "Physics Simulation Lab",
      experiments: 45,
      description: "Interactive physics experiments with motion analysis",
      topics: ["Mechanics", "Kinematics", "Forces", "Energy", "Momentum", "Projectile Motion"],
      color: "primary"
    },
    {
      icon: Dna,
      title: "Anatomy & Kinesiology",
      experiments: 60,
      description: "Human body movement and biomechanics studies",
      topics: ["Muscle Groups", "Joint Mechanics", "Posture", "Gait Analysis", "Range of Motion", "Injury Prevention"],
      color: "secondary"
    },
    {
      icon: Beaker,
      title: "Chemistry Lab Procedures",
      experiments: 38,
      description: "Safe virtual chemistry lab with technique training",
      topics: ["Titration", "Distillation", "Crystallization", "Safety Protocols", "Equipment Use", "Measurement"],
      color: "accent"
    },
    {
      icon: TestTube,
      title: "Biology Dissection Studio",
      experiments: 25,
      description: "Virtual dissection and biological specimen examination",
      topics: ["Organ Systems", "Tissue Analysis", "Comparative Anatomy", "Tool Handling", "Documentation", "Identification"],
      color: "primary"
    },
    {
      icon: Cog,
      title: "Engineering Workshop",
      experiments: 50,
      description: "Mechanical and electrical engineering practices",
      topics: ["CAD Modeling", "Machinery Operation", "Assembly", "Testing", "Maintenance", "Troubleshooting"],
      color: "secondary"
    },
    {
      icon: Radio,
      title: "Electronics & Circuits Lab",
      experiments: 42,
      description: "Circuit assembly and electronics fundamentals",
      topics: ["Soldering", "Component Testing", "Circuit Design", "Oscilloscope Use", "Multimeter Skills", "Debugging"],
      color: "accent"
    }
  ]

  const assessmentSuite = [
    {
      icon: ClipboardCheck,
      title: "Automated Grading System",
      description: "AI-powered performance evaluation with instant scoring",
      capabilities: [
        "Motion accuracy scoring (0-100%)",
        "Technique adherence verification",
        "Safety compliance checking",
        "Time efficiency metrics"
      ]
    },
    {
      icon: LineChart,
      title: "Progress Tracking Dashboard",
      description: "Comprehensive student development monitoring",
      capabilities: [
        "Skill mastery timeline",
        "Learning velocity analytics",
        "Competency heat maps",
        "Retention curve analysis"
      ]
    },
    {
      icon: PieChart,
      title: "Competency Matrix Builder",
      description: "Create custom assessment rubrics and criteria",
      capabilities: [
        "Multi-dimensional rubrics",
        "Weighted criteria sets",
        "Industry standard alignment",
        "Custom evaluation metrics"
      ]
    },
    {
      icon: Award,
      title: "Certification & Credentialing",
      description: "Issue verified digital badges and certificates",
      capabilities: [
        "Blockchain-verified credentials",
        "Skill-specific badges",
        "Shareable portfolio",
        "Industry recognition"
      ]
    },
    {
      icon: FileText,
      title: "Detailed Performance Reports",
      description: "Generate comprehensive student assessment reports",
      capabilities: [
        "Video evidence inclusion",
        "Comparative analysis",
        "Strengths/weaknesses breakdown",
        "Improvement recommendations"
      ]
    },
    {
      icon: BookmarkCheck,
      title: "Formative Assessment Tools",
      description: "Continuous evaluation during learning process",
      capabilities: [
        "Real-time feedback delivery",
        "Checkpoint assessments",
        "Mastery-based progression",
        "Adaptive difficulty scaling"
      ]
    }
  ]

  const sectors = [
    {
      name: "Medical Education",
      institutions: "80+",
      students: "50K+",
      applications: ["Surgical Training", "Patient Care", "Anatomy Studies", "Emergency Response"],
      icon: Heart,
      color: "primary"
    },
    {
      name: "Industrial Training",
      institutions: "120+",
      students: "100K+",
      applications: ["Safety Protocols", "Equipment Operation", "Quality Control", "Maintenance"],
      icon: Building2,
      color: "secondary"
    },
    {
      name: "Sports Science",
      institutions: "50+",
      students: "25K+",
      applications: ["Biomechanics", "Technique Analysis", "Performance Optimization", "Injury Prevention"],
      icon: Dumbbell,
      color: "accent"
    },
    {
      name: "Academic Research",
      institutions: "100+",
      students: "75K+",
      applications: ["Motion Studies", "Behavioral Research", "Ergonomics", "Kinesiology"],
      icon: Brain,
      color: "primary"
    }
  ]

  const caseStudies = [
    {
      institution: "Johns Hopkins Medical School",
      program: "Virtual Surgical Training",
      result: "95% improvement in procedure accuracy",
      details: "Advanced surgical simulation for minimally invasive procedures",
      students: "500+ medical students",
      duration: "3-year program"
    },
    {
      institution: "MIT Engineering Department",
      program: "Biomechanics Research Lab",
      result: "200+ research papers published",
      details: "Motion analysis for robotics and human movement studies",
      students: "150+ researchers",
      duration: "Ongoing since 2020"
    },
    {
      institution: "Olympic Training Center",
      program: "Athlete Performance Analysis",
      result: "12 Olympic medals attributed",
      details: "Real-time technique optimization for elite athletes",
      students: "100+ olympians",
      duration: "4-year Olympic cycle"
    }
  ]

  const learningOutcomes = [
    { metric: "Knowledge Retention", improvement: "+85%" },
    { metric: "Skill Proficiency", improvement: "+70%" },
    { metric: "Training Time Reduction", improvement: "-60%" },
    { metric: "Error Rate Reduction", improvement: "-75%" },
    { metric: "Student Engagement", improvement: "+90%" },
    { metric: "Assessment Accuracy", improvement: "+80%" }
  ]

  const workflowSteps = [
    { step: "1", title: "Upload Training Video", description: "Record or upload instructional content" },
    { step: "2", title: "AI Annotation", description: "Automatic technique breakdown & labeling" },
    { step: "3", title: "Set Criteria", description: "Define assessment metrics & rubrics" },
    { step: "4", title: "Student Practice", description: "Learners perform and record attempts" },
    { step: "5", title: "Auto-Evaluation", description: "AI compares & scores performance" },
    { step: "6", title: "Feedback Loop", description: "Personalized improvement guidance" }
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
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <div className="flex-1">
              <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                Professional
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Education & Training Solutions
              </h1>
              <p className="text-xl text-muted-foreground">
                Transform education with interactive simulations, real-time performance analysis, and immersive training experiences. From medical schools to sports academies.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-2xl font-bold">350+</span>
              </div>
              <p className="text-sm text-muted-foreground">Training Programs</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-secondary" />
                <span className="text-2xl font-bold">150+</span>
              </div>
              <p className="text-sm text-muted-foreground">Institutions</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap className="w-4 h-4 text-accent" />
                <span className="text-2xl font-bold">250K+</span>
              </div>
              <p className="text-sm text-muted-foreground">Students Trained</p>
            </div>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-2xl font-bold">96%</span>
              </div>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="features" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="scenes">Scene Types</TabsTrigger>
              <TabsTrigger value="ai-tools">AI Tools</TabsTrigger>
              <TabsTrigger value="labs">Virtual Labs</TabsTrigger>
              <TabsTrigger value="assessment">Assessment</TabsTrigger>
              <TabsTrigger value="sectors">Sectors</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
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
                title="Advanced Learning Analytics"
                description="Comprehensive performance tracking and assessment"
                icon={Activity}
                glowColor="purple"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <Target className="w-6 h-6 mb-3 text-primary" />
                    <h4 className="font-semibold mb-2">Performance Metrics</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Motion accuracy tracking</li>
                      <li>• Timing analysis</li>
                      <li>• Error detection</li>
                      <li>• Progress visualization</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <BookOpen className="w-6 h-6 mb-3 text-secondary" />
                    <h4 className="font-semibold mb-2">Automated Feedback</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Real-time corrections</li>
                      <li>• Video playback review</li>
                      <li>• Comparison overlays</li>
                      <li>• Improvement suggestions</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <Users className="w-6 h-6 mb-3 text-accent" />
                    <h4 className="font-semibold mb-2">Instructor Dashboard</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Student progress overview</li>
                      <li>• Cohort comparisons</li>
                      <li>• Custom assessments</li>
                      <li>• Report generation</li>
                    </ul>
                  </div>
                </div>
              </MotionCard>
            </TabsContent>

            {/* Learning Templates Tab */}
            <TabsContent value="templates" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningTemplates.map((template, idx) => {
                  const Icon = template.icon
                  const colorMap = {
                    primary: "bg-primary/10 text-primary border-primary/20",
                    secondary: "bg-secondary/10 text-secondary border-secondary/20",
                    accent: "bg-accent/10 text-accent border-accent/20"
                  }
                  
                  return (
                    <MotionCard
                      key={idx}
                      title={template.title}
                      description={template.category}
                      icon={template.icon}
                      glowColor={template.color === "primary" ? "cyan" : template.color === "secondary" ? "purple" : "magenta"}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge className={colorMap[template.color as keyof typeof colorMap]}>
                            {template.difficulty}
                          </Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {template.duration}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          {template.scenarios.map((scenario, sidx) => (
                            <div key={sidx} className="flex items-center gap-2 p-2 rounded bg-muted/50 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="truncate">{scenario}</span>
                            </div>
                          ))}
                        </div>

                        <Button variant="outline" className="w-full gap-2" size="sm">
                          <Video className="w-4 h-4" />
                          Use Template
                        </Button>
                      </div>
                    </MotionCard>
                  )
                })}
              </div>

              <MotionCard
                title="Custom Template Builder"
                description="Create your own educational templates"
                icon={Sparkles}
                glowColor="cyan"
              >
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Build custom motion capture templates tailored to your specific curriculum needs. 
                    Define assessment criteria, difficulty levels, and learning objectives.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 text-center">
                      <p className="text-2xl font-bold text-primary mb-1">∞</p>
                      <p className="text-xs text-muted-foreground">Custom Templates</p>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary/5 border border-secondary/20 text-center">
                      <p className="text-2xl font-bold text-secondary mb-1">50+</p>
                      <p className="text-xs text-muted-foreground">Template Fields</p>
                    </div>
                    <div className="p-3 rounded-lg bg-accent/5 border border-accent/20 text-center">
                      <p className="text-2xl font-bold text-accent mb-1">100%</p>
                      <p className="text-xs text-muted-foreground">Customizable</p>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 text-center">
                      <p className="text-2xl font-bold text-primary mb-1">24/7</p>
                      <p className="text-xs text-muted-foreground">Availability</p>
                    </div>
                  </div>
                  <Button className="w-full gap-2">
                    <Sparkles className="w-4 h-4" />
                    Build Custom Template
                  </Button>
                </div>
              </MotionCard>
            </TabsContent>

            {/* Scene Types Tab */}
            <TabsContent value="scenes" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sceneTypes.map((scene, idx) => {
                  const Icon = scene.icon
                  const colorMap = {
                    primary: "text-primary",
                    secondary: "text-secondary",
                    accent: "text-accent"
                  }
                  
                  return (
                    <MotionCard
                      key={idx}
                      title={scene.title}
                      description={scene.description}
                      icon={scene.icon}
                      glowColor={scene.color === "primary" ? "cyan" : scene.color === "secondary" ? "purple" : "magenta"}
                    >
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                            Technical Specifications
                          </p>
                          <div className="space-y-2">
                            {scene.specs.map((spec, sidx) => (
                              <div key={sidx} className="flex items-center gap-2 text-sm">
                                <Zap className={`w-4 h-4 ${colorMap[scene.color as keyof typeof colorMap]} flex-shrink-0`} />
                                <span>{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                            Best For
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {scene.applications.map((app, aidx) => (
                              <Badge key={aidx} variant="outline" className="text-xs">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </MotionCard>
                  )
                })}
              </div>

              <MotionCard
                title="Scene Optimization Guide"
                description="Tips for capturing high-quality educational content"
                icon={Target}
                glowColor="purple"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <Eye className="w-6 h-6 mb-3 text-primary" />
                    <h4 className="font-semibold mb-2">Camera Setup</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Multiple angle coverage</li>
                      <li>• Adequate lighting (500+ lux)</li>
                      <li>• Stable mounting</li>
                      <li>• Subject framing</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <Cpu className="w-6 h-6 mb-3 text-secondary" />
                    <h4 className="font-semibold mb-2">Recording Quality</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 1080p minimum resolution</li>
                      <li>• 60 FPS for smooth motion</li>
                      <li>• Clean background</li>
                      <li>• Consistent lighting</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <Activity className="w-6 h-6 mb-3 text-accent" />
                    <h4 className="font-semibold mb-2">Motion Capture</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Clear movement visibility</li>
                      <li>• Proper attire (fitted clothing)</li>
                      <li>• Full body in frame</li>
                      <li>• Minimal occlusion</li>
                    </ul>
                  </div>
                </div>
              </MotionCard>
            </TabsContent>

            {/* AI Teaching Tools Tab */}
            <TabsContent value="ai-tools" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiTeachingTools.map((tool, idx) => {
                  const Icon = tool.icon
                  const tierColors = {
                    Pro: "bg-primary/10 text-primary border-primary/20",
                    Studio: "bg-secondary/10 text-secondary border-secondary/20",
                    Enterprise: "bg-accent/10 text-accent border-accent/20"
                  }
                  
                  return (
                    <MotionCard
                      key={idx}
                      title={tool.title}
                      description={tool.description}
                      icon={tool.icon}
                      glowColor={tool.color === "primary" ? "cyan" : tool.color === "secondary" ? "purple" : "magenta"}
                    >
                      <div className="space-y-4">
                        <Badge className={tierColors[tool.tier as keyof typeof tierColors]}>
                          {tool.tier}
                        </Badge>
                        
                        <div className="space-y-2">
                          {tool.features.map((feature, fidx) => (
                            <div key={fidx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </MotionCard>
                  )
                })}
              </div>

              <MotionCard
                title="AI-Powered Teaching Workflow"
                description="End-to-end intelligent learning system"
                icon={Network}
                glowColor="cyan"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {workflowSteps.map((step, idx) => (
                    <div key={idx} className="text-center space-y-2">
                      <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{step.step}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{step.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionCard>

              <div className="p-6 rounded-lg border-2 border-primary/20 bg-primary/5">
                <div className="flex items-start gap-4">
                  <Cpu className="w-10 h-10 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Enterprise AI Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Deploy our AI teaching tools within your existing Learning Management System (LMS). 
                      Full API access, custom model training, and dedicated support.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm">
                        <BookOpen className="w-4 h-4 mr-2" />
                        API Documentation
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact Sales
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Virtual Labs Tab */}
            <TabsContent value="labs" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {virtualLabs.map((lab, idx) => {
                  const Icon = lab.icon
                  const colorMap = {
                    primary: "text-primary",
                    secondary: "text-secondary",
                    accent: "text-accent"
                  }
                  
                  return (
                    <MotionCard
                      key={idx}
                      title={lab.title}
                      description={lab.description}
                      icon={lab.icon}
                      glowColor={lab.color === "primary" ? "cyan" : lab.color === "secondary" ? "purple" : "magenta"}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            {lab.experiments} Experiments
                          </Badge>
                          <Badge variant="outline">
                            Interactive
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          {lab.topics.map((topic, tidx) => (
                            <div key={tidx} className="flex items-center gap-2 p-2 rounded bg-muted/50 text-sm">
                              <Calculator className={`w-4 h-4 ${colorMap[lab.color as keyof typeof colorMap]} flex-shrink-0`} />
                              <span className="truncate">{topic}</span>
                            </div>
                          ))}
                        </div>

                        <Button variant="outline" className="w-full gap-2" size="sm">
                          <Sparkles className="w-4 h-4" />
                          Launch Virtual Lab
                        </Button>
                      </div>
                    </MotionCard>
                  )
                })}
              </div>

              <MotionCard
                title="Virtual Lab Platform Features"
                description="Comprehensive interactive learning environment"
                icon={FlaskConical}
                glowColor="purple"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-lg bg-card border border-border text-center">
                    <Brain className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold mb-1">Safe Learning</p>
                    <p className="text-xs text-muted-foreground">No physical risks or equipment damage</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-secondary" />
                    <p className="font-semibold mb-1">24/7 Access</p>
                    <p className="text-xs text-muted-foreground">Learn anytime, anywhere</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-accent" />
                    <p className="font-semibold mb-1">Unlimited Retries</p>
                    <p className="text-xs text-muted-foreground">Practice until perfect</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border text-center">
                    <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold mb-1">Instant Feedback</p>
                    <p className="text-xs text-muted-foreground">Real-time performance evaluation</p>
                  </div>
                </div>
              </MotionCard>

              <div className="p-6 rounded-lg border-2 border-secondary/20 bg-secondary/5">
                <div className="flex items-start gap-4">
                  <TestTube className="w-10 h-10 text-secondary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Custom Lab Development</h3>
                    <p className="text-muted-foreground mb-4">
                      Need a specialized virtual lab for your institution? Our team can develop custom 
                      interactive simulations tailored to your specific curriculum and learning objectives.
                    </p>
                    <Button variant="outline">
                      Request Custom Lab
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Assessment Suite Tab */}
            <TabsContent value="assessment" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {assessmentSuite.map((tool, idx) => {
                  const Icon = tool.icon
                  
                  return (
                    <MotionCard
                      key={idx}
                      title={tool.title}
                      description={tool.description}
                      icon={tool.icon}
                      glowColor={idx % 3 === 0 ? "cyan" : idx % 3 === 1 ? "purple" : "magenta"}
                    >
                      <div className="space-y-2">
                        {tool.capabilities.map((capability, cidx) => (
                          <div key={cidx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </MotionCard>
                  )
                })}
              </div>

              <MotionCard
                title="Assessment Analytics Dashboard"
                description="Comprehensive performance visualization and reporting"
                icon={BarChart3}
                glowColor="cyan"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
                    <LineChart className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <p className="text-3xl font-bold mb-1">98%</p>
                    <p className="text-sm text-muted-foreground">Assessment Accuracy</p>
                  </div>
                  <div className="p-6 rounded-lg bg-secondary/5 border border-secondary/20 text-center">
                    <Clock className="w-10 h-10 mx-auto mb-3 text-secondary" />
                    <p className="text-3xl font-bold mb-1">< 2s</p>
                    <p className="text-sm text-muted-foreground">Grading Time</p>
                  </div>
                  <div className="p-6 rounded-lg bg-accent/5 border border-accent/20 text-center">
                    <Award className="w-10 h-10 mx-auto mb-3 text-accent" />
                    <p className="text-3xl font-bold mb-1">100K+</p>
                    <p className="text-sm text-muted-foreground">Assessments/Month</p>
                  </div>
                </div>
              </MotionCard>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MotionCard
                  title="For Students"
                  icon={Users}
                  glowColor="purple"
                >
                  <div className="space-y-3">
                    {[
                      "Instant performance feedback",
                      "Visual progress tracking",
                      "Personalized improvement tips",
                      "Skill mastery indicators",
                      "Peer comparison (anonymous)",
                      "Achievement badges & certificates"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </MotionCard>

                <MotionCard
                  title="For Instructors"
                  icon={BookOpen}
                  glowColor="magenta"
                >
                  <div className="space-y-3">
                    {[
                      "Automated grading & scoring",
                      "Class performance analytics",
                      "Individual student insights",
                      "Curriculum effectiveness metrics",
                      "Time-saving assessment tools",
                      "Export-ready reports"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </MotionCard>
              </div>
            </TabsContent>

            {/* Sectors Tab */}
            <TabsContent value="sectors" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sectors.map((sector, idx) => {
                  const Icon = sector.icon
                  return (
                    <MotionCard
                      key={idx}
                      title={sector.name}
                      description={`${sector.institutions} institutions, ${sector.students} students`}
                      icon={sector.icon}
                      glowColor={sector.color === "primary" ? "cyan" : sector.color === "secondary" ? "purple" : "magenta"}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            {sector.institutions} Institutions
                          </Badge>
                          <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                            {sector.students} Students
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {sector.applications.map((app, aidx) => (
                            <div key={aidx} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                              <span>{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </MotionCard>
                  )
                })}
              </div>

              <div className="p-6 rounded-lg border-2 border-primary/20 bg-primary/5 text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Educational Institution Partnership</h3>
                <p className="text-muted-foreground mb-4">
                  Special pricing and support for educational institutions and non-profit organizations.
                </p>
                <Button variant="outline">
                  Request Academic Pricing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            {/* Case Studies Tab */}
            <TabsContent value="case-studies" className="space-y-6">
              {caseStudies.map((study, idx) => (
                <MotionCard
                  key={idx}
                  title={study.institution}
                  description={study.details}
                  icon={GraduationCap}
                  glowColor={idx % 3 === 0 ? "cyan" : idx % 3 === 1 ? "purple" : "magenta"}
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground mb-1">Program</p>
                      <p className="font-semibold">{study.program}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground mb-1">Result</p>
                      <p className="font-semibold text-primary">{study.result}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground mb-1">Scale</p>
                      <p className="font-semibold text-secondary">{study.students}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground mb-1">Duration</p>
                      <p className="font-semibold text-accent">{study.duration}</p>
                    </div>
                  </div>
                </MotionCard>
              ))}

              <MotionCard
                title="Start Your Training Program"
                description="Transform your educational curriculum with motion capture"
                icon={Sparkles}
                glowColor="cyan"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="flex-1">
                    <Link href="/upload">
                      Create Training Module
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="flex-1">
                    <Link href="/results">
                      View Education Demo
                    </Link>
                  </Button>
                </div>
              </MotionCard>
            </TabsContent>

            {/* Outcomes Tab */}
            <TabsContent value="outcomes" className="space-y-6">
              <MotionCard
                title="Learning Outcomes & Impact"
                description="Proven results across educational institutions"
                icon={TrendingUp}
                glowColor="purple"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{outcome.metric}</span>
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          {outcome.improvement}
                        </Badge>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          style={{ width: `${Math.abs(parseInt(outcome.improvement))}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </MotionCard>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MotionCard
                  title="Student Benefits"
                  icon={Users}
                  glowColor="cyan"
                >
                  <div className="space-y-3">
                    {[
                      "Hands-on practice in safe environment",
                      "Immediate performance feedback",
                      "Self-paced learning progression",
                      "Detailed progress tracking",
                      "Repeatable practice scenarios",
                      "Reduced training anxiety"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </MotionCard>

                <MotionCard
                  title="Instructor Benefits"
                  icon={BookOpen}
                  glowColor="magenta"
                >
                  <div className="space-y-3">
                    {[
                      "Automated performance assessment",
                      "Real-time student monitoring",
                      "Data-driven teaching insights",
                      "Scalable training delivery",
                      "Standardized evaluation criteria",
                      "Reduced administrative burden"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </MotionCard>
              </div>

              <div className="p-6 rounded-lg border-2 border-accent/20 bg-accent/5">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Research Collaboration Opportunities</h3>
                    <p className="text-muted-foreground mb-4">
                      Partner with us for academic research projects. Access advanced features, priority support, and co-publishing opportunities.
                    </p>
                    <Button variant="outline">
                      Explore Research Partnership
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}