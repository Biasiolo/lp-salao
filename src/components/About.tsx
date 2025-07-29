const About = () => {
  return (
    <section id="sobre" className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Sobre o All Beauty
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              No All Beauty, acreditamos que cada pessoa possui uma beleza única que merece ser realçada. 
              Com mais de 10 anos de experiência, nossa equipe de profissionais especializados oferece 
              serviços de alta qualidade em um ambiente acolhedor e sofisticado.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Utilizamos apenas produtos premium e as técnicas mais modernas do mercado para garantir 
              que você saia do nosso salão se sentindo renovada e radiante. Nossa missão é proporcionar 
              uma experiência única de cuidado e bem-estar.
            </p>
            <p className="text-lg leading-relaxed">
              Venha descobrir como podemos transformar sua beleza natural em verdadeira arte!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;