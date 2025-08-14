import { useState } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import CourseCard from "@/components/CourseCard";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const courses = [
    {
      title: "Manutenção de Celulares do Zero",
      description: "Aprenda desde os conceitos básicos até reparos avançados. Inclui soldagem, troca de tela e diagnósticos completos.",
      image: "/api/placeholder/400/240",
      duration: "12h",
      level: "Iniciante" as const,
      price: "Grátis",
      platform: "Hotmart",
      category: "Manutenção",
      featured: true
    },
    {
      title: "Design de Sobrancelhas & Henna",
      description: "Domine as técnicas de design, correção e aplicação de henna. Curso completo para profissionais de beleza.",
      image: "/api/placeholder/400/240",
      duration: "6h",
      level: "Iniciante" as const,
      price: "Grátis",
      platform: "Hotmart",
      category: "Beleza"
    },
    {
      title: "Cortes Masculinos Modernos (Barbearia)",
      description: "Técnicas atuais de barbearia, desde cortes clássicos até os mais modernos. Aprenda com profissionais experientes.",
      image: "/api/placeholder/400/240",
      duration: "8h",
      level: "Intermediário" as const,
      price: "Grátis",
      platform: "Hotmart",
      category: "Beleza"
    },
    {
      title: "Marmitaria Lucrativa para Começar Já",
      description: "Monte seu negócio de marmitas com receitas testadas, precificação correta e estratégias de venda.",
      image: "/api/placeholder/400/240",
      duration: "10h",
      level: "Iniciante" as const,
      price: "Grátis",
      platform: "Hotmart",
      category: "Culinária"
    },
    {
      title: "Espetinhos & Churrasco para Vender",
      description: "Aprenda receitas especiais, técnicas de preparo e como montar seu negócio de espetinhos e churrasco.",
      image: "/api/placeholder/400/240",
      duration: "7h",
      level: "Iniciante" as const,
      price: "Grátis",
      platform: "Hotmart",
      category: "Culinária"
    },
    {
      title: "Manutenção de Geladeiras: Fundamentos",
      description: "Curso completo sobre refrigeração doméstica. Diagnósticos, reparos e manutenção preventiva.",
      image: "/api/placeholder/400/240",
      duration: "15h",
      level: "Intermediário" as const,
      price: "Grátis",
      platform: "Hotmart",
      category: "Manutenção"
    },
    {
      title: "Bolos no Pote: Receita & Precificação",
      description: "Receitas exclusivas, técnicas de montagem e estratégias para vender bolos no pote com alta margem.",
      image: "/api/placeholder/400/240",
      duration: "5h",
      level: "Iniciante" as const,
      price: "Grátis",
      platform: "Hotmart",
      category: "Culinária"
    },
    {
      title: "Formatação e Upgrade de Computadores",
      description: "Aprenda a formatar, instalar sistemas e fazer upgrades. Ideal para quem quer trabalhar com informática.",
      image: "/api/placeholder/400/240",
      duration: "9h",
      level: "Iniciante" as const,
      price: "Grátis",
      platform: "Hotmart",
      category: "Manutenção"
    }
  ];

  const categories = [
    { value: "all", label: "Todas as Categorias" },
    { value: "beleza", label: "Beleza & Estética" },
    { value: "manutencao", label: "Manutenção & Reparos" },
    { value: "culinaria", label: "Culinária & Gastronomia" },
    { value: "servicos", label: "Serviços Diversos" }
  ];

  const levels = [
    { value: "all", label: "Todos os Níveis" },
    { value: "iniciante", label: "Iniciante" },
    { value: "intermediario", label: "Intermediário" },
    { value: "avancado", label: "Avançado" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Catálogo de Cursos
            </h1>
            <p className="text-xl text-white/90">
              Explore todos os nossos cursos gratuitos e comece a lucrar hoje mesmo
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Filtros:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar cursos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold">
                {courses.length} cursos encontrados
              </h2>
              {selectedCategory !== "all" && (
                <Badge variant="secondary">
                  {categories.find(c => c.value === selectedCategory)?.label}
                </Badge>
              )}
              {selectedLevel !== "all" && (
                <Badge variant="secondary">
                  {levels.find(l => l.value === selectedLevel)?.label}
                </Badge>
              )}
            </div>
            
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Ordenar
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar Mais Cursos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;