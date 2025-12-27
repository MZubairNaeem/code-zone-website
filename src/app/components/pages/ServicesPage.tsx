import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Code, Smartphone, Palette, Bot, TrendingUp, Globe, Shield, Sparkles, ArrowRight, Check } from "lucide-react";

interface ServicePageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicePageProps) {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Build powerful, scalable web applications that drive business growth.",
      features: [
        "Custom Web Applications",
        "E-Commerce Platforms",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
        "CMS Development",
        "Web Portals & Dashboards",
      ],
      technologies: ["React", "Node.js", "Python", "PHP", "Next.js", "Vue.js"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions for iOS and Android.",
      features: [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform Apps (React Native)",
        "App Store Optimization",
        "Mobile Backend Development",
        "App Maintenance & Updates",
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Interaction Design",
        "Usability Testing",
        "Design System Creation",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Intelligent solutions that optimize processes and enhance decision-making.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Process Automation",
        "Chatbots & Virtual Assistants",
        "Predictive Analytics",
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Python"],
    },
    {
      icon: Globe,
      title: "Custom Software Solutions",
      description: "Tailored software designed specifically for your unique business needs.",
      features: [
        "Enterprise Software",
        "SaaS Platforms",
        "Business Process Management",
        "Legacy System Modernization",
        "Third-Party Integrations",
        "System Architecture Design",
      ],
      technologies: ["Java", "C#", ".NET", "Python", "Microservices", "Docker"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven strategies to grow your online presence and reach.",
      features: [
        "SEO & Content Marketing",
        "Social Media Marketing",
        "PPC Advertising",
        "Email Marketing Campaigns",
        "Analytics & Reporting",
        "Conversion Rate Optimization",
      ],
      technologies: ["Google Analytics", "SEMrush", "Hubspot", "Mailchimp", "Meta Ads"],
    },
    {
      icon: Shield,
      title: "QA & Testing",
      description: "Comprehensive testing to ensure bug-free, reliable software delivery.",
      features: [
        "Manual Testing",
        "Automated Testing",
        "Performance Testing",
        "Security Testing",
        "Mobile Testing",
        "Regression Testing",
      ],
      technologies: ["Selenium", "Jest", "Cypress", "JMeter", "Postman", "JIRA"],
    },
    {
      icon: Sparkles,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure and migration services.",
      features: [
        "Cloud Migration",
        "Cloud Architecture Design",
        "DevOps & CI/CD",
        "Cloud Security",
        "Serverless Applications",
        "Cloud Cost Optimization",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your goals, requirements, and challenges to create a strategic roadmap.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our designers create intuitive interfaces and interactive prototypes for your feedback.",
    },
    {
      step: "03",
      title: "Development",
      description: "Our development team brings designs to life using the latest technologies and best practices.",
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Rigorous testing ensures your software is bug-free, secure, and performs optimally.",
    },
    {
      step: "05",
      title: "Deployment",
      description: "We handle the launch process and ensure a smooth transition to production.",
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support to keep your software running smoothly and up-to-date.",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Our Services</h1>
          <p className="text-xl text-gray-400">
            Comprehensive digital solutions to transform your business and drive growth. 
            From concept to deployment and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`p-8 md:p-12 ${
                  index % 2 === 0
                    ? "bg-white text-black"
                    : "bg-white/5 border-white/10 text-white"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
                      index % 2 === 0 ? "bg-yellow-400" : "bg-yellow-400/10"
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        index % 2 === 0 ? "text-black" : "text-yellow-400"
                      }`} />
                    </div>
                    <h2 className={`mb-4 ${index % 2 === 0 ? "text-black" : "text-white"}`}>
                      {service.title}
                    </h2>
                    <p className={`mb-6 ${index % 2 === 0 ? "text-gray-600" : "text-gray-400"}`}>
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className={`mb-3 ${index % 2 === 0 ? "text-black" : "text-white"}`}>
                        Technologies We Use:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 rounded-full text-sm ${
                              index % 2 === 0
                                ? "bg-gray-100 text-gray-700"
                                : "bg-white/10 text-gray-300"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button
                      className={index % 2 === 0
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-yellow-400 text-black hover:bg-yellow-500"
                      }
                      onClick={() => onNavigate("contact")}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  <div>
                    <h4 className={`mb-4 ${index % 2 === 0 ? "text-black" : "text-white"}`}>
                      What We Offer:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            index % 2 === 0 ? "text-yellow-400" : "text-yellow-400"
                          }`} />
                          <span className={index % 2 === 0 ? "text-gray-700" : "text-gray-300"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and on-time delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="text-5xl text-yellow-400 mb-4">{item.step}</div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-400 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss your project and create a customized solution that fits your needs and budget.
          </p>
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-900"
            onClick={() => onNavigate("contact")}
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
