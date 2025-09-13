import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Instagram, ShoppingBag, House } from "lucide-react";
import { Link } from "react-router-dom";

const BibliotecaLideranca = () => {
  const peopleManagementBooks = [
    {
      title: "Gapology",
      subtitle: "Como líderes vencedores fecham gaps de performance",
      img: {
        src: "img/books/covers/gapology.jpg",
        alt: "Gapology Cover"
      },
      authors: [
        "Mark Thienes",
        "Brian Brockhoff"
      ],
      affiliate: {
        link: "https://amzn.to/47ALqbM",
        platform: "Amazon.com"
      },
      instagramPost: "https://www.instagram.com/p/DOhOmbhDx2r/?img_index=1"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-black shadow-sm border-b">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-1">
              <img 
                src="/img/header-logo.png" 
                alt="JF Estratégia Corporativa Logo" 
                className="w-12 h-12 rounded-full"
              />
              
              <span className="text-xl font-semibold text-jf-gold hidden md:block">JF Estratégia Corporativa</span>
            </Link>
            
            <div className="flex items-end gap-4">
              <Link to="/" className="flex items-center text-jf-gold hover:text-white transition-colors gap-1">
                <House className="w-4 h-4" />  
                Home
              </Link>
              <span className="flex items-center text-white font-medium gap-1">
                <BookOpen className="w-4 h-4" />
                <span>Biblioteca da Liderança</span>
              </span>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center w-24 h-24 mx-auto rounded-full border-4 border-white/20 bg-white/10 backdrop-blur-sm">
              <BookOpen className="w-12 h-12 text-jf-gold" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Biblioteca da Liderança
              </h1>
              <p className="text-xl md:text-2xl text-jf-gold">
                Conhecimento para transformar líderes e organizações
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          
          {/* First Banner - Em Destaque */}
          <Card className="overflow-hidden border-2 border-jf-purple/20 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  📚 A JFEC é afiliada a sites confi&aacute;veis para que voc&ecirc; adquira, com seguran&ccedil;a, os livros mais relevantes sobre <strong className="text-jf-gold">Lideran&ccedil;a de Pessoas</strong> e <strong className="text-jf-gold">Gest&atilde;o de Neg&oacute;cios</strong>.
                </p>
                <p>
                  Confira abaixo nossas recomenda&ccedil;&otilde;es, explore as postagens relacionadas para mais detalhes e lembre-se: ao comprar pelos nossos links de afiliado, voc&ecirc; apoia diretamente essa nossa iniciativa! 🚀
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Grid de Livros */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {peopleManagementBooks.map((book, index) => (
              <Card key={index} className="overflow-hidden border-2 border-jf-purple/20 shadow-lg">
                <div className="bg-gradient-primary text-white p-8">
                  <div className="flex-column justify-center gap-4 mb-4 text-center">
                    <h2 className="text-3xl font-bold text-jf-gold mb-4">{book.title}</h2>
                    <h3 className="text-xl text-white">{book.subtitle}</h3>
                  </div>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4 text-lg leading-relaxed flex flex-col items-center justify-center">
                    <img 
                      src={book.img.src}
                      alt={book.img.alt}
                      className="w-lg rounded"
                    />

                    <div className="text-muted-foreground text-center">
                      Por {book.authors.map((author, index, authors) => (
                        `${authors[index+2] ? author + ", " : (authors[index+1] ? author + ' e ' : author )}`
                      ))}
                    </div>
                    
                    <div className="flex flex-col">
                      <Button 
                        asChild 
                        size="sm" 
                        variant="outline" 
                        className="border-jf-purple text-jf-purple hover:bg-jf-purple hover:text-white"
                      >
                        <a href={book.affiliate.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ShoppingBag className="w-8 h-8" />
                          Comprar livro
                        </a>
                      </Button>

                      <Button 
                        asChild 
                        size="sm" 
                        variant="outline" 
                        className="mt-2 border-jf-purple text-jf-purple hover:bg-jf-purple hover:text-white"
                      >
                        <a href={book.instagramPost} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Instagram className="w-8 h-8" />
                          Ir para o post
                        </a>
                      </Button>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Last Banner - Acompanhe */}
          <Card className="border border-muted bg-muted/20">
            <CardContent className="p-6 text-center">
              <div className="p-2">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="md:flex-none sm:flex-1 space-y-1">
                    <h3 className="text-lg font-semibold text-jf-purple">Fique por dentro das novidades</h3>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="md:flex-none sm:flex-1 space-y-1">
                  <p className="text-muted-foreground">
                    Continue acompanhando a JFEC no Instagram para não perder as próximas atualizações da nossa biblioteca.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 border-jf-purple text-jf-purple hover:bg-jf-purple hover:text-white"
                    asChild
                  >
                    <a 
                      href="https://instagram.com/jfestrategiacorporativa" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>
                        <span className="max-sm:hidden">Seguir </span><span>@jfestrategiacorporativa</span>
                      </span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-jf-purple hover:bg-jf-purple/90 text-white"
                asChild
              >
                <Link to="/">Voltar para Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BibliotecaLideranca;