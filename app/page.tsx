"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, ChevronRight } from "lucide-react"

export default function OTRELDPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#202c2c] text-white">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-[#1f2b2b]/95 backdrop-blur-sm shadow-lg"
            : "py-6 bg-gradient-to-r from-[#1f2b2b] to-[#2e3d3d]"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/otreld.png" alt="OTR ELD Logo" width={50} height={50} className="rounded-lg" />
            <span className="text-2xl font-bold text-[#00ffcc]">OTR ELD</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-[#00ffcc] transition-colors">
              Services
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-[#00ffcc] transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-300 hover:text-[#00ffcc] transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-[#00ffcc] transition-colors">
              Contact
            </a>
          </nav>
          <a
            href="tg://resolve?domain=safetysupport2025"
            className="hidden md:flex items-center gap-2 bg-[#00ffcc] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#00e6b8] transition-colors"
          >
            <Phone size={18} />
            <span>24/7 Support</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-[#1f2b2b] to-[#202c2c]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[#00ffcc]">Professional</span> ELD Solutions for Modern Trucking
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Providing comprehensive ELD, safety & compliance services with multilingual support in 10+ languages.
                Your reliable partner on every mile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#pricing"
                  className="bg-[#00ffcc] text-black px-8 py-4 rounded-lg font-medium hover:bg-[#00e6b8] transition-colors text-center"
                >
                  View Pricing
                </a>
                <a
                  href="#contact"
                  className="border border-[#00ffcc] text-[#00ffcc] px-8 py-4 rounded-lg font-medium hover:bg-[#00ffcc] hover:text-black transition-colors text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-[#00ffcc]/20 rounded-3xl blur-3xl"></div>
                <Image
                  src="/otreld.png"
                  alt="OTR ELD Logo"
                  width={400}
                  height={400}
                  className="relative z-10 rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Truck Background */}
      <section
        id="about"
        className="py-24 relative bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(32, 44, 44, 0.85), rgba(32, 44, 44, 0.85)), url('https://cdn.pixabay.com/photo/2016/11/29/06/15/automobile-1867045_1280.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#f5e9d0] mb-6">Reliable ELD Services</h2>
            <p className="text-xl leading-relaxed text-white">
              We offer quick onboarding in just 10 minutes, 24/7 multilingual support in over 10 languages, and full
              FMCSA-compliant solutions tailored for both small carriers and large fleets. With more than 7 years of
              industry experience, we're your trusted partner on the road.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c2626]/80 backdrop-blur-sm p-8 rounded-xl border border-[#00ffcc]/30 hover:border-[#00ffcc] transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#00ffcc]/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} className="text-[#00ffcc]" />
              </div>
              <h3 className="text-2xl font-bold text-[#00ffcc] mb-4">Quick Setup</h3>
              <p className="text-gray-300">
                Get your ELD system up and running in just 10 minutes with our streamlined onboarding process.
              </p>
            </div>

            <div className="bg-[#1c2626]/80 backdrop-blur-sm p-8 rounded-xl border border-[#00ffcc]/30 hover:border-[#00ffcc] transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#00ffcc]/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} className="text-[#00ffcc]" />
              </div>
              <h3 className="text-2xl font-bold text-[#00ffcc] mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Access multilingual customer support anytime, anywhere across all 50 states.
              </p>
            </div>

            <div className="bg-[#1c2626]/80 backdrop-blur-sm p-8 rounded-xl border border-[#00ffcc]/30 hover:border-[#00ffcc] transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#00ffcc]/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} className="text-[#00ffcc]" />
              </div>
              <h3 className="text-2xl font-bold text-[#00ffcc] mb-4">FMCSA Compliant</h3>
              <p className="text-gray-300">
                Stay fully compliant with all FMCSA regulations with our certified ELD solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-[#202c2c]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#00ffcc] font-medium">WHAT WE OFFER</span>
            <h2 className="text-4xl font-bold text-[#f5e9d0] mt-2 mb-6">Our Services</h2>
            <p className="text-xl text-gray-300">
              Comprehensive solutions for all your trucking compliance and management needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ELD Setup & Installation",
                description: "Quick and hassle-free Electronic Logging Device setup and activation for your fleet",
              },
              {
                title: "DOT Compliance",
                description: "Complete DOT compliance management and safety audit preparation services",
              },
              {
                title: "IFTA Reporting",
                description: "Accurate and timely IFTA reporting and IRP support for interstate carriers",
              },
              {
                title: "Fleet Management",
                description: "Professional consulting services to optimize your fleet operations",
              },
              {
                title: "Multilingual Support",
                description: "24/7 customer support in over 10 languages for diverse trucking teams",
              },
              {
                title: "Safety Training",
                description: "Comprehensive safety training programs for drivers and fleet managers",
              },
            ].map((service, index) => (
              <div key={index} className="bg-[#1c2626] p-8 rounded-xl hover:bg-[#1c2626]/80 transition-colors group">
                <h3 className="text-2xl font-bold text-[#00ffcc] mb-4 group-hover:translate-x-2 transition-transform">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <a
                  href="#contact"
                  className="flex items-center text-[#00ffcc] font-medium group-hover:translate-x-2 transition-transform"
                >
                  Learn more <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-[#1c2626]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#00ffcc] font-medium">TESTIMONIALS</span>
            <h2 className="text-4xl font-bold text-[#f5e9d0] mt-2 mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "OTR ELD has been a game-changer for our fleet. Their support team is always available and the system is incredibly reliable.",
                author: "Michael T., Fleet Manager",
              },
              {
                quote:
                  "The multilingual support has been crucial for our diverse team of drivers. Setup was quick and the compliance assistance is top-notch.",
                author: "Sarah K., Operations Director",
              },
              {
                quote:
                  "As an owner-operator, I needed a simple solution without the headaches. OTR ELD delivered exactly what I needed at a fair price.",
                author: "David R., Owner-Operator",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#202c2c] p-8 rounded-xl border-l-4 border-[#00ffcc]">
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <p className="text-[#f5e9d0] font-medium">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-[#202c2c]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#00ffcc] font-medium">PRICING</span>
            <h2 className="text-4xl font-bold text-[#f5e9d0] mt-2 mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that works best for your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* ELD Activation */}
            <div className="bg-[#1c2626] border border-[#00ffcc]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#00ffcc] hover:shadow-xl hover:shadow-[#00ffcc]/20 group">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#00ffcc] mb-2">ELD Activation</h3>
                <p className="text-gray-400 mb-6 h-12">Full system setup and activation</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold text-[#f5e9d0]">$100</span>
                  <span className="text-gray-400 mb-1">one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Device configuration", "Driver account setup", "Mobile app installation", "Initial training"].map(
                    (feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle size={18} className="text-[#00ffcc]" />
                        <span>{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <a
                href="tg://resolve?domain=safetysupport2025"
                className="block bg-[#1f2b2b] group-hover:bg-[#00ffcc] text-[#00ffcc] group-hover:text-black font-medium py-4 text-center transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Full Support Plan */}
            <div className="bg-[#1c2626] border border-[#00ffcc] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00ffcc]/20 relative group">
              <div className="absolute top-0 right-0 bg-[#00ffcc] text-black font-medium py-1 px-4 rounded-bl-lg">
                Popular
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#00ffcc] mb-2">Full Support Plan</h3>
                <p className="text-gray-400 mb-6 h-12">24/7 Support, Compliance Assistance, IFTA</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold text-[#f5e9d0]">$150</span>
                  <span className="text-gray-400 mb-1">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "All ELD Activation features",
                    "24/7 multilingual support",
                    "IFTA reporting assistance",
                    "DOT compliance monitoring",
                    "Regular software updates",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-[#00ffcc]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="tg://resolve?domain=safetysupport2025"
                className="block bg-[#00ffcc] text-black font-medium py-4 text-center hover:bg-[#00e6b8] transition-colors"
              >
                Subscribe
              </a>
            </div>

            {/* Fleet Solutions */}
            <div className="bg-[#1c2626] border border-[#00ffcc]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#00ffcc] hover:shadow-xl hover:shadow-[#00ffcc]/20 group">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#00ffcc] mb-2">Fleet Solutions</h3>
                <p className="text-gray-400 mb-6 h-12">Custom support packages for 5+ trucks</p>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold text-[#f5e9d0]">Custom</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "All Full Support features",
                    "Volume discounts",
                    "Dedicated account manager",
                    "Fleet management tools",
                    "Custom reporting",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-[#00ffcc]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="tg://resolve?domain=safetysupport2025"
                className="block bg-[#1f2b2b] group-hover:bg-[#00ffcc] text-[#00ffcc] group-hover:text-black font-medium py-4 text-center transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1f2b2b] to-[#2e3d3d]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f5e9d0] mb-6">
              Ready to streamline your ELD compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of satisfied carriers across the United States</p>
            <a
              href="tg://resolve?domain=safetysupport2025"
              className="inline-flex items-center gap-2 bg-[#00ffcc] text-black px-8 py-4 rounded-lg font-medium hover:bg-[#00e6b8] transition-colors"
            >
              Get Started Today <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-[#202c2c]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[#00ffcc] font-medium">CONTACT US</span>
            <h2 className="text-4xl font-bold text-[#f5e9d0] mt-2 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300">Have questions? Our team is ready to assist you 24/7</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#1c2626] p-8 rounded-xl text-center hover:bg-[#1c2626]/80 transition-colors">
              <div className="w-16 h-16 bg-[#00ffcc]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={28} className="text-[#00ffcc]" />
              </div>
              <h3 className="text-xl font-bold text-[#f5e9d0] mb-2">Telegram</h3>
              <a href="tg://resolve?domain=safetysupport2025" className="text-[#00ffcc] hover:underline">
                @safetysupport2025
              </a>
            </div>

            <div className="bg-[#1c2626] p-8 rounded-xl text-center hover:bg-[#1c2626]/80 transition-colors">
              <div className="w-16 h-16 bg-[#00ffcc]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={28} className="text-[#00ffcc]" />
              </div>
              <h3 className="text-xl font-bold text-[#f5e9d0] mb-2">Email</h3>
              <a href="mailto:fortexeld@gmail.com" className="text-[#00ffcc] hover:underline">
                fortexeld@gmail.com
              </a>
            </div>

            <div className="bg-[#1c2626] p-8 rounded-xl text-center hover:bg-[#1c2626]/80 transition-colors">
              <div className="w-16 h-16 bg-[#00ffcc]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={28} className="text-[#00ffcc]" />
              </div>
              <h3 className="text-xl font-bold text-[#f5e9d0] mb-2">Coverage</h3>
              <p className="text-gray-300">Serving all 50 U.S. States</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f2b2b] text-gray-400 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <Image src="/otreld.png" alt="OTR ELD Logo" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold text-[#00ffcc]">OTR ELD</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#services" className="text-gray-400 hover:text-[#00ffcc] transition-colors">
                Services
              </a>
              <a href="#pricing" className="text-gray-400 hover:text-[#00ffcc] transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-gray-400 hover:text-[#00ffcc] transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-400 hover:text-[#00ffcc] transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 OTR ELD — All rights reserved</p>
            <p className="mt-4 md:mt-0">FMCSA Registered Provider</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
