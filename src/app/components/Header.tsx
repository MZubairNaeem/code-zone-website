import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export function Header({ activePage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Careers", id: "careers" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <span className="text-2xl tracking-tight">
              <span className="text-white">Code</span>
              <span className="text-yellow-400">Craft</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm transition-colors hover:text-yellow-400 ${
                  activePage === item.id ? "text-yellow-400" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => onNavigate("contact")}
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <nav className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm transition-colors hover:text-yellow-400 ${
                  activePage === item.id ? "text-yellow-400" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => {
                onNavigate("contact");
                setMobileMenuOpen(false);
              }}
              className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
