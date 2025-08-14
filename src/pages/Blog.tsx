import { useState } from "react";
import { Search, Calendar, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const posts = [
    {
      title: "Como começar a lucrar em casa com baixo investimento",
      excerpt: "Descubra estratégias comprovadas para iniciar seu negócio caseiro sem gastar muito. Dicas práticas e cases de sucesso que vão te inspirar a dar o primeiro passo.",
      image: "/api/placeholder/400/240",
      author: "Maria Silva",
      date: "15 Jan 2024",
      category: "Ideias de Negócio",
      slug: "como-comecar-lucrar-casa-baixo-investimento"
    },
    {
      title: "Top 10 ideias de negócios caseiros para 2024",
      excerpt: "Lista completa com as melhores oportunidades de negócio para este ano. Análise de mercado, potencial de lucro e como começar em cada área.",
      image: "/api/placeholder/400/240",
      author: "João Santos",
      date: "12 Jan 2024",
      category: "Ideias de Negócio",
      slug: "top-10-ideias-negocios-caseiros-2024"
    },
    {
      title: "Marketing simples: como divulgar seu serviço no bairro",
      excerpt: "Estratégias de marketing local que realmente funcionam. Aprenda a conquistar clientes na sua região sem gastar fortunas com publicidade.",
      image: "/api/placeholder/400/240",
      author: "Ana Costa",
      date: "10 Jan 2024",
      category: "Marketing",
      slug: "marketing-simples-divulgar-servico-bairro"
    },
    {
      title: "Quanto cobrar? Montando sua tabela de preços",
      excerpt: "Guia completo para precificar seus serviços corretamente. Calcule custos, margem de lucro e posicione-se no mercado de forma competitiva.",
      image: "/api/placeholder/400/240",
      author: "Carlos Oliveira",
      date: "8 Jan 2024",
      category: "Gestão & Preços",
      slug: "quanto-cobrar-montando-tabela-precos"
    },
    {
      title: "Atendimento que fideliza: 7 passos práticos",
      excerpt: "Transforme cada cliente em um promotor do seu negócio. Técnicas de atendimento que garantem satisfação e recomendações.",
      image: "/api/placeholder/400/240",
      author: "Fernanda Lima",
      date: "5 Jan 2024",
      category: "Gestão & Preços",
      slug: "atendimento-fideliza-7-passos-praticos"
    },
    {
      title: "Transforme clientes em fãs: pedindo avaliações do jeito certo",
      excerpt: "Aprenda a solicitar avaliações e depoimentos de forma natural. Estratégias para construir uma reputação sólida online e offline.",
      image: "/api/placeholder/400/240",
      author: "Roberto Martins",
      date: "3 Jan 2024",
      category: "Marketing",
      slug: "transforme-clientes-fas-pedindo-avaliacoes"
    }
  ];

  const categories = [
    { value: "all", label: "Todas as Categorias" },
    { value: "ideias", label: "Ideias de Negócio" },
    { value: "marketing", label: "Marketing" },
    { value: "gestao", label: "Gestão & Preços" },
    { value: "historias", label: "Histórias de Sucesso" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Blog Lucrando em Casa
            </h1>
            <p className="text-xl text-white/90">
              Dicas, estratégias e histórias reais para te ajudar a empreender de casa
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Últimas publicações</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar artigos..."
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
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold">
                {posts.length} artigos encontrados
              </h2>
              {selectedCategory !== "all" && (
                <Badge variant="secondary">
                  {categories.find(c => c.value === selectedCategory)?.label}
                </Badge>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-card rounded-2xl p-8 text-center shadow-card">
            <h3 className="text-2xl font-bold mb-4">
              Receba nossas dicas por email
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cadastre-se na nossa newsletter e receba semanalmente conteúdos exclusivos 
              sobre empreendedorismo, marketing e gestão de negócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Seu melhor email" className="flex-1" />
              <button className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;