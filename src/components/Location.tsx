import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const Location = () => {
  const openMaps = () => {
    const address = "Rua Síria, 25 - São José dos Campos, SP";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossa Localização
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Venha nos visitar! Estamos localizados em um ponto de fácil acesso em São José dos Campos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Address Card */}
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <p className="text-lg font-medium">All Beauty Salão</p>
                  <p className="text-muted-foreground">
                    Rua Síria, 25<br />
                    São José dos Campos - SP
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium mb-1">Horário de Funcionamento</p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Segunda a Sexta: 09:00 - 18:00</p>
                        <p>Sábado: 09:00 - 17:00</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium mb-1">Contato</p>
                      <p className="text-sm text-muted-foreground">
                        (12) 99999-9999
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={openMaps}
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Ver no Google Maps
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="p-6 bg-gradient-to-br from-soft-pink/20 to-primary/10">
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-primary mx-auto" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fácil Localização</h3>
                    <p className="text-muted-foreground">
                      Estamos em uma localização privilegiada com fácil acesso e estacionamento próximo.
                    </p>
                  </div>
                  <Button onClick={openMaps} variant="hero">
                    Como Chegar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;