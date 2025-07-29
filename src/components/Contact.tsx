// Contact.tsx – componente de contato com cards padronizados
"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";

// Utilidades de estilo para padronizar todos os cards -------------------------
const BASE_CARD =
  "flex flex-col items-center justify-between text-center p-6 rounded-2xl hover:shadow-lg transition-shadow group cursor-pointer min-h-[270px]";

const ICON_BOX_BASE =
  "mx-auto mb-4 p-4 rounded-full transition-colors group-hover:text-white group-hover:bg-opacity-90 w-fit";

// ---------------------------------------------------------------------------

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5512999999999", "_blank");
  };

  const openInstagram = () => {
    window.open("https://instagram.com/allbeauty", "_blank");
  };

  const openFacebook = () => {
    window.open("https://facebook.com/allbeauty", "_blank");
  };

  const openEmail = () => {
    window.location.href = "mailto:contato@allbeauty.com.br";
  };

  return (
    <section id="contato" className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos sempre prontos para atendê-la! Entre em contato conosco através
            dos nossos canais.
          </p>
        </div>

        {/* Grid de cards de contato */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* WhatsApp */}
            <Card className={BASE_CARD} onClick={openWhatsApp}>
              <div className={`${ICON_BOX_BASE} bg-green-100 text-green-600 group-hover:bg-green-600`}>
                <MessageCircle className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Fale conosco diretamente</p>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Conversar
              </Button>
            </Card>

            {/* Telefone */}
            <Card
              className={BASE_CARD}
              onClick={() => (window.location.href = "tel:+5512999999999")}
            >
              <div className={`${ICON_BOX_BASE} bg-blue-100 text-blue-600 group-hover:bg-blue-600`}>
                <Phone className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Telefone</h3>
                <p className="text-sm text-muted-foreground">(12) 99999‑9999</p>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Ligar
              </Button>
            </Card>

            {/* Instagram */}
            <Card className={BASE_CARD} onClick={openInstagram}>
              <div className={`${ICON_BOX_BASE} bg-purple-100 text-purple-600 group-hover:bg-purple-600`}>
                <Instagram className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Instagram</h3>
                <p className="text-sm text-muted-foreground">@allbeauty</p>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Seguir
              </Button>
            </Card>

            {/* E‑mail */}
            <Card className={BASE_CARD} onClick={openEmail}>
              <div className={`${ICON_BOX_BASE} bg-rose-100 text-rose-600 group-hover:bg-rose-600`}>
                <Mail className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">E‑mail</h3>
                <p className="text-sm text-muted-foreground">contato@allbeauty.com.br</p>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Enviar
              </Button>
            </Card>
          </div>

          {/* CTA final */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-0 rounded-2xl">
              <CardHeader className="p-0 mb-6 text-center">
                <CardTitle className="text-2xl font-bold">
                  Pronta para se sentir ainda mais bonita?
                </CardTitle>
                <CardDescription>
                  Agende seu horário agora e descubra por que somos referência em
                  beleza em São José dos Campos!
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
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
