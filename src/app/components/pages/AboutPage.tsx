import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Users, Target, Lightbulb, Award, Globe, Rocket } from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Your success is our priority. We build lasting relationships based on trust and transparency.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that drive business growth.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to delivering world-class software with rigorous testing and attention to detail.",
    },
  ];

  const team = [
    {
      name: "David Thompson",
      role: "CEO & Founder",
      expertise: "15+ years in software development",
    },
    {
      name: "Sarah Mitchell",
      role: "CTO",
      expertise: "AI & Machine Learning Expert",
    },
    {
      name: "James Rodriguez",
      role: "Head of Design",
      expertise: "Award-winning UX Designer",
    },
    {
      name: "Emily Chen",
      role: "Lead Developer",
      expertise: "Full-Stack Architecture Specialist",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">About CodeCraft</h1>
          <p className="text-xl text-gray-400">
            We're a forward-thinking software house dedicated to building intelligent, 
            scalable solutions that empower businesses to thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2014, CodeCraft emerged from a simple belief: that technology 
                should be a catalyst for growth, not a barrier. What started as a small team 
                of passionate developers has grown into a full-service software house serving 
                clients across the globe.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've delivered 150+ projects, helped businesses scale their 
                operations, and built long-term partnerships based on trust and exceptional results.
              </p>
              <p className="text-gray-600">
                Today, we continue to push boundaries, embracing emerging technologies like 
                AI and automation to create smarter, more efficient solutions for modern businesses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <div className="text-4xl text-yellow-400 mb-2">150+</div>
                <p className="text-gray-600">Projects Completed</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl text-yellow-400 mb-2">50+</div>
                <p className="text-gray-600">Happy Clients</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl text-yellow-400 mb-2">30+</div>
                <p className="text-gray-600">Team Members</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl text-yellow-400 mb-2">15+</div>
                <p className="text-gray-600">Countries Served</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-10 bg-white/5 border-white/10">
              <Globe className="w-12 h-12 text-yellow-400 mb-6" />
              <h2 className="mb-4 text-white">Our Mission</h2>
              <p className="text-gray-400">
                To empower businesses with innovative software solutions that drive growth, 
                efficiency, and competitive advantage. We're committed to delivering excellence 
                through collaboration, creativity, and cutting-edge technology.
              </p>
            </Card>
            <Card className="p-10 bg-white/5 border-white/10">
              <Rocket className="w-12 h-12 text-yellow-400 mb-6" />
              <h2 className="mb-4 text-white">Our Vision</h2>
              <p className="text-gray-400">
                To be the most trusted software partner for growing businesses worldwide, 
                recognized for our innovation, quality, and unwavering commitment to client success. 
                We envision a future where technology seamlessly drives business transformation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experienced professionals driving innovation and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all">
                <div className="h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-20 h-20 text-white/20" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-1 text-white">{member.name}</h3>
                  <p className="text-yellow-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.expertise}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-400 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss how we can help your business grow with innovative software solutions.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-900">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
