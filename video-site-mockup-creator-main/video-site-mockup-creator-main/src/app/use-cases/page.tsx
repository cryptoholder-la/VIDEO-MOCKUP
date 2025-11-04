"use client"

import { Navigation } from "@/components/Navigation"
import { MotionCard } from "@/components/MotionCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { 
  Gamepad2,
  Clapperboard,
  Headset,
  GraduationCap,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp
} from "lucide-react"

const useCases = [
  {
    slug: "gaming",
    title: "Gaming & Game Development",
    description: "Professional motion capture for AAA games, indie studios, and mobile gaming with real-time character animation.",
    icon: Gamepad2,
    color: "primary",
    features: [
      "Real-time retargeting for Unity & Unreal",
      "Combat & action animation library",
      "Procedural animation blending",
      "Multi-character sync capture"
    ],
    stats: { projects: "500+", studios: "120+", satisfaction: "98%" },
    badge: "Most Popular"
  },
  {
    slug: "film",
    title: "Film & Animation",
    description: "Hollywood-grade motion capture for movies, TV shows, and animated features with cinema-quality output.",
    icon: Clapperboard,
    color: "secondary",
    features: [
      "4K+ quality facial capture",
      "Multi-actor scene recording",
      "VFX-ready export formats",
      "Frame-perfect synchronization"
    ],
    stats: { projects: "200+", studios: "45+", satisfaction: "99%" },
    badge: "Industry Standard"
  },
  {
    slug: "vr",
    title: "Virtual Reality & Metaverse",
    description: "Immersive VR experiences with full-body tracking, facial expressions, and real-time avatar animation.",
    icon: Headset,
    color: "accent",
    features: [
      "Full-body IK solving",
      "Real-time streaming protocols",
      "Avatar customization API",
      "Cross-platform compatibility"
    ],
    stats: { projects: "1M+", users: "5M+", satisfaction: "97%" },
    badge: "Trending"
  },
  {
    slug: "education",
    title: "Education & Training",
    description: "Interactive training simulations with accurate human movement, gesture recognition, and real-time feedback.",
    icon: GraduationCap,
    color: "primary",
    features: [
      "Medical procedure simulations",
      "Safety training scenarios",
      "Sports performance analysis",
      "Assessment & analytics"
    ],
    stats: { projects: "350+", institutions: "150+", satisfaction: "96%" },
    badge: "Professional"
  },
  {
    slug: "marketing",
    title: "Marketing & Advertising",
    description: "Eye-catching branded content, product demos, and social media campaigns with quick turnaround times.",
    icon: Megaphone,
    color: "secondary",
    features: [
      "Rapid production workflows",
      "Brand mascot animation",
      "Social media optimization",
      "Multi-format delivery"
    ],
    stats: { projects: "800+", campaigns: "300+", satisfaction: "95%" },
    badge: "Fast Delivery"
  }
]

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Zap className="w-3 h-3 mr-1" />
            Industry Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Production-Level Motion Capture
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how leading studios, developers, and creators use our motion capture platform to bring their visions to life across industries.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border-2 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">3,000+</h3>
              </div>
              <p className="text-muted-foreground">Active Projects</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-secondary/20 bg-secondary/5">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-bold">97%</h3>
              </div>
              <p className="text-muted-foreground">Average Satisfaction</p>
            </div>
            <div className="p-6 rounded-lg border-2 border-accent/20 bg-accent/5">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold">6M+</h3>
              </div>
              <p className="text-muted-foreground">Users Reached</p>
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="max-w-6xl mx-auto space-y-6">
          {useCases.map((useCase) => {
            const Icon = useCase.icon
            const colorMap = {
              primary: "border-primary/20 bg-primary/5",
              secondary: "border-secondary/20 bg-secondary/5",
              accent: "border-accent/20 bg-accent/5"
            }
            const iconColorMap = {
              primary: "text-primary",
              secondary: "text-secondary",
              accent: "text-accent"
            }
            
            return (
              <Link key={useCase.slug} href={`/use-cases/${useCase.slug}`}>
                <div className={`group p-6 rounded-lg border-2 transition-all duration-300 hover:scale-[1.02] ${colorMap[useCase.color as keyof typeof colorMap]} hover:shadow-lg cursor-pointer`}>
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-lg ${colorMap[useCase.color as keyof typeof colorMap]} border-2`}>
                      <Icon className={`w-10 h-10 ${iconColorMap[useCase.color as keyof typeof iconColorMap]}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                              {useCase.title}
                            </h2>
                            <Badge variant="outline" className="text-xs">
                              {useCase.badge}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">
                            {useCase.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        {useCase.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className={`w-4 h-4 ${iconColorMap[useCase.color as keyof typeof iconColorMap]} flex-shrink-0`} />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        {Object.entries(useCase.stats).map(([key, value]) => (
                          <div key={key} className="flex items-center gap-1">
                            <span className="font-semibold">{value}</span>
                            <span className="text-muted-foreground">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <MotionCard
            title="Ready to Get Started?"
            description="Upload your video and experience production-level motion capture"
            icon={Zap}
            glowColor="cyan"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="flex-1">
                <Link href="/upload">
                  Start Motion Capture
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
        </div>
      </div>
    </div>
  )
}