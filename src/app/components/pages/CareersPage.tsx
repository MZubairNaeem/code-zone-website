import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Briefcase, Users, TrendingUp, Heart, Code, Palette, Target, ArrowRight } from "lucide-react";

export function CareersPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning with training budgets and career advancement paths",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive, inclusive environment",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and generous PTO",
    },
    {
      icon: Target,
      title: "Challenging Projects",
      description: "Work on cutting-edge technologies and impactful client projects",
    },
  ];

  const perks = [
    "Competitive salary & performance bonuses",
    "Health, dental & vision insurance",
    "401(k) with company match",
    "Flexible working hours",
    "Remote work options",
    "Professional development budget",
    "Latest tech equipment",
    "Team building events",
    "Snacks & beverages",
    "Gym membership",
    "Parental leave",
    "Referral bonuses",
  ];

  const positions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      description: "We're looking for an experienced full-stack developer to lead complex web application projects.",
      requirements: [
        "5+ years of full-stack development experience",
        "Expert in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS/Azure)",
        "Strong problem-solving skills",
      ],
    },
    {
      title: "Mobile App Developer (React Native)",
      department: "Engineering",
      location: "Remote / New York, NY",
      type: "Full-time",
      description: "Join our mobile team to build beautiful, performant cross-platform applications.",
      requirements: [
        "3+ years React Native development",
        "Published apps on App Store & Play Store",
        "Knowledge of native iOS/Android",
        "Experience with mobile CI/CD",
      ],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Los Angeles, CA",
      type: "Full-time",
      description: "Create exceptional user experiences for web and mobile applications.",
      requirements: [
        "3+ years UI/UX design experience",
        "Expert in Figma and Adobe Creative Suite",
        "Strong portfolio demonstrating user-centered design",
        "Understanding of design systems",
      ],
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "Remote / Boston, MA",
      type: "Full-time",
      description: "Build intelligent solutions and integrate AI/ML capabilities into client projects.",
      requirements: [
        "3+ years in AI/ML development",
        "Experience with TensorFlow, PyTorch",
        "Strong Python programming skills",
        "Knowledge of NLP and computer vision",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Seattle, WA",
      type: "Full-time",
      description: "Manage infrastructure, automate deployments, and ensure system reliability.",
      requirements: [
        "3+ years DevOps experience",
        "Expert in AWS/Azure/GCP",
        "Proficient in Docker, Kubernetes",
        "Experience with CI/CD pipelines",
      ],
    },
    {
      title: "Project Manager",
      department: "Management",
      location: "Hybrid / San Francisco, CA",
      type: "Full-time",
      description: "Lead client projects from inception to delivery, ensuring quality and timelines.",
      requirements: [
        "3+ years project management in tech",
        "Agile/Scrum certification preferred",
        "Excellent communication skills",
        "Experience with Jira, Asana",
      ],
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-400">
            Be part of a dynamic team building innovative software solutions. 
            We're always looking for talented individuals who are passionate about technology.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Why CodeZone?</h2>
              <p className="text-gray-400 mb-6">
                At CodeZone, we believe that great software comes from great teams. 
                We foster a culture of innovation, collaboration, and continuous learning 
                where everyone's ideas are valued and creativity thrives.
              </p>
              <p className="text-gray-400 mb-6">
                Whether you're an experienced developer, a creative designer, or a strategic 
                thinker, you'll find opportunities to grow, challenge yourself, and make 
                a real impact on exciting projects for clients around the world.
              </p>
              <p className="text-gray-400">
                We're not just building software – we're building careers and fostering 
                a community of passionate professionals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                    <Icon className="w-10 h-10 text-yellow-400 mb-4" />
                    <h3 className="mb-2 text-white">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We invest in our team's wellbeing and professional growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {perks.map((perk, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-black text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">{perk}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Open Positions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find your next career opportunity
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="p-8 bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="mb-2 text-white">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 flex-shrink-0">
                    Apply Now
                  </Button>
                </div>

                <p className="text-gray-400 mb-6">{position.description}</p>

                <div>
                  <h4 className="mb-3 text-white">Requirements:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2 text-gray-400">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Hiring Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent and straightforward - here's what to expect
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply", description: "Submit your application and resume" },
              { step: "02", title: "Review", description: "Our team reviews your profile" },
              { step: "03", title: "Interview", description: "Technical and cultural fit assessment" },
              { step: "04", title: "Offer", description: "Welcome to the team!" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-black">{item.step}</span>
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-400 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Don't See the Right Position?</h2>
          <p className="text-xl mb-10 opacity-90">
            We're always interested in meeting talented individuals. Send us your resume 
            and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-900">
            Send Your Resume
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
