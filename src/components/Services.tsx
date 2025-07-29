import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Palette, Sparkles, Crown, Heart, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Corte e Penteado",
      description: "Cortes modernos e penteados elegantes para todas as ocasiões",
      price: "A partir de R$ 50"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Coloração",
      description: "Coloração profissional com produtos premium e técnicas avançadas",
      price: "A partir de R$ 120"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Tratamentos Capilares",
      description: "Hidratação, reconstrução e nutrição para cabelos saudáveis",
      price: "A partir de R$ 80"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Manicure e Pedicure",
      description: "Cuidados completos para suas unhas com esmaltação premium",
      price: "A partir de R$ 35"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Design de Sobrancelhas",
      description: "Modelagem perfeita  e profissional para realçar seu olhar",
      price: "A partir de R$ 40"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Maquiagem",
      description: "Maquiagem profissional para eventos e ocasiões especiais",
      price: "A partir de R$ 100"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de beleza para realçar sua elegância natural
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-soft-pink/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold text-primary">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;