import { Heart, MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-elegant-purple text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">All Beauty</h3>
            <p className="text-white/80 leading-relaxed">
              Transformando sua beleza em arte há mais de 10 anos. 
              Venha descobrir o melhor de você no nosso salão.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/allbeauty" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/5512999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Rua Síria, 25 - São José dos Campos</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>(12) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent" />
                <div>
                  <p>Seg - Sex: 09:00 - 18:00</p>
                  <p>Sábado: 09:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <div className="space-y-2 text-white/80">
              <p>• Corte e Penteado</p>
              <p>• Coloração</p>
              <p>• Tratamentos Capilares</p>
              <p>• Manicure e Pedicure</p>
              <p>• Design de Sobrancelhas</p>
              <p>• Maquiagem Profissional</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center gap-2">
            © 2024 All Beauty. Feito com <Heart className="w-4 h-4 text-accent" /> para você.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;