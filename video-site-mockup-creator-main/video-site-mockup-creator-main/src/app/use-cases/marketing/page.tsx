"use client"

import { Navigation } from "@/components/Navigation"
import { MotionCard } from "@/components/MotionCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { 
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Users,
  TrendingUp,
  Zap,
  Sparkles,
  Video,
  Share2,
  Target,
  BarChart3,
  Clock,
  Palette,
  Smile,
  ShoppingBag,
  Globe,
  UserCheck,
  Languages,
  TestTube2,
  MousePointerClick,
  LineChart,
  Layers
} from "lucide-react"

export default function MarketingUseCasePage() {
  const features = [
    {
      icon: Clock,
      title: "Rapid Production",
      description: "Create professional animations in hours, not weeks. From concept to final delivery in record time.",
      color: "secondary"
    },
    {
      icon: Smile,
      title: "Brand Mascots",
      description: "Bring brand characters to life with personality-driven performances and consistent brand identity.",
      color: "primary"
    },
    {
      icon: Share2,
      title: "Social Media Ready",
      description: "Optimized formats for Instagram, TikTok, YouTube, and all major social platforms.",
      color: "accent"
    },
    {
      icon: Video,
      title: "Product Demonstrations",
      description: "Showcase products with engaging character-driven narratives and interactive demonstrations.",
      color: "secondary"
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "Match your brand colors, style guide, and visual identity perfectly in every animation.",
      color: "primary"
    },
    {
      icon: Target,
      title: "A/B Testing",
      description: "Quickly generate multiple variations to test messaging, style, and audience response.",
      color: "accent"
    }
  ]

  const marketingInnovations = [
    {
      icon: UserCheck,
      title: "Dynamic Personalization",
      description: "Create personalized video content that adapts to viewer demographics and behavior",
      color: "primary"
    },
    {
      icon: TestTube2,
      title: "A/B Testing Studio",
      description: "Built-in tools to generate and test multiple creative variations simultaneously",
      color: "secondary"
    },
    {
      icon: LineChart,
      title: "Attribution Tracking",
      description: "Multi-channel attribution with UTM parameters and conversion pixel integration",
      color: "accent"
    },
    {
      icon: Users,
      title: "Influencer Tools",
      description: "Collaborate with influencers through shared templates and brand asset libraries",
      color: "primary"
    },
    {
      icon: MousePointerClick,
      title: "Interactive Elements",
      description: "Embed clickable CTAs, polls, and product links directly in video content",
      color: "secondary"
    },
    {
      icon: Languages,
      title: "Auto-Localization",
      description: "Automated translation and cultural adaptation for global marketing campaigns",
      color: "accent"
    }
  ]

  const campaigns = [
    {
      brand: "TechNova Phones",
      industry: "Consumer Electronics",
      campaign: "Product Launch Campaign",
      result: "250% increase in pre-orders",
      details: "30-second animated mascot series across social media",
      reach: "15M+ impressions",
      engagement: "4.2% CTR",
      budget: "Saved $80K vs traditional"
    },
    {
      brand: "FitLife Nutrition",
      industry: "Health & Wellness",
      campaign: "Brand Awareness Series",
      result: "180% follower growth",
      details: "Weekly character-driven health tips and product features",
      reach: "8M+ impressions",
      engagement: "6.8% engagement rate",
      budget: "Saved $45K vs traditional"
    },
    {
      brand: "EcoWear Fashion",
      industry: "Sustainable Fashion",
      campaign: "Sustainability Campaign",
      result: "300% boost in website traffic",
      details: "Animated storytelling about sustainable practices",
      reach: "20M+ impressions",
      engagement: "5.5% CTR",
      budget: "Saved $120K vs traditional"
    }
  ]

  const contentTypes = [
    {
      type: "Social Media Ads",
      formats: ["Instagram Stories", "TikTok", "YouTube Shorts", "Facebook Ads"],
      duration: "15-60 seconds",
      icon: Share2,
      color: "primary"
    },
    {
      type: "Product Videos",
      formats: ["Demo Videos", "Feature Highlights", "Unboxing", "Tutorials"],
      duration: "30-120 seconds",
      icon: ShoppingBag,
      color: "secondary"
    },
    {
      type: "Brand Content",
      formats: ["Mascot Series", "Brand Story", "Company Culture", "Testimonials"],
      duration: "60-180 seconds",
      icon: Sparkles,
      color: "accent"
    },
    {
      type: "Campaign Assets",
      formats: ["TV Commercials", "Digital Billboards", "Event Content", "Email Headers"],
      duration: "5-30 seconds",
      icon: Megaphone,
      color: "primary"
    }
  ]

  const platformOptimizations = {
    "Instagram": { ratio: "1:1, 9:16, 4:5", duration: "15-60s", format: "MP4, MOV" },
    "TikTok": { ratio: "9:16", duration: "15-60s", format: "MP4" },
    "YouTube": { ratio: "16:9", duration: "Any", format: "MP4, WebM" },
    "Facebook": { ratio: "1:1, 16:9", duration: "15-240s", format: "MP4, MOV" },
    "Twitter": { ratio: "16:9, 1:1", duration: "5-140s", format: "MP4, MOV" },
    "LinkedIn": { ratio: "16:9, 1:1", duration: "15-180s", format: "MP4" }
  }

  const pricingComparison = [
    { method: "Traditional Animation", cost: "$5,000-$15,000", time: "2-4 weeks", revisions: "Limited" },
    { method: "Live Action Shoot", cost: "$10,000-$50,000", time: "3-6 weeks", revisions: "Expensive" },
    { method: "Stock Footage", cost: "$500-$2,000", time: "1-2 weeks", revisions: "None" },
    { method: "Motion Capture", cost: "$500-$3,000", time: "1-3 days", revisions: "Unlimited", highlight: true }
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
              <Megaphone className="w-10 h-10 text-secondary" />
            </div>
            <div className="flex-1">
              <Badge className="mb-3 bg-secondary/10 text-secondary border-secondary/20">
                Fast Delivery
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Marketing & Advertising
              </h1>
              <p className="text-xl text-muted-foreground">
                Create engaging branded content, product demonstrations, and viral social media campaigns with eye-catching character animations. Fast turnaround, unlimited revisions.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
              <div className="flex items-center gap-2 mb-1">
                <Megaphone className="w-4 h-4 text-secondary" />
                <span className="text-2xl font-bold">800+</span>
              </div>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-2xl font-bold">300+</span>
              </div>
              <p className="text-sm text-muted-foreground">Campaigns</p>
            </div>
            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-2xl font-bold">24-72h</span>
              </div>
              <p className="text-sm text-muted-foreground">Avg Turnaround</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-secondary" />
                <span className="text-2xl font-bold">95%</span>
              </div>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="features" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="content">Content Types</TabsTrigger>
              <TabsTrigger value="pricing">ROI</TabsTrigger>
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

              {/* Marketing Innovations Section */}
              <div className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold">Marketing Innovations</h2>
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    New
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {marketingInnovations.map((innovation, idx) => {
                    const Icon = innovation.icon
                    const colorMap = {
                      primary: "border-primary/50 hover:border-primary",
                      secondary: "border-secondary/50 hover:border-secondary",
                      accent: "border-accent/50 hover:border-accent"
                    }
                    
                    return (
                      <div 
                        key={idx}
                        className={`p-6 rounded-lg bg-card border-2 ${colorMap[innovation.color as keyof typeof colorMap]} transition-colors duration-300`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${
                            innovation.color === "primary" ? "bg-primary/10 text-primary" :
                            innovation.color === "secondary" ? "bg-secondary/10 text-secondary" :
                            "bg-accent/10 text-accent"
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-2">{innovation.title}</h3>
                            <p className="text-sm text-muted-foreground">{innovation.description}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <MotionCard
                title="Platform Optimization"
                description="Perfectly formatted for every social media platform"
                icon={Globe}
                glowColor="purple"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(platformOptimizations).map(([platform, specs]) => (
                    <div key={platform} className="p-4 rounded-lg bg-card border border-border">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Share2 className="w-4 h-4 text-secondary" />
                        {platform}
                      </h4>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center justify-between">
                          <span>Aspect Ratio:</span>
                          <span className="font-medium">{specs.ratio}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">{specs.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Format:</span>
                          <span className="font-medium">{specs.format}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionCard>
            </TabsContent>

            {/* Campaigns Tab */}
            <TabsContent value="campaigns" className="space-y-6">
              {campaigns.map((campaign, idx) => (
                <MotionCard
                  key={idx}
                  title={campaign.brand}
                  description={campaign.details}
                  icon={Megaphone}
                  glowColor={idx % 3 === 0 ? "purple" : idx % 3 === 1 ? "cyan" : "magenta"}
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground mb-1">Industry</p>
                      <p className="font-semibold">{campaign.industry}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground mb-1">Campaign</p>
                      <p className="font-semibold">{campaign.campaign}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 md:col-span-2">
                      <p className="text-sm text-muted-foreground mb-1">Result</p>
                      <p className="font-semibold text-secondary">{campaign.result}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-muted-foreground mb-1">Reach</p>
                      <p className="font-bold text-primary">{campaign.reach}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                      <p className="text-muted-foreground mb-1">Engagement</p>
                      <p className="font-bold text-secondary">{campaign.engagement}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                      <p className="text-muted-foreground mb-1">Cost Savings</p>
                      <p className="font-bold text-accent">{campaign.budget}</p>
                    </div>
                  </div>
                </MotionCard>
              ))}

              <div className="p-6 rounded-lg border-2 border-secondary/20 bg-secondary/5 text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-2">Track Your Campaign Success</h3>
                <p className="text-muted-foreground mb-4">
                  Get detailed analytics on reach, engagement, and ROI for your motion capture campaigns.
                </p>
                <Button variant="outline">
                  View Analytics Dashboard
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            {/* Content Types Tab */}
            <TabsContent value="content" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contentTypes.map((content, idx) => {
                  const Icon = content.icon
                  return (
                    <MotionCard
                      key={idx}
                      title={content.type}
                      description={`Typical duration: ${content.duration}`}
                      icon={content.icon}
                      glowColor={content.color === "primary" ? "cyan" : content.color === "secondary" ? "purple" : "magenta"}
                    >
                      <div className="space-y-2">
                        {content.formats.map((format, fidx) => (
                          <div key={fidx} className="flex items-center gap-2 p-2 rounded-lg bg-muted/30">
                            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span className="text-sm">{format}</span>
                          </div>
                        ))}
                      </div>
                    </MotionCard>
                  )
                })}
              </div>

              <MotionCard
                title="Create Your Marketing Content"
                description="Start your campaign today with fast turnaround"
                icon={Sparkles}
                glowColor="purple"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="flex-1">
                    <Link href="/upload">
                      Upload Brand Content
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="flex-1">
                    <Link href="/results">
                      View Marketing Demo
                    </Link>
                  </Button>
                </div>
              </MotionCard>
            </TabsContent>

            {/* Pricing/ROI Tab */}
            <TabsContent value="pricing" className="space-y-6">
              <MotionCard
                title="Cost Comparison Analysis"
                description="See how motion capture stacks up against traditional methods"
                icon={BarChart3}
                glowColor="cyan"
              >
                <div className="space-y-3">
                  {pricingComparison.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-lg ${item.highlight ? 'bg-primary/10 border-2 border-primary/50' : 'bg-muted/50 border border-border'}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold flex items-center gap-2">
                          {item.method}
                          {item.highlight && (
                            <Badge className="bg-primary/20 text-primary border-primary/30">
                              Best Value
                            </Badge>
                          )}
                        </h4>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground mb-1">Cost Range</p>
                          <p className="font-semibold">{item.cost}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Timeline</p>
                          <p className="font-semibold">{item.time}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Revisions</p>
                          <p className="font-semibold">{item.revisions}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionCard>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MotionCard
                  title="ROI Benefits"
                  icon={TrendingUp}
                  glowColor="purple"
                >
                  <div className="space-y-3">
                    {[
                      { label: "Cost Savings", value: "70-80%" },
                      { label: "Time Reduction", value: "85%" },
                      { label: "Production Flexibility", value: "Unlimited" },
                      { label: "Revision Speed", value: "Same Day" },
                      { label: "Content Variations", value: "Infinite" },
                      { label: "Team Efficiency", value: "3x Faster" }
                    ].map((metric, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
                        <span className="text-sm font-medium">{metric.label}</span>
                        <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                          {metric.value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </MotionCard>

                <MotionCard
                  title="Business Impact"
                  icon={Target}
                  glowColor="magenta"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Engagement Rate</span>
                        <span className="text-sm font-semibold">+180%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-secondary to-primary w-[95%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Conversion Rate</span>
                        <span className="text-sm font-semibold">+240%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent w-[92%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Brand Recall</span>
                        <span className="text-sm font-semibold">+160%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-accent to-secondary w-[88%]" />
                      </div>
                    </div>
                  </div>
                </MotionCard>
              </div>

              <div className="p-6 rounded-lg border-2 border-accent/20 bg-accent/5">
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Launch Campaign Package</h3>
                    <p className="text-muted-foreground mb-4">
                      Get started with our marketing bundle: 5 animated videos, unlimited revisions, multi-platform optimization, and dedicated support.
                    </p>
                    <div className="flex items-center gap-4">
                      <Button>
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <span className="text-sm text-muted-foreground">Starting at $2,499</span>
                    </div>
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