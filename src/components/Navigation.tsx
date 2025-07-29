import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="text-2xl font-bold cursor-pointer"
            onClick={scrollToTop}
          >
            <span className={`transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              All Beauty
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Início', action: scrollToTop },
              { label: 'Sobre', action: () => scrollToSection('sobre') },
              { label: 'Serviços', action: () => scrollToSection('servicos') },
              { label: 'Agendamento', action: () => scrollToSection('agendamento') },
              { label: 'Localização', action: () => scrollToSection('localizacao') },
              { label: 'Contato', action: () => scrollToSection('contato') }
            ].map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className={`transition-colors duration-300 hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white hover:text-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant={isScrolled ? "default" : "outline"}
              onClick={() => scrollToSection('agendamento')}
              className={isScrolled ? "" : "bg-white/20 border-white text-white hover:bg-white hover:text-primary"}
            >
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              {[
                { label: 'Início', action: scrollToTop },
                { label: 'Sobre', action: () => scrollToSection('sobre') },
                { label: 'Serviços', action: () => scrollToSection('servicos') },
                { label: 'Agendamento', action: () => scrollToSection('agendamento') },
                { label: 'Localização', action: () => scrollToSection('localizacao') },
                { label: 'Contato', action: () => scrollToSection('contato') }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="text-left py-2 text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('agendamento')}
                className="w-full"
              >
                Agendar Horário
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;