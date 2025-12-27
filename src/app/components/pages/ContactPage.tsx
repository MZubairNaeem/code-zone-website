import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@codezone.com",
      subContent: "hello@codezone.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (234) 567-890",
      subContent: "+1 (234) 567-891",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Tech Street",
      subContent: "Silicon Valley, CA 94025",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      subContent: "Sat - Sun: Closed",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Let's Start a Conversation</h1>
          <p className="text-xl text-gray-400">
            Have a project in mind? We'd love to hear from you. 
            Get in touch and let's build something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all text-center">
                  <div className="w-14 h-14 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="mb-3 text-white">{info.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{info.content}</p>
                  <p className="text-gray-400 text-sm">{info.subContent}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (234) 567-890"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your Company"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="design">UI/UX Design</option>
                    <option value="ai">AI & Automation</option>
                    <option value="custom">Custom Software</option>
                    <option value="marketing">Digital Marketing</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="mt-2"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="mb-6">Our Location</h2>
              
              {/* Map Placeholder */}
              <div className="h-80 bg-gray-200 rounded-lg mb-8 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Map Integration</p>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <h3 className="mb-4">Why Choose CodeZone?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Free initial consultation and project estimation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Dedicated project manager for seamless communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Agile development with regular updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span>Post-launch support and maintenance</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We provide detailed timelines during the consultation phase.",
              },
              {
                question: "Do you offer post-launch support?",
                answer: "Yes, we provide ongoing support and maintenance packages. We're committed to ensuring your software continues to perform optimally after launch.",
              },
              {
                question: "What is your pricing model?",
                answer: "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. Pricing depends on project scope, complexity, and timeline.",
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely! We're experienced in collaborating with in-house teams and can integrate seamlessly into your existing workflows and processes.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 bg-white/5 border-white/10">
                <h3 className="mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
