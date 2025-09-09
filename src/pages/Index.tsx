import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Instagram, 
  Globe, 
  Mail, 
  Target, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  BarChart3,
  Lightbulb,
  Settings,
  Eye,
  Award
} from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Consciência Organizacional",
      description: "Propósito, valores e legado claros para orientar decisões e formar equipes alinhadas e de alto desempenho.",
      icon: <Target className="w-8 h-8" />,
      color: "jf-purple"
    },
    {
      title: "Treinamento de Liderança",
      description: "Desenvolvimento de líderes capazes de engajar pessoas e sustentar uma cultura forte de geração de valor para todos os envolvidos.",
      icon: <Users className="w-8 h-8" />,
      color: "jf-gold"
    },
    {
      title: "Planejamento Estratégico & Excelência Operacional",
      description: "Objetivos claros e comunicação eficaz para um desdobramento de metas em iniciativas que são conduzidas de maneira eficiente e direcionada.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "jf-purple"
    }
  ];

  const detailedServices = [
    {
      title: "Anamnese Corporativa",
      subtitle: "Tenha uma visão completa do cenário da sua organização e se prepare para impulsionar seu crescimento de forma sólida",
      description: "Como seria se você tivesse total clareza sobre as FORÇAS e FRAQUEZAS do seu negócio? E se pudesse antecipar AMEAÇAS e aproveitar OPORTUNIDADES antes mesmo que os seus concorrentes percebessem?",
      symptoms: [
        "Falta de entendimento real sobre o que trava o crescimento da empresa",
        "Decisões tomadas sem dados concretos",
        "Visão limitada do mercado e dos riscos",
        "Falta de prioridades claras para o futuro"
      ],
      tools: ["Análise SWOT minuciosa", "Mapeamento de motivadores intrínsecos", "Mapeamento de padrões de comportamento", "Entrevistas individuais e dinâmicas com grupo de líderes"],
      icon: <BarChart3 className="w-12 h-12" />,
      bgColor: "bg-gradient-primary",
      highlightText: "Para alcançar esse NÍVEL DE CONSCIÊNCIA ORGANIZACIONAL é preciso realizar um DIAGNÓSTICO COMPLETO, envolvendo todos os pontos de vista e compreender quais características contribuem ou desfavorecem a fluidez operacional da sua organização."
    },
    {
      title: "Cultura Organizacional",
      subtitle: "Redescubra o propósito, alinhe valores e fortaleça a identidade que guia cada decisão da sua empresa",
      description: "Como seria se a sua empresa compartilhasse VALORES FORTES e alinhados com toda a equipe e até mesmo com os seus clientes? E se cada colaborador se sentisse parte de um PROPÓSITO MAIOR, motivando-os a entregar o seu melhor em todos os dias?",
      symptoms: [
        "Falta de senso de pertencimento na equipe e nos clientes",
        "Conflitos constantes por desalinhamento de valores",
        "Desmotivação e alta rotatividade de talentos",
        "Baixo engajamento com o propósito e missão do negócio"
      ],
      tools: ["Definição de Visão e Missão Organizacionais", "Mapeamento de valores que nortearam decisões na organização", "Golden Circle: redescoberta de Propósito, Diferencial e Oferta", "Construção de uma base de conhecimento sólida e acessível"],
      icon: <Award className="w-12 h-12" />,
      bgColor: "bg-gradient-gold",
      highlightText: "Para fortalecer sua CULTURA ORGANIZACIONAL é essencial definir claramente seus VALORES, PROPÓSITO E IDENTIDADE, criando um ambiente onde todos se sintam parte de algo maior e trabalhem alinhados aos mesmos princípios."
    },
    {
      title: "Planejamento Estratégico",
      subtitle: "Torne sua empresa autossuficiente com um plano estratégico claro, bem estruturado, comunicado e acompanhado de perto",
      description: "Como seria se a sua empresa operasse com a EFICIÊNCIA OPERACIONAL que você deseja? E se seus colaboradores tivessem PRECISÃO E FOCO e tomassem AS MAIS CORRETAS DECISÕES ao priorizar demandas e execução de tarefas?",
      symptoms: [
        "Equipes trabalhando sem prioridades claras",
        "Falta de direcionamento para crescimento",
        "Baixa capacidade de adaptação às mudanças do mercado",
        "Alto desperdício de recursos valiosos como tempo, esforço, dinheiro e até saúde dos colaboradores"
      ],
      tools: ["Planejamento balanceado usando quadro visual do BSC", "Metas claras e relevantes definidas com SMART GOALS", "Planos de ação eficazes e bem estruturados com 12 WEEK ROADMAP", "Supervisão e ajustes finos usando SCALED AGILE"],
      icon: <Target className="w-12 h-12" />,
      bgColor: "bg-gradient-primary",
      highlightText: "Para implementar um PLANEJAMENTO ESTRATÉGICO eficaz é fundamental estabelecer METAS CLARAS, PROCESSOS ESTRUTURADOS e um sistema de acompanhamento que garanta foco, direcionamento e resultados consistentes."
    },
    {
      title: "Treinamento em Liderança e Gestão de Talentos",
      subtitle: "Desenvolva uma liderança consciente e preparada para inspirar, engajar e potencializar seus colaboradores",
      description: "Como seria se a sua liderança fosse INSPIRADORA, ESTRATÉGICA e capaz de organizar um time que atinge resultados de ALTO IMPACTO? E se cada colaborador percebesse que sua vida e carreira IMPORTAM PARA A ORGANIZAÇÃO, fazendo com que a sua liderança fosse vista como um exemplo de confiança, boas práticas e GERAÇÃO MÚTUA DE VALOR?",
      symptoms: [
        "Liderança centralizadora e ineficaz",
        "Baixo nível de autonomia da equipe",
        "Falta de clareza na delegação de responsabilidades",
        "Ambiente de trabalho tóxico ou de medo"
      ],
      tools: ["Mapeamento de cada posição e cargo existentes com técnicas de JOB DESCRIPTION", "Avaliação de Desempenho utilizando os conceitos do 9-BOX", "Treinamentos em metodologias de Liderança com base nas técnicas da Gestão 3.0", "Desenvolvimento de habilidades dos membros da equipe por PDI e REUNIÕES DE 1:1"],
      icon: <Users className="w-12 h-12" />,
      bgColor: "bg-gradient-gold",
      highlightText: "Para desenvolver uma LIDERANÇA EFICAZ e GESTÃO DE TALENTOS de excelência é necessário investir no desenvolvimento de competências, criar processos estruturados de avaliação e promover um ambiente de crescimento mútuo."
    },
    {
      title: "Revisão e Melhoria de Processos",
      subtitle: "Elimine desperdícios e torne seus processos mais eficientes, sustentáveis e orientados a resultados",
      description: "Como seria se os processos da sua empresa fossem CLAROS, ENXUTOS e SEM DESPERDÍCIOS? E se cada tarefa agregasse VALOR DIRETO para o seu cliente e para o crescimento da sua organização?",
      symptoms: [
        "Processos manuais, lentos e com alta taxa de defeitos na execução",
        "Alto índice de retrabalho",
        "Custos operacionais elevados",
        "Falta de padronização e perda de qualidade"
      ],
      tools: ["Remoção de desperdícios usando os conceitos de LEAN STARTUP", "Implantação graduativa e metrificada com GESTÃO DE MUDANÇAS", "Construção de uma base de conhecimento sólida e acessível", "Documentação e acessibilidade de processos transparentes"],
      icon: <Settings className="w-12 h-12" />,
      bgColor: "bg-gradient-primary",
      highlightText: "Para otimizar seus PROCESSOS OPERACIONAIS é fundamental eliminar desperdícios, padronizar atividades e criar fluxos de trabalho eficientes que agreguem valor real ao cliente e à organização."
    },
    {
      title: "Gestão à Vista",
      subtitle: "Aumente o engajamento e a responsabilidade coletiva com indicadores claros e acessíveis a todos os envolvidos",
      description: "Como seria se as pessoas da sua equipe tivessem acesso aos INDICADORES RELEVANTES para o seu contexto e pudessem ACOMPANHAR O IMPACTO do seu próprio trabalho EM TEMPO REAL? E se o atingimento de cada meta fosse TRANSPARENTE e MOTIVASSE todo o time a remar NA MESMA DIREÇÃO?",
      symptoms: [
        "Falta de clareza sobre objetivos e métricas",
        "Equipes trabalhando no escuro, sem dados confiáveis",
        "Baixo engajamento com os resultados",
        "Decisões baseadas em achismos, sem indicadores concretos"
      ],
      tools: ["Definição e comunicação dos indicadores do seu negócio com KPIs", "Acessibilização à medição do atingimento de metas em DASHBOARDS", "Transparência do trabalho em progresso com as técnicas do KANBAN", "Comunicação assíncrona e documentação de decisões com DCA e VGS"],
      icon: <Eye className="w-12 h-12" />,
      bgColor: "bg-gradient-gold",
      highlightText: "Para implementar uma GESTÃO À VISTA eficaz é essencial criar sistemas de indicadores transparentes, dashboards acessíveis e processos que permitam acompanhamento em tempo real dos resultados por toda a equipe."
    }
  ];

  const benefits = [
    {
      title: "Aumento no engajamento e na retenção de talentos",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Redução de conflitos e ruídos de comunicação",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      title: "Crescimento sustentável com eficiência operacional",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Cultura organizacional forte e alinhada ao propósito",
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center w-32 h-32 mx-auto rounded-full border-4 border-white/20 bg-white/10 backdrop-blur-sm">
              <div className="text-6xl font-bold">
                <span className="text-jf-purple">J</span>
                <span className="text-jf-gold">F</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Portfólio de Serviços
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-jf-gold">
                JF Estratégia Corporativa
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed">
              <p>
                Acreditamos que empresas com um bom nível de consciência criam 
                ambientes onde as pessoas podem ser saudáveis e felizes de verdade.
              </p>
              <p>
                Quando reduzimos ruídos de comunicação e aumentamos a clareza 
                organizacional, colaboradores encontram equilíbrio entre as saúdes física, 
                mental e familiar, gerando engajamento e eficiência em suas atividades.
              </p>
              <p className="text-jf-gold font-semibold text-xl">
                Transformar as organizações transforma as pessoas.<br />
                Transformar as pessoas transforma o mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-jf-gold mb-6">
              Transforme sua empresa em um ambiente consciente, produtivo e humano.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A JF Estratégia Corporativa ajuda empresas a reduzir conflitos internos, 
              aumentar engajamento e acelerar resultados através de três pilares:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden border-2 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="flex justify-center">
                    <Badge className={`w-16 h-16 rounded-full flex items-center justify-center text-white ${
                      service.color === 'jf-purple' ? 'bg-jf-purple hover:bg-jf-purple/90' : 'bg-jf-gold hover:bg-jf-gold/90'
                    } transition-colors duration-300`}>
                      {index + 1}
                    </Badge>
                  </div>
                  
                  <div className={`mx-auto w-fit p-4 rounded-full ${
                    service.color === 'jf-purple' ? 'bg-jf-purple/10' : 'bg-jf-gold/10'
                  }`}>
                    <div className={`${
                      service.color === 'jf-purple' ? 'text-jf-purple' : 'text-jf-gold'
                    }`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold ${
                    service.color === 'jf-purple' ? 'text-jf-purple' : 'text-jf-gold'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-gradient-primary text-white rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-jf-gold">
              Benefícios para a sua empresa
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <p className="font-medium">{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {detailedServices.map((service, index) => (
        <section key={index} className="py-4 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className={`${service.bgColor} text-white rounded-t-2xl p-8`}>
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h2 className={`text-4xl font-bold ${service.bgColor === 'bg-gradient-gold' ? 'text-jf-purple' : 'text-jf-gold'}`}>
                  {service.title}
                </h2>
              </div>
              <p className="text-xl">{service.subtitle}</p>
            </div>
            
            <Card className="rounded-t-none border-t-0">
              <CardContent className="p-8 space-y-8">
                <p className="text-lg leading-relaxed">
                  {service.description}
                </p>
                
                <div className="bg-jf-gold/10 border border-jf-gold/20 rounded-lg p-6">
                  <p className="text-center font-medium mb-4">
                    {service.highlightText}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                      !
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-jf-purple mb-4">
                        Sintomas de que é preciso {service.title.includes("mapear") ? "mapear" : service.title.includes("investir") ? "investir" : service.title.includes("REDESENHAR") ? "REDESENHAR" : service.title.includes("TRANSPAREC") ? "TRANSPAREC" : "melhorar"} sua {service.title.includes("DESESTRUTURA") ? "DESESTRUTURA ORGANIZACIONAL" : service.title.includes("cultura") ? "cultura" : service.title.includes("PLANEJAMENTO") ? "PLANEJAMENTO" : service.title.includes("GESTÃO DE TALENTOS") ? "GESTÃO DE TALENTOS" : service.title.includes("procedimentos") ? "procedimentos" : "indicadores"}
                      </h4>
                      <ul className="space-y-2">
                        {service.symptoms.map((symptom, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-jf-purple rounded-full mt-2 flex-shrink-0"></div>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={`${service.bgColor} text-white rounded-lg p-6`}>
                  <h4 className={`text-2xl font-bold mb-6 ${service.bgColor === 'bg-gradient-gold' ? 'text-jf-purple' : 'text-jf-gold'}`}>
                    Ferramentas à sua disposição
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.tools.map((tool, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0" />
                        <span className="font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-5xl font-bold mb-8">
            Agora o próximo passo é seu!
          </h2>
          
          <div className="text-jf-gold space-y-4">
            <p className="text-xl font-semibold">
              Fale conosco e descubra como podemos iniciar sua transformação organizacional juntos!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-10 h-10" />
              </div>
              <p>
                A JF Estratégia Corporativa existe para criar empresas mais conscientes, humanas e produtivas.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-10 h-10" />
              </div>
              <p>
                Com diagnósticos precisos, liderança forte e operação eficiente, sua organização pode crescer de forma sustentável e saudável.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Star className="w-10 h-10" />
              </div>
              <p>
                Clientes que já contrataram nossos serviços contam que descobriram que é possível unir performance e bem-estar sem abrir mão de resultados expressivos.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white border-none"
              >
                <a href="https://wa.me/5521982674009" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  (21) 98267-4009
                </a>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <a href="https://instagram.com/jfestrategiacorporativa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  @jfestrategiacorporativa
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="https://www.jfec.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-jf-gold transition-colors">
                <Globe className="w-4 h-4" />
                www.jfec.com.br
              </a>
              
              <a href="mailto:negocios@jfec.com.br" className="flex items-center gap-2 hover:text-jf-gold transition-colors">
                <Mail className="w-4 h-4" />
                negocios@jfec.com.br
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm opacity-80">JF Estratégia Corporativa ©</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;