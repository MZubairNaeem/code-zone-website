import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Code, ArrowRight, Smartphone, Globe, TrendingUp } from "lucide-react";
import { useState } from "react";

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = ["all", "web", "mobile", "design", "ai"];

  const projects = [
    {
      id: 1,
      title: "FinanceFlow - Banking App",
      category: "mobile",
      description: "A secure mobile banking application with biometric authentication, real-time transactions, and AI-powered financial insights.",
      technologies: ["React Native", "Node.js", "MongoDB", "AI/ML"],
      results: ["500K+ Downloads", "4.8★ Rating", "40% Cost Reduction"],
      image: "mobile",
    },
    {
      id: 2,
      title: "ShopSmart - E-Commerce Platform",
      category: "web",
      description: "Full-featured e-commerce platform with AI recommendations, advanced search, and seamless checkout experience.",
      technologies: ["React", "Next.js", "PostgreSQL", "Stripe"],
      results: ["2M+ Monthly Users", "150% Revenue Growth", "99.9% Uptime"],
      image: "web",
    },
    {
      id: 3,
      title: "HealthHub - Patient Portal",
      category: "web",
      description: "Healthcare management system with appointment scheduling, telemedicine, and patient record management.",
      technologies: ["Vue.js", "Python", "Django", "AWS"],
      results: ["50K+ Patients", "30% Cost Savings", "HIPAA Compliant"],
      image: "web",
    },
    {
      id: 4,
      title: "FitTrack - Fitness Mobile App",
      category: "mobile",
      description: "Comprehensive fitness tracking app with workout plans, nutrition logging, and progress analytics.",
      technologies: ["Flutter", "Firebase", "ML Kit"],
      results: ["1M+ Downloads", "4.7★ Rating", "85% Retention"],
      image: "mobile",
    },
    {
      id: 5,
      title: "DataViz Pro - Analytics Dashboard",
      category: "web",
      description: "Business intelligence platform with real-time data visualization, custom reports, and predictive analytics.",
      technologies: ["React", "D3.js", "Python", "TensorFlow"],
      results: ["100+ Enterprise Clients", "50% Faster Insights", "ROI in 6 Months"],
      image: "web",
    },
    {
      id: 6,
      title: "TravelMate - Booking Platform",
      category: "web",
      description: "Travel booking platform with AI-powered recommendations, price tracking, and itinerary planning.",
      technologies: ["Next.js", "TypeScript", "GraphQL", "Redis"],
      results: ["5M+ Bookings", "4.9★ Rating", "35% Conversion Rate"],
      image: "web",
    },
    {
      id: 7,
      title: "StyleHub - Fashion E-Commerce",
      category: "design",
      description: "Modern fashion e-commerce with AR try-on, personalized styling, and social shopping features.",
      technologies: ["Figma", "React", "Three.js", "AR.js"],
      results: ["Award-Winning Design", "60% CTR Increase", "Featured in Awwwards"],
      image: "design",
    },
    {
      id: 8,
      title: "ChatBot AI - Customer Support",
      category: "ai",
      description: "Intelligent chatbot with natural language understanding, multi-language support, and sentiment analysis.",
      technologies: ["Python", "OpenAI", "FastAPI", "Redis"],
      results: ["90% Query Resolution", "24/7 Support", "70% Cost Reduction"],
      image: "ai",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const getGradient = (type: string) => {
    switch(type) {
      case "mobile":
        return "from-blue-500 to-purple-600";
      case "web":
        return "from-yellow-400 to-orange-500";
      case "design":
        return "from-pink-500 to-red-500";
      case "ai":
        return "from-green-500 to-teal-600";
      default:
        return "from-gray-500 to-gray-700";
    }
  };

  const getIcon = (type: string) => {
    switch(type) {
      case "mobile":
        return <Smartphone className="w-16 h-16 text-white/20" />;
      case "web":
        return <Globe className="w-16 h-16 text-white/20" />;
      case "design":
        return <Code className="w-16 h-16 text-white/20" />;
      case "ai":
        return <TrendingUp className="w-16 h-16 text-white/20" />;
      default:
        return <Code className="w-16 h-16 text-white/20" />;
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-400">
            Explore our successful projects and see how we've helped businesses 
            transform their digital presence and achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={
                  activeFilter === category
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "border-white/20 text-white hover:bg-white/10"
                }
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all group cursor-pointer"
              >
                {/* Project Image */}
                <div className={`h-64 bg-gradient-to-br ${getGradient(project.category)} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {getIcon(project.category)}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-sm capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Key Results:</div>
                    <div className="grid grid-cols-3 gap-2">
                      {project.results.map((result, index) => (
                        <div key={index} className="text-center p-2 bg-yellow-400/10 rounded">
                          <div className="text-xs text-yellow-400">{result}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black group-hover:bg-yellow-400 group-hover:text-black"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Impact in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "10M+", label: "Users Reached" },
              { value: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-400 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Want to Be Our Next Success Story?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's create something amazing together. Get in touch and start your journey to success.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-900">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
