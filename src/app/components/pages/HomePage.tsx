import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Code, Smartphone, Palette, Bot, TrendingUp, Target, Check, Users, Lightbulb, ArrowRight, Star, Quote, Sparkles, Zap, Rocket, Shield, Clock, Globe } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Scalable, responsive, and high-performance web applications using modern technologies.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android with seamless UX.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality and usability.",
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Intelligent automation and AI-powered solutions to optimize your business processes.",
    },
    {
      icon: Globe,
      title: "Custom Software Solutions",
      description: "Tailored software designed specifically for your unique business needs.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence and reach.",
    },
    {
      icon: Shield,
      title: "QA & Testing",
      description: "Comprehensive testing services ensuring bug-free, reliable software delivery.",
    },
    {
      icon: Sparkles,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure and migration services for modern businesses.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Rocket,
      title: "Smart & Scalable Solutions",
      description: "Built to grow with your business",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "10+ years of combined expertise",
    },
    {
      icon: Zap,
      title: "Automation-Driven",
      description: "Efficient processes, faster delivery",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Committed to meeting deadlines",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Growth Focus",
      description: "Partnerships that evolve with you",
    },
    {
      icon: Target,
      title: "Results-Oriented",
      description: "Focused on your business goals",
    },
  ];

  const process = [
    { title: "Discover", description: "Understanding your vision & goals" },
    { title: "Design", description: "Creating intuitive user experiences" },
    { title: "Develop", description: "Building with cutting-edge tech" },
    { title: "Test", description: "Ensuring quality & performance" },
    { title: "Launch", description: "Deploying to production" },
    { title: "Scale", description: "Growing with your success" },
  ];

  const portfolio = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with AI recommendations",
      category: "Web Development",
    },
    {
      title: "FinTech Mobile App",
      description: "Secure banking solution with biometric authentication",
      category: "Mobile App",
    },
    {
      title: "Healthcare Dashboard",
      description: "Real-time patient monitoring and analytics",
      category: "Custom Software",
    },
    {
      title: "SaaS Analytics Tool",
      description: "Business intelligence platform for data-driven decisions",
      category: "Web Development",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "CodeZone transformed our vision into reality. Their team's expertise in AI automation helped us reduce operational costs by 40%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, HealthHub",
      content: "Outstanding work on our healthcare platform. The attention to detail and commitment to quality exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, FinanceFlow",
      content: "Professional, reliable, and innovative. CodeZone delivered our mobile app on time and it's been performing flawlessly.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-400">Award-Winning Software House</span>
          </div>
          
          <h1 className="mb-6 max-w-4xl mx-auto">
            Building Smart Software for Growing Businesses
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            End-to-end digital solutions from web & mobile development to AI automation. 
            We transform ideas into scalable, high-performance software.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-400/50 transition-all"
              onClick={() => onNavigate("contact")}
            >
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-black hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-400/50 transition-all"
              onClick={() => onNavigate("portfolio")}
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">About CodeZone</h2>
              <p className="text-gray-600 mb-4">
                We're a team of passionate developers, designers, and innovators dedicated to 
                building software that makes a difference. With over a decade of experience, 
                we've helped businesses across industries transform their digital presence.
              </p>
              <p className="text-gray-600 mb-6">
                Our focus is on creating scalable, future-proof solutions that drive growth 
                and efficiency. We believe in long-term partnerships and delivering value 
                that extends beyond the initial launch.
              </p>
              <Button
                className="bg-black text-white hover:bg-gray-800"
                onClick={() => onNavigate("about")}
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Lightbulb className="w-10 h-10 mb-4 text-yellow-400" />
                <h3 className="mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Cutting-edge solutions for modern challenges</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Rocket className="w-10 h-10 mb-4 text-yellow-400" />
                <h3 className="mb-2">Scalability</h3>
                <p className="text-sm text-gray-600">Built to grow with your business</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Shield className="w-10 h-10 mb-4 text-yellow-400" />
                <h3 className="mb-2">Security</h3>
                <p className="text-sm text-gray-600">Enterprise-grade protection</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Users className="w-10 h-10 mb-4 text-yellow-400" />
                <h3 className="mb-2">Partnership</h3>
                <p className="text-sm text-gray-600">Your success is our mission</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-white/5 border-white/10 hover:bg-white/10 hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-400/20 cursor-pointer group"
                >
                  <div className="w-14 h-14 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition-colors">
                    <Icon className="w-7 h-7 text-yellow-400 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="mb-3 text-white">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="bg-yellow-400 text-black border border-yellow-400 hover:bg-white hover:text-black transition-colors duration-300"
              onClick={() => onNavigate("services")}
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose CodeZone?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400/10 border-2 border-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-yellow-400">{index + 1}</span>
                </div>
                <h3 className="mb-2 text-white">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our latest work and success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="h-64 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-20 h-20 text-white/20" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-yellow-600 mb-2">{project.category}</div>
                  <h3 className="mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button variant="outline" size="sm" className="group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => onNavigate("portfolio")}
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                <Quote className="w-10 h-10 text-yellow-400 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-400 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Let's Build Something Powerful Together</h2>
          <p className="text-xl mb-10 opacity-90">
            Ready to transform your vision into reality? Our team is here to help you succeed.
          </p>
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-900 hover:shadow-2xl transition-all"
            onClick={() => onNavigate("contact")}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
