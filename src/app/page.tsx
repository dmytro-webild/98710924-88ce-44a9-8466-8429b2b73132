"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardDashboard from '@/components/sections/hero/HeroBillboardDashboard';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Sparkles, Hexagon, House, MessageSquareText, Settings, CircleDollarSign, ArrowLeftRight, Send, AlertCircle, Bell, Mail, Calendar, MessageCircle, Video, Image, Music, Map, Store, Bot, User, Shield, Zap, Database, Code, Users, Layers, Award, TrendingUp, Star, DollarSign, HelpCircle, Rocket } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Webild"
          bottomLeftText="Global Community"
          bottomRightText="hello@webild.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          title="Next Generation Analytics Platform"
          description="Transform your data into actionable insights with our intelligent analytics dashboard. Real-time monitoring, predictive analytics, and seamless integration in one powerful platform."
          tag="Powered by Advanced AI"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Get Started Free", href: "#contact" },
            { text: "View Demo", href: "#features" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          dashboard={{
            title: "Real-Time Analytics",            stats: [
              {
                title: "Data Processing",                values: [2400, 1398, 9800],
                valuePrefix: "",                valueSuffix: "GB",                description: "Monthly capacity"
              },
              {
                title: "Active Users",                values: [450, 380, 520],
                valuePrefix: "",                valueSuffix: "K",                description: "Global engagement"
              },
              {
                title: "API Calls",                values: [1200, 900, 1500],
                valuePrefix: "",                valueSuffix: "M",                description: "Per day"
              }
            ],
            logoIcon: Hexagon,
            searchPlaceholder: "Search metrics...",            sidebarItems: [
              { icon: House },
              { icon: MessageSquareText },
              { icon: Settings, active: true },
              { icon: CircleDollarSign }
            ],
            buttons: [
              { text: "Dashboard", href: "#" },
              { text: "Settings", href: "#" }
            ],
            listItems: [
              { icon: ArrowLeftRight, title: "Data Sync", status: "Active" },
              { icon: Send, title: "API Push", status: "Queued" }
            ],
            imageSrc: "http://img.b2bpic.net/free-vector/gradient-ui-ux-elements_23-2149057416.jpg",            imageAlt: "Analytics Dashboard Interface"
          }}
        />
      </div>

      <div id="features-bento" data-section="features-bento">
        <FeatureBento
          title="Powerful Features Built for Scale"
          description="Everything you need to make data-driven decisions with confidence and speed."
          tag="Advanced Capabilities"
          tagIcon={Sparkles}
          tagAnimation="blur-reveal"
          animationType="slide-up"
          textboxLayout="split"
          useInvertedBackground={false}
          features={[
            {
              title: "Global Monitoring",              description: "Monitor metrics across 150+ countries with real-time updates.",              bentoComponent: "globe"
            },
            {
              title: "Predictive Analytics",              description: "AI-powered forecasting with 95% accuracy rate.",              bentoComponent: "animated-bar-chart"
            },
            {
              title: "Geographic Insights",              description: "Visualize data distribution and trends by location.",              bentoComponent: "map"
            },
            {
              title: "Performance Tracking",              description: "Track KPIs with interactive line charts.",              bentoComponent: "line-chart"
            },
            {
              title: "Mobile Integration",              description: "Full-featured mobile app for on-the-go monitoring.",              bentoComponent: "phone",              statusIcon: AlertCircle,
              alertIcon: Bell,
              alertTitle: "New Alert",              alertMessage: "API threshold exceeded",              apps: [
                { name: "Mail", icon: Mail },
                { name: "Calendar", icon: Calendar },
                { name: "Chat", icon: MessageCircle },
                { name: "Video", icon: Video },
                { name: "Photos", icon: Image },
                { name: "Music", icon: Music },
                { name: "Maps", icon: Map },
                { name: "Store", icon: Store }
              ]
            },
            {
              title: "AI Chat Assistant",              description: "Ask questions about your data naturally.",              bentoComponent: "chat",              aiIcon: Bot,
              userIcon: User,
              exchanges: [
                {
                  userMessage: "What's our top performing region?",                  aiResponse: "Based on Q4 data, North America leads with 42% growth YoY."
                },
                {
                  userMessage: "Show me anomalies this week",                  aiResponse: "Detected 3 anomalies: API latency spike on Tuesday, traffic surge Wednesday evening."
                }
              ],
              placeholder: "Ask me anything..."
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="features-hover" data-section="features-hover">
        <FeatureHoverPattern
          title="Enterprise Grade Performance"
          description="Built for high-performance teams that demand reliability and speed."
          tag="Enterprise Ready"
          tagIcon={Zap}
          tagAnimation="opacity"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              icon: Shield,
              title: "Enterprise Security",              description: "SOC 2, HIPAA, and GDPR compliant. Military-grade encryption."
            },
            {
              icon: Zap,
              title: "Lightning Fast",              description: "Sub-100ms response times with 99.99% uptime SLA."
            },
            {
              icon: Database,
              title: "Unlimited Scalability",              description: "Handle billions of data points without performance degradation."
            },
            {
              icon: Code,
              title: "Developer Friendly",              description: "Comprehensive REST and GraphQL APIs with SDK support."
            },
            {
              icon: Users,
              title: "Team Collaboration",              description: "Real-time sharing, permissions, and audit trails."
            },
            {
              icon: Layers,
              title: "Custom Integrations",              description: "Seamless integration with 500+ third-party tools."
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          title="Why Leading Teams Choose Us"
          description="Founded in 2019, we've helped 2000+ companies unlock the true value of their data. Our platform processes 500+ billion events daily and powers insights for fortune 500 companies."
          tag="Our Impact"
          tagIcon={Award}
          tagAnimation="slide-up"
          metrics={[
            { value: "2000+", title: "Enterprise Clients" },
            { value: "99.99%", title: "Uptime SLA" },
            { value: "150+", title: "Global Regions" },
            { value: "500B", title: "Events Daily" }
          ]}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/empty-meeting-office-space-enterprise-used-workers-attend-conferences_482257-115920.jpg"
          imageAlt="Team collaboration workspace"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Loved by Industry Leaders"
          description="See what our customers have to say about transforming their data operations."
          tag="Customer Success"
          tagIcon={Star}
          tagAnimation="opacity"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              handle: "@sarahjohnson",              testimonial: "Webild transformed how we analyze customer behavior. We went from 2-week reporting cycles to real-time insights. Absolutely game-changing.",              imageSrc: "http://img.b2bpic.net/free-photo/young-serious-businessman-looking-camera-meeting-headshot-portrait_1163-3923.jpg",              imageAlt: "Sarah Johnson CEO",              icon: Sparkles
            },
            {
              id: "2",              name: "Michael Chen",              handle: "@mchen_tech",              testimonial: "The platform's AI capabilities are exceptional. It caught anomalies we would have missed for months. Our team is now 3x more productive.",              imageSrc: "http://img.b2bpic.net/free-photo/well-dressed-employee-outdoors_1098-2197.jpg",              imageAlt: "Michael Chen CTO",              icon: Zap
            },
            {
              id: "3",              name: "Emily Rodriguez",              handle: "@emilyrodriguez",              testimonial: "Implementation was seamless. Their support team went above and beyond. We saved $200K annually just on operational efficiency.",              imageSrc: "http://img.b2bpic.net/free-photo/inspiring-new-boss_1098-93.jpg",              imageAlt: "Emily Rodriguez VP",              icon: TrendingUp
            },
            {
              id: "4",              name: "David Kim",              handle: "@davidkim",              testimonial: "The best analytics platform we've ever used. The UI is intuitive, the API is powerful, and the reliability is unmatched.",              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1649.jpg",              imageAlt: "David Kim Product Lead",              icon: Star
            },
            {
              id: "5",              name: "Jessica Lee",              handle: "@jessicalee_data",              testimonial: "From setup to production, everything was smooth. The documentation is excellent and the team is incredibly responsive.",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-business-woman-portrait_23-2149280713.jpg",              imageAlt: "Jessica Lee Data Engineer",              icon: Award
            },
            {
              id: "6",              name: "Robert Walsh",              handle: "@rwalsh",              testimonial: "We process 10B+ events daily on this platform. The performance and reliability are outstanding. Highly recommended.",              imageSrc: "http://img.b2bpic.net/free-photo/happy-professional_1098-12931.jpg",              imageAlt: "Robert Walsh Director",              icon: Sparkles
            }
          ]}
          speed={35}
          topMarqueeDirection="left"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your team. Always have access to the features you need."
          tag="No Hidden Fees"
          tagIcon={DollarSign}
          tagAnimation="opacity"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          plans={[
            {
              id: "starter",              name: "Starter",              badge: "Popular",              badgeIcon: Sparkles,
              price: "$499",              features: [
                "Up to 10B events/month",                "5 team members",                "Custom dashboards",                "Email support",                "Data retention 12 months",                "Basic API access"
              ],
              buttons: [{ text: "Get Started", href: "#contact" }]
            },
            {
              id: "professional",              name: "Professional",              badge: "Recommended",              badgeIcon: Award,
              price: "$1,999",              features: [
                "Up to 100B events/month",                "Unlimited team members",                "Advanced analytics",                "Priority support",                "Data retention unlimited",                "Full API access",                "Custom integrations",                "SSO & SAML"
              ],
              buttons: [{ text: "Start Free Trial", href: "#contact" }]
            },
            {
              id: "enterprise",              name: "Enterprise",              badge: "Custom",              badgeIcon: Zap,
              price: "Custom",              features: [
                "Unlimited events",                "Dedicated account manager",                "Custom SLA",                "24/7 phone support",                "White label options",                "On-premise deployment",                "Custom compliance",                "Training & onboarding"
              ],
              buttons: [{ text: "Contact Sales", href: "#contact" }]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about Webild Analytics Platform."
          tag="Support"
          tagIcon={HelpCircle}
          tagAnimation="opacity"
          faqsAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          faqs={[
            {
              id: "1",              title: "How quickly can we get started?",              content: "Most customers are up and running within 24 hours. We provide comprehensive onboarding, API documentation, and a dedicated support specialist for the first 30 days."
            },
            {
              id: "2",              title: "What data sources can we connect?",              content: "We support 500+ integrations including databases, warehouses, APIs, webhooks, and event streams. Custom integrations are available for enterprise clients."
            },
            {
              id: "3",              title: "How is data security handled?",              content: "We maintain SOC 2 Type II certification, use AES-256 encryption, and comply with GDPR, HIPAA, and industry standards. Data is encrypted both in transit and at rest."
            },
            {
              id: "4",              title: "What's your uptime guarantee?",              content: "We guarantee 99.99% uptime with automatic failover, redundant systems, and 24/7 monitoring. SLA credits apply if we fall short."
            },
            {
              id: "5",              title: "Can we export our data?",              content: "Yes, you can export data anytime in multiple formats (CSV, JSON, Parquet). There are no lock-in contracts and you maintain full ownership of your data."
            },
            {
              id: "6",              title: "Do you offer team training?",              content: "Absolutely. We provide live training sessions, recorded tutorials, certification programs, and dedicated success managers for enterprise accounts."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Begin?"
          tagIcon={Rocket}
          tagAnimation="slide-up"
          title="Transform Your Data Today"
          description="Join 2000+ companies using Webild to unlock real-time insights and drive growth. Start your free trial now—no credit card required."
          buttons={[
            { text: "Start Free Trial", href: "#" },
            { text: "Schedule Demo", href: "#" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Webild"
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Security", href: "#" },
                { label: "Enterprise", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Support", href: "#" },
                { label: "Community", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Compliance", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Webild. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}