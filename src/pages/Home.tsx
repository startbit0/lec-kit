import { useState } from "react";
import { Search, BookOpen, TrendingUp, Users, Award, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CourseCard from "@/components/CourseCard";
import BlogCard from "@/components/BlogCard";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/busca?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const categories = [
    {
      name: "Beleza & Estética",
      icon: "💄",
      count: 45,
      slug: "beleza",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Manutenção & Reparos",
      icon: "🔧",
      count: 32,
      slug: "manutencao",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Culinária & Gastronomia",
      icon: "👨‍🍳",
      count: 28,
      slug: "culinaria",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Serviços Diversos",
      icon: "💼",
      count: 24,
      slug: "servicos",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const featuredCourses = [
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
      title: "Marmitaria Lucrativa para Começar Já",
      description: "Monte seu negócio de marmitas com receitas testadas, precificação correta e estratégias de venda.",
      image: "/api/placeholder/400/240",
      duration: "10h",
      level: "Iniciante" as const,
      price: "Grátis",
      platform: "Hotmart",
      category: "Culinária",
      featured: true
    },
    {
      title: "Cortes Masculinos Modernos",
      description: "Técnicas atuais de barbearia, desde cortes clássicos até os mais modernos. Aprenda com profissionais experientes.",
      image: "/api/placeholder/400/240",
      duration: "8h",
      level: "Intermediário" as const,
      price: "Grátis",
      platform: "Hotmart",
      category: "Beleza"
    }
  ];

  const blogPosts = [
    {
      title: "Como começar a lucrar em casa com baixo investimento",
      excerpt: "Descubra estratégias comprovadas para iniciar seu negócio caseiro sem gastar muito. Dicas práticas e cases de sucesso.",
      image: "/api/placeholder/400/240",
      author: "Maria Silva",
      date: "15 Jan 2024",
      category: "Ideias de Negócio",
      slug: "como-comecar-lucrar-casa-baixo-investimento"
    },
    {
      title: "Top 10 ideias de negócios caseiros para 2024",
      excerpt: "Lista completa com as melhores oportunidades de negócio para este ano. Análise de mercado e potencial de lucro.",
      image: "/api/placeholder/400/240",
      author: "João Santos",
      date: "12 Jan 2024",
      category: "Ideias de Negócio",
      slug: "top-10-ideias-negocios-caseiros-2024"
    },
    {
      title: "Marketing simples: como divulgar seu serviço no bairro",
      excerpt: "Estratégias de marketing local que realmente funcionam. Aprenda a conquistar clientes na sua região.",
      image: "/api/placeholder/400/240",
      author: "Ana Costa",
      date: "10 Jan 2024",
      category: "Marketing",
      slug: "marketing-simples-divulgar-servico-bairro"
    }
  ];

  const stats = [
    { icon: BookOpen, value: "150+", label: "Cursos Disponíveis" },
    { icon: Users, value: "25k+", label: "Alunos Ativos" },
    { icon: Award, value: "98%", label: "Satisfação" },
    { icon: TrendingUp, value: "4.8", label: "Avaliação Média" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/20 hover:bg-white/30">
                <Sparkles className="w-4 h-4 mr-1" />
                Plataforma #1 em Cursos Práticos
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transforme seu
                <span className="block text-yellow-300">Conhecimento em Renda</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Aprenda habilidades práticas com cursos gratuitos e comece a lucrar em casa hoje mesmo
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="O que você quer aprender hoje? Ex: design de sobrancelhas, manutenção..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-white/95 border-0 rounded-full"
                />
                <Button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90"
                >
                  Buscar
                </Button>
              </form>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Explore por Categoria</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Encontre cursos organizados por área de interesse e comece sua jornada de aprendizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.slug} to={`/categorias/${category.slug}`}>
                <Card className="group hover-lift shadow-card h-full cursor-pointer">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.count} cursos disponíveis
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cursos em Destaque</h2>
              <p className="text-muted-foreground text-lg">
                Os cursos mais populares da nossa plataforma
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link to="/cursos">
                Ver Todos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button asChild>
              <Link to="/cursos">Ver Todos os Cursos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Do Blog</h2>
              <p className="text-muted-foreground text-lg">
                Dicas, estratégias e histórias de sucesso para te inspirar
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link to="/blog">
                Ver Todos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button asChild>
              <Link to="/blog">Ver Todos os Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para Começar sua Jornada?
            </h2>
            <p className="text-xl text-white/90">
              Junte-se a milhares de pessoas que já transformaram suas vidas aprendendo novas habilidades
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" variant="secondary" asChild className="flex-1">
              <Link to="/cursos">Explorar Cursos</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="flex-1 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/sobre">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;