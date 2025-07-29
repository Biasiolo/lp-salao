import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Instagram, Facebook, Mail } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5512999999999', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/allbeauty', '_blank');
  };

  const openFacebook = () => {
    window.open('https://facebook.com/allbeauty', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:contato@allbeauty.com.br';
  };

  return (
    <section id="contato" className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos sempre prontos para atendê-la! Entre em contato conosco através dos nossos canais.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow group cursor-pointer" onClick={openWhatsApp}>
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-4 rounded-full bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors w-fit">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fale conosco diretamente
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Conversar
                </Button>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow group cursor-pointer" onClick={() => window.location.href = 'tel:+5512999999999'}>
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-4 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors w-fit">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  (12) 99999-9999
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Ligar
                </Button>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow group cursor-pointer" onClick={openInstagram}>
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-4 rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors w-fit">
                  <Instagram className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Instagram</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  @allbeauty
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Seguir
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow group cursor-pointer" onClick={openEmail}>
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-4 rounded-full bg-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors w-fit">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">E-mail</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  contato@allbeauty.com.br
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Enviar
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-0">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">Pronta para se sentir ainda mais bonita?</h3>
                <p className="text-muted-foreground mb-6">
                  Agende seu horário agora e descubra por que somos referência em beleza em São José dos Campos!
                </p>
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={openWhatsApp}
                  className="text-lg px-8"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agendar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;