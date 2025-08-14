const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-xl text-white/90">Transformando vidas através da educação</p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-muted-foreground">
              O Lucrando em Casa nasceu com a missão de democratizar o acesso ao conhecimento 
              e ajudar pessoas a transformar suas habilidades em fonte de renda.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;