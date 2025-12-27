import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { PortfolioPage } from "./components/pages/PortfolioPage";
import { CareersPage } from "./components/pages/CareersPage";
import { ContactPage } from "./components/pages/ContactPage";

type PageType =
  | "home"
  | "about"
  | "services"
  | "portfolio"
  | "careers"
  | "contact";

export default function App() {
  const [activePage, setActivePage] =
    useState<PageType>("home");

  const handleNavigate = (page: string) => {
    setActivePage(page as PageType);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen bg-black">
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      <main>
        {activePage === "home" && (
          <HomePage onNavigate={handleNavigate} />
        )}
        {activePage === "about" && <AboutPage />}
        {activePage === "services" && (
          <ServicesPage onNavigate={handleNavigate} />
        )}
        {activePage === "portfolio" && <PortfolioPage />}
        {activePage === "careers" && <CareersPage />}
        {activePage === "contact" && <ContactPage />}
      </main>

      <Footer />
    </div>
  );
}