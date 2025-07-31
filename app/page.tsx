"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Shield,
  Clock,
  Users,
  Award,
  Star,
  Menu,
  X,
  Send,
  MessageCircle,
  TrendingUp,
  Zap,
  Lock,
  Globe,
  FileText,
  Play,
  Plus,
  Minus,
  AlertCircle,
  CheckCircle2,
  BarChart3,
  Settings,
  HeadphonesIcon,
  Building2,
} from "lucide-react"

export default function NextLogFullServicePage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    fleetSize: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 6)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("loading")

    try {
      // Format the message for WhatsApp and Telegram
      const message = `🚛 NEW CONSULTATION REQUEST 🚛

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone || "Not provided"}
🏢 Company: ${formData.company || "Not provided"}
🚚 Fleet Size: ${formData.fleetSize || "Not specified"}

💬 Message:
${formData.message}

⏰ Submitted: ${new Date().toLocaleString()}
🌐 Source: NextLog FullService Website`

      // Send to WhatsApp (opens WhatsApp with pre-filled message)
      const whatsappUrl = `https://wa.me/996508228328?text=${encodeURIComponent(message)}`

      // Send to Telegram (opens Telegram with pre-filled message)
      const telegramUrl = `https://t.me/safetysupport2025?text=${encodeURIComponent(message)}`

      // Open both WhatsApp and Telegram in new tabs
      window.open(whatsappUrl, "_blank")
      setTimeout(() => {
        window.open(telegramUrl, "_blank")
      }, 1000) // Small delay to prevent popup blocking

      setFormStatus("success")

      setTimeout(() => {
        setFormStatus("idle")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          fleetSize: "",
          message: "",
        })
      }, 3000)
    } catch (error) {
      console.error("Error sending message:", error)
      setFormStatus("error")

      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    }
  }

  const testimonials = [
    {
      quote:
        "NextLog FullService transformed our entire operation. The implementation was seamless, and the ROI was visible within the first month. Their support team is absolutely exceptional.",
      author: "Michael Thompson",
      title: "Fleet Operations Director",
      company: "TransLogistics International",
      fleetSize: "250+ Trucks",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As an owner-operator, I was skeptical about ELD systems. NextLog made the transition painless and their ongoing support has been invaluable. Highly recommended!",
      author: "Sarah Rodriguez",
      title: "Owner-Operator",
      company: "Rodriguez Freight Solutions",
      fleetSize: "3 Trucks",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The IFTA services and audit support have saved us countless hours and potential fines. Their proactive approach to compliance is exactly what we needed.",
      author: "David Chen",
      title: "Compliance Manager",
      company: "Midwest Express Logistics",
      fleetSize: "500+ Fleet",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Best decision we made for our growing fleet. The scalability and professional service have supported our 300% growth over the past two years.",
      author: "Jennifer Williams",
      title: "CEO",
      company: "Williams Transport Group",
      fleetSize: "150+ Trucks",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The multilingual support has been a game-changer for our diverse driver base. Communication barriers are no longer an issue.",
      author: "Carlos Martinez",
      title: "Operations Manager",
      company: "Southwest Freight Lines",
      fleetSize: "85 Trucks",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Professional, reliable, and always available when we need them. The peace of mind their compliance services provide is priceless.",
      author: "Robert Johnson",
      title: "Fleet Safety Director",
      company: "Johnson Logistics Corp",
      fleetSize: "400+ Fleet",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const faqs = [
    {
      question: "How quickly can you get our fleet up and running?",
      answer:
        "Our industry-leading 10-minute setup process can have your entire fleet operational the same day. We provide comprehensive onboarding with dedicated support specialists to ensure zero downtime during your transition.",
    },
    {
      question: "What makes your ELD solution different from competitors?",
      answer:
        "NextLog FullService offers the only truly comprehensive solution combining ELD technology, 24/7 multilingual support, complete IFTA services, and professional audit protection - all backed by our 99.9% uptime guarantee and 30-day money-back promise.",
    },
    {
      question: "Do you support fleets of all sizes?",
      answer:
        "Absolutely. From single owner-operators to enterprise fleets with 1000+ vehicles, our scalable solutions grow with your business. We offer customized packages and dedicated account management for larger operations.",
    },
    {
      question: "How does your 1-5 minute response time guarantee work?",
      answer:
        "We maintain fully-staffed support centers across multiple time zones with multilingual specialists. Our advanced ticket routing system ensures drivers and fleet managers receive immediate assistance, with escalation protocols for complex issues.",
    },
    {
      question: "What compliance services are included?",
      answer:
        "Our Full Support Plan includes complete DOT compliance management, IFTA reporting and filing, safety audit preparation, driver training programs, and professional representation during DOT inspections - all managed by certified compliance specialists.",
    },
    {
      question: "Can you integrate with our existing fleet management systems?",
      answer:
        "Yes, our enterprise solutions offer comprehensive API integration with most major fleet management platforms, fuel card systems, and accounting software. Our technical team handles all integration work at no additional cost.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0f1419] text-white overflow-x-hidden">
      {/* Enhanced Header with Mega Menu */}
      <header
        className={`fixed w-full z-50 transition-all duration-700 ${
          scrolled
            ? "py-2 bg-[#0f1419]/98 backdrop-blur-xl shadow-2xl border-b border-orange-400/20"
            : "py-4 bg-gradient-to-r from-[#0f1419] via-[#1a2332] to-[#0f1419]"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
                <Image
                  src="/nextlog-logo.png"
                  alt="NextLog FullService Logo"
                  width={scrolled ? 48 : 56}
                  height={scrolled ? 48 : 56}
                  className="relative rounded-full shadow-2xl transition-all duration-500 ring-2 ring-orange-400/40 group-hover:ring-orange-400/60"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0f1419] animate-pulse shadow-lg shadow-green-400/50"></div>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-bold text-white transition-all duration-500 ${scrolled ? "text-xl" : "text-2xl"}`}
                >
                  NextLog
                </span>
                <span className="text-xs text-orange-400 font-bold tracking-[0.2em] uppercase">FullService Pro</span>
              </div>
            </div>

            {/* Enhanced Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              {[
                { name: "Solutions", href: "#services" },
                { name: "Pricing", href: "#pricing" },
                { name: "About", href: "#about" },
                { name: "Resources", href: "#resources" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium relative group px-4 py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-500 group-hover:w-full"></span>
                  <span className="absolute inset-0 bg-orange-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </a>
              ))}
            </nav>

            {/* Enhanced CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Support Online</span>
              </div>
              <a
                href="tg://resolve?domain=safetysupport2025"
                className="group flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-sm shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5 hover:scale-105"
              >
                <MessageCircle size={16} className="group-hover:rotate-12 transition-transform" />
                <span>Chat Now</span>
              </a>
              <a
                href="https://wa.me/996508228328"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 text-sm shadow-xl hover:shadow-green-500/30 transform hover:-translate-y-0.5 hover:scale-105"
              >
                <Phone size={16} className="group-hover:rotate-12 transition-transform" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-white p-2 hover:bg-orange-400/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          {mobileMenuOpen && (
            <div className="xl:hidden absolute top-full left-0 w-full bg-[#0f1419]/98 backdrop-blur-xl border-b border-orange-400/20 shadow-2xl">
              <nav className="container mx-auto px-4 py-8">
                <div className="flex flex-col gap-6">
                  {[
                    { name: "Solutions", href: "#services" },
                    { name: "Pricing", href: "#pricing" },
                    { name: "About", href: "#about" },
                    { name: "Resources", href: "#resources" },
                    { name: "Contact", href: "#contact" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors font-semibold py-3 border-b border-gray-700 last:border-b-0"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
                    <a
                      href="tg://resolve?domain=safetysupport2025"
                      className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-sm flex-1"
                    >
                      <MessageCircle size={16} />
                      Telegram
                    </a>
                    <a
                      href="https://wa.me/996508228328"
                      className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold text-sm flex-1"
                    >
                      <Phone size={16} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Revolutionary Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-24 pb-32 px-4 bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#0f1419] overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/10 to-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col xl:flex-row items-center gap-16">
            <div className="xl:w-1/2 space-y-10">
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-400/40 rounded-full px-4 py-2 text-orange-300 font-semibold text-sm backdrop-blur-sm">
                  <Shield size={16} />
                  <span>FMCSA Certified</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/40 rounded-full px-4 py-2 text-green-300 font-semibold text-sm backdrop-blur-sm">
                  <Award size={16} />
                  <span>99.9% Uptime</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/40 rounded-full px-4 py-2 text-blue-300 font-semibold text-sm backdrop-blur-sm">
                  <Clock size={16} />
                  <span>24/7 Support</span>
                </div>
              </div>

              {/* Hero Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">We Offer The</span>{" "}
                  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
                    Best ELD Solutions
                  </span>{" "}
                  <span className="text-white">& Work On Your Behalf</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  We partner with the industry's leading ELD providers to offer you the best solutions available. Our
                  expert team works on your behalf to ensure seamless implementation, maximum compliance, and ongoing
                  support. Trusted by 5,000+ carriers nationwide.
                </p>
              </div>

              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#pricing"
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-500 text-center shadow-2xl hover:shadow-orange-500/30 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Start Free Trial
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
                <a
                  href="#demo"
                  className="group relative border-2 border-orange-400 text-orange-400 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-400 hover:text-white transition-all duration-500 text-center transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Play size={24} />
                    Watch Demo
                  </span>
                  <div className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-700">
                {[
                  { icon: Users, number: "5,000+", label: "Active Carriers" },
                  { icon: Clock, number: "7+", label: "Years Experience" },
                  { icon: Award, number: "99.9%", label: "System Uptime" },
                  { icon: Globe, number: "10+", label: "Languages" },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon size={24} className="text-orange-400" />
                    </div>
                    <div className="text-2xl font-bold text-orange-400 mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Hero Visual */}
            <div className="xl:w-1/2 flex justify-center">
              <div className="relative">
                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-2xl animate-bounce">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    <span>FMCSA Approved</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-2xl animate-bounce delay-500">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>1-5 Min Response</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-400 to-purple-500 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-2xl animate-bounce delay-1000">
                  <div className="flex items-center gap-2">
                    <Globe size={16} />
                    <span>24/7 Support</span>
                  </div>
                </div>

                {/* Main Visual */}
                <div className="relative bg-gradient-to-br from-[#1a2332] to-[#0f1419] p-12 rounded-3xl shadow-2xl border border-orange-400/30 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-orange-600/10 rounded-3xl blur-xl animate-pulse"></div>
                  <Image
                    src="/nextlog-logo.png"
                    alt="NextLog FullService Professional Logo"
                    width={320}
                    height={320}
                    className="relative rounded-2xl shadow-2xl ring-4 ring-orange-400/30"
                  />
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold shadow-2xl animate-pulse">
                    <CheckCircle size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Stats Dashboard */}
      <section className="py-20 bg-gradient-to-r from-[#1a2332] to-[#0f1419] border-y border-orange-400/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { number: "5,247", label: "Active Carriers", icon: Building2, color: "orange" },
              { number: "99.97%", label: "System Uptime", icon: Shield, color: "green" },
              { number: "47 sec", label: "Avg Response", icon: Clock, color: "blue" },
              { number: "15", label: "Languages", icon: Globe, color: "purple" },
              { number: "$2.3M", label: "Fines Prevented", icon: AlertCircle, color: "red" },
              { number: "24/7", label: "Expert Support", icon: HeadphonesIcon, color: "cyan" },
            ].map((stat, index) => (
              <div key={index} className="group text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r from-${stat.color}-400/20 to-${stat.color}-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}
                >
                  <stat.icon size={28} className={`text-${stat.color}-400`} />
                </div>
                <div
                  className={`text-3xl font-bold text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Features Section */}
      <section
        id="about"
        className="py-40 relative bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 20, 25, 0.95), rgba(15, 20, 25, 0.95)), url('https://cdn.pixabay.com/photo/2016/11/29/06/15/automobile-1867045_1280.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-400/40 rounded-full px-8 py-4 text-orange-300 font-bold mb-8 backdrop-blur-sm">
              <Zap size={24} />
              <span>Revolutionary Technology</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">Why Choose Our ELD Partnership Services</h2>
            <p className="text-2xl leading-relaxed text-gray-200 max-w-4xl mx-auto">
              We don't manufacture ELDs - we partner with the best providers in the industry and work exclusively on
              your behalf. Our expertise ensures you get the right solution with professional implementation, maximum
              safety compliance, and enterprise-grade support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Zap,
                title: "Lightning-Fast 10-Second Setup",
                description:
                  "Revolutionary auto-configuration technology gets your entire fleet operational in seconds, not hours. Zero technical expertise required.",
                highlight: "Ultra-Fast",
                features: ["Auto-discovery", "Smart Configuration", "Instant Activation", "Zero Downtime"],
              },
              {
                icon: MessageCircle,
                title: "Premium 24/7 Support",
                description:
                  "Professional support team ensures 47-second average response times across 15 languages with certified technicians standing by.",
                highlight: "47-Second Response",
                features: ["Priority Routing", "15 Languages", "Certified Experts", "Instant Support"],
              },
              {
                icon: Shield,
                title: "Maximum Safety & Security",
                description:
                  "Bank-level encryption, SOC 2 compliance, and advanced threat protection keep your sensitive fleet data secure around the clock.",
                highlight: "Maximum Safe",
                features: ["256-bit Encryption", "Advanced Protection", "Threat Detection", "Compliance Ready"],
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics Dashboard",
                description:
                  "Comprehensive insights help predict maintenance needs, optimize routes, and identify cost savings before issues arise.",
                highlight: "Smart Insights",
                features: ["Maintenance Alerts", "Route Optimization", "Cost Analytics", "Performance Metrics"],
              },
              {
                icon: Lock,
                title: "Bulletproof Audit Protection",
                description:
                  "Comprehensive DOT audit preparation with professional representation and guaranteed compliance documentation.",
                highlight: "100% Success Rate",
                features: [
                  "Professional Representation",
                  "Documentation Ready",
                  "Audit Preparation",
                  "Compliance Guarantee",
                ],
              },
              {
                icon: TrendingUp,
                title: "Complete IFTA Automation",
                description:
                  "Fully automated tax calculations, quarterly reporting, and seamless filing with built-in audit trail protection.",
                highlight: "Fully Automated",
                features: ["Auto Calculations", "Smart Filing", "Audit Trails", "Tax Optimization"],
              },
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-[#1a2332]/90 to-[#0f1419]/90 backdrop-blur-xl p-10 rounded-3xl border border-orange-400/30 hover:border-orange-400/60 transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl hover:shadow-orange-400/20 h-full">
                  {/* Highlight Badge */}
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    {feature.highlight}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <feature.icon size={40} className="text-orange-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-orange-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">{feature.description}</p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 size={16} className="text-orange-400 flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Interactive Testimonials */}
      <section className="py-40 px-4 bg-gradient-to-b from-[#0f1419] to-[#1a2332]">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-400/40 rounded-full px-8 py-4 text-yellow-300 font-bold mb-8 backdrop-blur-sm">
              <Star size={24} />
              <span>Industry Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">Trusted by Industry Leaders</h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              See why thousands of carriers choose NextLog FullService for their mission-critical operations.
            </p>
          </div>

          {/* Interactive Testimonial Carousel */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] rounded-3xl p-12 border border-orange-400/30 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
                <span className="text-white font-bold text-xl ml-4">5.0 / 5.0</span>
              </div>

              <div className="text-center">
                <blockquote className="text-2xl md:text-3xl text-gray-200 leading-relaxed italic mb-12 max-w-4xl mx-auto">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>

                <div className="flex items-center justify-center gap-6">
                  <Image
                    src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[activeTestimonial].author}
                    width={80}
                    height={80}
                    className="rounded-full ring-4 ring-orange-400/50"
                  />
                  <div className="text-left">
                    <p className="text-white font-bold text-xl mb-1">{testimonials[activeTestimonial].author}</p>
                    <p className="text-orange-400 font-semibold mb-1">{testimonials[activeTestimonial].title}</p>
                    <p className="text-gray-400">
                      {testimonials[activeTestimonial].company} • {testimonials[activeTestimonial].fleetSize}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? "bg-orange-400 w-12" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Services Showcase */}
      <section id="services" className="py-40 px-4 bg-gradient-to-b from-[#1a2332] to-[#0f1419]">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/40 rounded-full px-8 py-4 text-blue-300 font-bold mb-8 backdrop-blur-sm">
              <Settings size={24} />
              <span>Comprehensive Solutions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">Our Partnership Services</h2>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              From selecting the best ELD solution to complete implementation and ongoing support, we handle everything
              on your behalf. Our partnerships with top providers ensure you get the best technology with professional
              service and guaranteed results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "Lightning-Fast ELD Deployment",
                description:
                  "We select and deploy the best ELD solution for your specific needs with industry-leading 10-second setup, comprehensive driver training, and dedicated onboarding specialists working on your behalf.",
                features: [
                  "Auto Configuration",
                  "Professional Installation",
                  "Driver Certification",
                  "24/7 Launch Support",
                ],
                price: "Starting at $50",
                icon: Zap,
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Complete Compliance Suite",
                description:
                  "Our compliance experts work on your behalf to ensure full DOT compliance management, professional audit representation, safety documentation, and guaranteed regulatory adherence with the best ELD systems available.",
                features: ["DOT Compliance", "Audit Representation", "Safety Documentation", "Regulatory Updates"],
                price: "Included",
                icon: Shield,
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "Advanced IFTA Services",
                description:
                  "We handle all IFTA requirements on your behalf with automated tax calculations, quarterly reporting, seamless filing, and professional audit trail management using the industry's best ELD solutions.",
                features: ["Auto Tax Calculations", "Quarterly Reports", "Seamless Filing", "Audit Protection"],
                price: "Full Service",
                icon: FileText,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Prime Fleet Management",
                description:
                  "Our team works on your behalf to provide advanced analytics, predictive maintenance, route optimization, and comprehensive business intelligence using the best ELD platforms available.",
                features: ["Advanced Analytics", "Maintenance Alerts", "Route Optimization", "Business Intelligence"],
                price: "Enterprise",
                icon: BarChart3,
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Premium Support Experience",
                description:
                  "We provide dedicated support on your behalf with lightning-fast 47-second response times, multilingual support in 15 languages, and certified technical specialists available 24/7.",
                features: ["47-Second Response", "15 Languages", "Certified Specialists", "Priority Escalation"],
                price: "Always Included",
                icon: HeadphonesIcon,
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                title: "Professional Training & Certification",
                description:
                  "Our certified trainers work on your behalf to provide comprehensive safety programs, driver certification courses, compliance training, and ongoing professional development.",
                features: ["Safety Programs", "Driver Certification", "Compliance Training", "Continuing Education"],
                price: "Custom Packages",
                icon: Award,
                gradient: "from-indigo-500 to-purple-500",
              },
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-[#1a2332]/80 to-[#0f1419]/80 backdrop-blur-xl border border-orange-400/30 rounded-3xl overflow-hidden hover:border-orange-400/60 transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-orange-400/20 h-full">
                  <div className="p-10">
                    {/* Header with Icon and Price */}
                    <div className="flex items-start justify-between mb-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.gradient} bg-opacity-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <service.icon size={32} className="text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-400/40 text-orange-300 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                        {service.price}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-4 mb-10">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-4 text-gray-300">
                          <CheckCircle2 size={20} className="text-orange-400 flex-shrink-0" />
                          <span className="font-medium text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="px-10 pb-10">
                    <a
                      href="#contact"
                      className="group/btn flex items-center justify-center gap-3 w-full bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-400/30 text-orange-400 py-4 rounded-2xl font-bold text-lg hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/25"
                    >
                      Get Started
                      <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="resources" className="py-40 px-4 bg-gradient-to-b from-[#0f1419] to-[#1a2332]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/40 rounded-full px-8 py-4 text-green-300 font-bold mb-8 backdrop-blur-sm">
              <AlertCircle size={24} />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">Everything You Need to Know</h2>
            <p className="text-2xl text-gray-300">
              Get instant answers to common questions about our professional ELD solutions.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] border border-orange-400/30 rounded-2xl overflow-hidden hover:border-orange-400/60 transition-all duration-500">
                  <button
                    className="w-full p-8 text-left flex items-center justify-between hover:bg-orange-400/5 transition-colors"
                    onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {activeFAQ === index ? (
                        <Minus size={24} className="text-orange-400" />
                      ) : (
                        <Plus size={24} className="text-gray-400 group-hover:text-orange-400 transition-colors" />
                      )}
                    </div>
                  </button>
                  {activeFAQ === index && (
                    <div className="px-8 pb-8">
                      <p className="text-gray-300 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Pricing Section */}
      <section id="pricing" className="py-40 px-4 bg-gradient-to-b from-[#1a2332] to-[#0f1419]">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/40 rounded-full px-8 py-4 text-green-300 font-bold mb-8 backdrop-blur-sm">
              <CheckCircle size={24} />
              <span>Transparent Pricing</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">Choose Your Success Plan</h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Professional-grade solutions designed to scale with your business. No hidden fees, no long-term contracts,
              30-day money-back guarantee.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] border border-orange-400/30 rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-400/20 h-full">
                <div className="p-10">
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold text-white mb-4">ELD Activation</h3>
                    <p className="text-gray-400 mb-8">Perfect for getting started quickly</p>
                    <div className="flex items-end justify-center gap-2 mb-8">
                      <span className="text-6xl font-bold text-orange-400">$50</span>
                      <span className="text-gray-400 mb-3 text-xl">one-time</span>
                    </div>
                  </div>
                  <ul className="space-y-5 mb-12">
                    {[
                      "Professional device configuration",
                      "Complete driver account setup",
                      "Mobile app installation & training",
                      "Professional compliance consultation",
                      "Priority technical support",
                      "30-day success guarantee",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-300">
                        <CheckCircle size={20} className="text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-10 pb-10">
                  <a
                    href="tg://resolve?domain=safetysupport2025"
                    className="block w-full bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-400/30 text-orange-400 font-bold py-5 text-center rounded-2xl hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all duration-500 text-lg"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="group relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-8 rounded-full text-sm shadow-2xl z-10">
                Most Popular Choice
              </div>
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] border-2 border-orange-400 rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-orange-400/30 h-full transform scale-105">
                <div className="p-10">
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold text-orange-400 mb-4">Full Support Pro</h3>
                    <p className="text-gray-400 mb-8">Complete solution for serious carriers</p>
                    <div className="flex items-end justify-center gap-2 mb-8">
                      <span className="text-6xl font-bold text-orange-400">$120</span>
                      <span className="text-gray-400 mb-3 text-xl">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-5 mb-12">
                    {[
                      "Everything in ELD Activation",
                      "24/7 multilingual support (47-sec response)",
                      "Complete IFTA reporting & filing services",
                      "Professional DOT audit representation",
                      "Advanced fleet analytics dashboard",
                      "Predictive maintenance alerts",
                      "Priority feature updates",
                      "Dedicated success manager",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-300">
                        <CheckCircle size={20} className="text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-10 pb-10">
                  <a
                    href="tg://resolve?domain=safetysupport2025"
                    className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-5 text-center rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-500 shadow-2xl hover:shadow-orange-500/30 text-lg"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] border border-orange-400/30 rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-400/20 h-full">
                <div className="p-10">
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-bold text-white mb-4">Enterprise Fleet</h3>
                    <p className="text-gray-400 mb-8">Custom solutions for large operations</p>
                    <div className="flex items-end justify-center gap-2 mb-8">
                      <span className="text-6xl font-bold text-orange-400">Custom</span>
                    </div>
                  </div>
                  <ul className="space-y-5 mb-12">
                    {[
                      "Everything in Full Support Pro",
                      "Volume discounts (5+ trucks)",
                      "Dedicated enterprise account team",
                      "Custom API integrations",
                      "White-label solutions available",
                      "Advanced business intelligence",
                      "On-site training & implementation",
                      "SLA guarantees & priority support",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-300">
                        <CheckCircle size={20} className="text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-10 pb-10">
                  <a
                    href="#contact"
                    className="block w-full bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-400/30 text-orange-400 font-bold py-5 text-center rounded-2xl hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all duration-500 text-lg"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Guarantee Section */}
          <div className="max-w-5xl mx-auto mt-20">
            <div className="bg-gradient-to-r from-[#1a2332] to-[#0f1419] border border-orange-400/30 rounded-3xl p-12 text-center backdrop-blur-sm">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Shield size={32} className="text-orange-400" />
                <h3 className="text-3xl font-bold text-white">30-Day Success Guarantee</h3>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Try NextLog FullService completely risk-free. If you're not absolutely satisfied within 30 days, we'll
                refund every penny - no questions asked, no hidden conditions.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>No Long-term Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>100% Money Back</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary CTA Section */}
      <section className="py-32 px-4 bg-gradient-to-r from-[#0f1419] via-[#1a2332] to-[#0f1419] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse"></div>
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10">
              Ready to Partner With The{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Best ELD Experts?
              </span>
            </h2>
            <p className="text-2xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto">
              Join thousands of carriers who trust us to select, implement, and manage the best ELD solutions on their
              behalf. Get started today with our expert consultation and professional service that works exclusively for
              your success.
            </p>
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
              <a
                href="tg://resolve?domain=safetysupport2025"
                className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-500 shadow-2xl hover:shadow-orange-500/30 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-4">
                  Start Your Free Consultation
                  <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              <a
                href="https://wa.me/996508228328"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative border-2 border-orange-400 text-orange-400 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-orange-400 hover:text-white transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-4">
                  <Phone size={28} />
                  Get Instant Support
                </span>
                <div className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-12 mt-16 pt-16 border-t border-gray-700">
              <div className="flex items-center gap-3 text-gray-400">
                <Shield size={24} className="text-green-400" />
                <span className="font-semibold">SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Award size={24} className="text-orange-400" />
                <span className="font-semibold">FMCSA Approved</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock size={24} className="text-blue-400" />
                <span className="font-semibold">24/7 Expert Support</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Users size={24} className="text-purple-400" />
                <span className="font-semibold">5,000+ Satisfied Carriers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultimate Contact Section */}
      <section id="contact" className="py-40 px-4 bg-gradient-to-b from-[#1a2332] to-[#0f1419]">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/40 rounded-full px-8 py-4 text-purple-300 font-bold mb-8 backdrop-blur-sm">
              <MessageCircle size={24} />
              <span>Expert Support Team</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">Connect With Our Specialists</h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Ready to revolutionize your fleet operations? Our certified experts are standing by 24/7 to provide
              personalized consultation and immediate assistance.
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-20 max-w-7xl mx-auto">
            {/* Enhanced Contact Information */}
            <div className="space-y-10">
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: MessageCircle,
                    title: "Telegram Support",
                    description: "Instant messaging with our experts",
                    contact: "@safetysupport2025",
                    link: "tg://resolve?domain=safetysupport2025",
                    color: "blue",
                    badge: "Fastest Response",
                  },
                  {
                    icon: Phone,
                    title: "WhatsApp Professional",
                    description: "Voice & video calls available",
                    contact: "+996 508 228 328",
                    link: "https://wa.me/996508228328",
                    color: "green",
                    badge: "Voice Support",
                  },
                  {
                    icon: Mail,
                    title: "Enterprise Email",
                    description: "Professional correspondence",
                    contact: "workingeld@gmail.com",
                    link: "mailto:workingeld@gmail.com",
                    color: "orange",
                    badge: "Documentation",
                  },
                  {
                    icon: MapPin,
                    title: "National Coverage",
                    description: "Comprehensive service area",
                    contact: "All 50 U.S. States + Canada",
                    link: "#",
                    color: "purple",
                    badge: "Full Coverage",
                  },
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] border border-orange-400/30 rounded-3xl p-8 hover:border-orange-400/60 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-400/10 h-full">
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-xs font-bold">
                        {item.badge}
                      </div>
                      <div
                        className={`w-16 h-16 bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <item.icon size={32} className={`text-${item.color}-400`} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 mb-4 text-lg">{item.description}</p>
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-orange-400 hover:text-orange-300 font-bold transition-colors text-lg break-all"
                      >
                        {item.contact}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Business Information */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] border border-orange-400/30 rounded-3xl p-8 hover:border-orange-400/60 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Clock size={28} className="text-orange-400" />
                    Support Hours
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-lg">Emergency Support:</span>
                      <span className="text-green-400 font-bold">24/7/365</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-lg">Average Response:</span>
                      <span className="text-orange-400 font-bold">47 Seconds</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-lg">Languages Supported:</span>
                      <span className="text-blue-400 font-bold">15+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-lg">Success Rate:</span>
                      <span className="text-purple-400 font-bold">99.97%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] border border-orange-400/30 rounded-3xl p-8 hover:border-orange-400/60 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Award size={28} className="text-orange-400" />
                    Certifications
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-green-400" />
                      <span className="text-gray-300">FMCSA Registered Provider</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-green-400" />
                      <span className="text-gray-300">SOC 2 Type II Certified</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-green-400" />
                      <span className="text-gray-300">ISO 27001 Compliant</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-green-400" />
                      <span className="text-gray-300">DOT Audit Certified</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] border border-orange-400/30 rounded-3xl p-12 hover:border-orange-400/60 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Send size={28} className="text-orange-400" />
                Get Your Free Consultation
              </h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-[#0f1419] border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 text-lg"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-[#0f1419] border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 text-lg"
                      placeholder="your@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-300 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-[#0f1419] border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 text-lg"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="fleetSize" className="block text-sm font-bold text-gray-300 mb-3">
                      Fleet Size
                    </label>
                    <select
                      id="fleetSize"
                      name="fleetSize"
                      value={formData.fleetSize}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-[#0f1419] border border-gray-600 rounded-xl text-white focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 text-lg"
                    >
                      <option value="">Select fleet size</option>
                      <option value="1-5">1-5 Trucks</option>
                      <option value="6-25">6-25 Trucks</option>
                      <option value="26-100">26-100 Trucks</option>
                      <option value="100+">100+ Trucks</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-300 mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-[#0f1419] border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 text-lg"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-[#0f1419] border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 resize-none text-lg"
                    placeholder="Tell us about your fleet needs, current challenges, or specific questions..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-5 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl hover:shadow-orange-500/30 transform hover:-translate-y-1 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "loading" ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Opening WhatsApp & Telegram...</span>
                    </>
                  ) : formStatus === "success" ? (
                    <>
                      <CheckCircle size={24} />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : formStatus === "error" ? (
                    <>
                      <AlertCircle size={24} />
                      <span>Please try again</span>
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      <span>Send Message & Get Free Consultation</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 p-6 bg-orange-500/10 border border-orange-400/30 rounded-2xl">
                <p className="text-gray-300 text-center">
                  <strong className="text-orange-400">Instant Delivery:</strong> Your message will be automatically sent
                  to both our WhatsApp and Telegram support channels. We'll respond within 1 hour during business hours!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultimate Footer */}
      <footer className="bg-gradient-to-b from-[#0f1419] to-[#000000] text-gray-400 py-20 px-4 border-t border-orange-400/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            {/* Enhanced Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <Image
                    src="/nextlog-logo.png"
                    alt="NextLog FullService Logo"
                    width={72}
                    height={72}
                    className="rounded-full ring-4 ring-orange-400/40 shadow-2xl"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-[#0f1419] animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">NextLog</span>
                  <span className="text-sm text-orange-400 font-bold tracking-[0.2em] uppercase">FullService Pro</span>
                </div>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-lg text-lg">
                Your trusted ELD solution partner working exclusively on your behalf. We select and implement the best
                ELD systems available, trusted by over 5,000 carriers nationwide with professional-grade service since
                2017.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-bold">Online 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-orange-400">
                  <Shield size={20} />
                  <span className="font-bold">FMCSA Certified</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <Award size={20} />
                  <span className="font-bold">SOC 2 Compliant</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-xl mb-8">Professional Services</h3>
              <ul className="space-y-4">
                {[
                  "ELD Installation & Setup",
                  "DOT Compliance Management",
                  "IFTA Services & Filing",
                  "Fleet Analytics & Reporting",
                  "Driver Training Programs",
                  "Audit Protection Services",
                ].map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors text-lg">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h3 className="text-white font-bold text-xl mb-8">Expert Support</h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-blue-400" />
                  <div>
                    <a
                      href="tg://resolve?domain=safetysupport2025"
                      className="text-gray-400 hover:text-blue-400 transition-colors font-medium"
                    >
                      Telegram Support
                    </a>
                    <p className="text-gray-500 text-sm">Instant messaging</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-green-400" />
                  <div>
                    <a
                      href="https://wa.me/996508228328"
                      className="text-gray-400 hover:text-green-400 transition-colors font-medium"
                    >
                      WhatsApp Professional
                    </a>
                    <p className="text-gray-500 text-sm">Voice & video calls</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-orange-400" />
                  <div>
                    <a
                      href="mailto:workingeld@gmail.com"
                      className="text-gray-400 hover:text-orange-400 transition-colors font-medium"
                    >
                      Enterprise Email
                    </a>
                    <p className="text-gray-500 text-sm">Professional support</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-purple-400" />
                  <div>
                    <span className="text-gray-400 font-medium">National Coverage</span>
                    <p className="text-gray-500 text-sm">All 50 States + Canada</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="flex flex-col lg:flex-row items-center gap-6 text-sm">
                <p className="text-gray-400">&copy; 2025 NextLog FullService — All rights reserved</p>
                <div className="flex items-center gap-6">
                  <span className="text-orange-400">•</span>
                  <span className="text-gray-400">FMCSA Registered Provider</span>
                  <span className="text-orange-400">•</span>
                  <span className="text-gray-400">SOC 2 Type II Certified</span>
                  <span className="text-orange-400">•</span>
                  <span className="text-gray-400">ISO 27001 Compliant</span>
                </div>
              </div>
              <div className="flex items-center gap-8 text-sm">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                  Security
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors font-medium">
                  Compliance
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
