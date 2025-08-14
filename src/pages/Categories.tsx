import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    { name: "Beleza & Estética", icon: "💄", count: 45, slug: "beleza", color: "from-pink-500 to-rose-500" },
    { name: "Manutenção & Reparos", icon: "🔧", count: 32, slug: "manutencao", color: "from-blue-500 to-cyan-500" },
    { name: "Culinária & Gastronomia", icon: "👨‍🍳", count: 28, slug: "culinaria", color: "from-orange-500 to-red-500" },
    { name: "Serviços Diversos", icon: "💼", count: 24, slug: "servicos", color: "from-purple-500 to-indigo-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Categorias</h1>
          <p className="text-xl text-white/90">Explore cursos por área de interesse</p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.slug} to={`/categorias/${category.slug}`}>
                <Card className="group hover-lift shadow-card h-full cursor-pointer">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{category.name}</h3>
                      <p className="text-muted-foreground">{category.count} cursos</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;