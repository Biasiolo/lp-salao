import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-elegant-purple/70"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Salão de Beleza
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
          Transforme sua beleza em arte.<br />
          Descubra o melhor de você no nosso salão.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('agendamento')}
            className="text-lg px-8 py-4"
          >
            Agendar Horário
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('servicos')}
            className="text-lg px-8 py-4 bg-white/20 border-white text-white hover:bg-white hover:text-primary"
          >
            Nossos Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;