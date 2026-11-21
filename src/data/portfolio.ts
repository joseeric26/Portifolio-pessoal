export type Profile = {
  label: string;
  url: string;
};

export type ProjectLink = {
  url: string;
};

export type PortfolioProject = {
  id: string;
  category: string;
  title: string;
  summary: string;
  problem: string;
  contribution: string;
  technologies: string[];
  result: string;
  details: string;
  links: {
    code?: ProjectLink;
    demo?: ProjectLink;
    publication?: ProjectLink;
    reference?: ProjectLink;
  };
  image?: {
    src: string;
    alt: string;
  };
  sources: string[];
};

export type Skill = {
  area: string;
  name: string;
  description: string;
  relatedProjectIds?: string[];
  source: string;
};

export type Certificate = {
  title: string;
  issuer?: string;
  date?: string;
  hours?: string;
  validationUrl?: string;
  pdfPath?: string;
  source: string;
};

export type Hobby = {
  title: string;
  description: string;
  link?: {
    label: string;
    url: string;
  };
  image?: {
    src: string;
    alt: string;
  };
};

export type PortfolioTool = {
  name: string;
  use: string;
  relatedProjectIds?: string[];
  source: string;
};

export type Education = {
  course: string;
  institution: string;
  period: string;
  status: string;
  source: string;
};

export type ContactChannel = {
  label: string;
  url: string;
};

export type PortfolioData = {
  name: string;
  title: string;
  location: string;
  profiles: {
    linkedin?: Profile;
    github?: Profile;
    instagram?: Profile;
    [key: string]: Profile | undefined;
  };
  presentation: {
    eyebrow: string;
    summary: string;
    introduction: string;
    lookingFor: string;
    source: string;
  };
  projects: PortfolioProject[];
  skills: Skill[];
  education: Education[];
  certificates: Certificate[];
  hobbies: Hobby[];
  tools: PortfolioTool[];
  contacts: {
    email: {
      address: string;
      source: string;
    };
    other: ContactChannel[];
  };
  sources: Record<string, string>;
};

export const portfolio: PortfolioData = {
  name: "José Eric Alves Uchoa Wanderley da Silva",
  title: "Estudante de Engenharia da Computação",
  location: "São Luís, MA",
  profiles: {
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jos%C3%A9-eric-alves-uchoa-wanderley-da-silva-25347621b/",
    },
    github: {
      label: "GitHub",
      url: "https://github.com/joseeric26",
    },
    instagram: {
      label: "Instagram",
      url: "https://www.instagram.com/jose_alvesuws?lqvp=bGg1dWd6NWZjemM1&utm_source=qr",
    },
  },
  presentation: {
    eyebrow: "Engenharia da Computação · São Luís, MA",
    summary:
      "Sou estudante do 2º semestre de Engenharia da Computação no CEUMA e gosto de entender como as máquinas funcionam — da lógica e dos dados às soluções que ajudam a resolver problemas reais.",
    introduction:
      "A curiosidade por tecnologia me leva a explorar programação, bancos de dados e a arquitetura por trás dos sistemas. Nos projetos acadêmicos, busco transformar esse interesse em prática, aprender com cada desafio e construir fundamentos sólidos.",
    lookingFor:
      "Estou em busca da minha primeira oportunidade de estágio e de boas conversas sobre tecnologia, aprendizado e colaboração.",
    source: "Currículo exportado do LinkedIn, fornecido pelo usuário.",
  },
  projects: [
    {
      id: "gerenciador-tarefas",
      category: "Desenvolvimento web · Projeto acadêmico",
      title: "Gerenciador de tarefas",
      summary:
        "Aplicação web para cadastrar, consultar, atualizar e remover tarefas, com API REST e persistência em MongoDB.",
      problem:
        "Organizar tarefas e seus estados em uma aplicação com interface web e dados que continuam disponíveis entre reinicializações.",
      contribution:
        "No repositório de estudos que mantenho estão o aplicativo Next.js, as rotas da API, os componentes de interface e a configuração do ambiente Docker. A documentação o identifica como projeto acadêmico, mas não detalha a divisão individual das tarefas.",
      technologies: [
        "Next.js App Router",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Docker Compose",
      ],
      result:
        "A documentação descreve operações de CRUD por API e persistência do banco em volume Docker. Também registra passos para executar e verificar o projeto localmente.",
      details:
        "As rotas documentadas permitem listar e criar tarefas, consultar uma tarefa pelo identificador, atualizar e excluir. O projeto organiza a interface em componentes e mantém a conexão MongoDB em um módulo próprio. É um projeto acadêmico; não estou apresentando-o como serviço publicado.",
      links: {
        code: {
          url: "https://github.com/joseeric26/estudos/tree/main/2%C2%B0%20periodo/banco%20de%20dados/aula%20com%20Antigravity/gerenciador-tarefas",
        },
      },
      sources: [
        "README.md e estrutura de arquivos do projeto gerenciador-tarefas no repositório estudos.",
      ],
    },
    {
      id: "sistema-hospitalar",
      category: "Banco de dados · Projeto acadêmico",
      title: "Sistema de gestão hospitalar",
      summary:
        "Modelagem de dados para pacientes, equipe médica, consultas, internações, leitos, medicamentos e pagamentos.",
      problem:
        "Representar as principais operações de um hospital em estruturas de dados relacionadas, com validações e consultas úteis.",
      contribution:
        "No repositório público que mantenho estão documentados scripts de criação e carga de dados, consultas, índices, transações e permissões. A fonte identifica o trabalho como acadêmico, mas não detalha a divisão individual das tarefas.",
      technologies: ["PostgreSQL", "SQL", "MongoDB"],
      result:
        "O material inclui um esquema relacional com chaves, restrições e relacionamentos, consultas SQL com junções e agregações, além de scripts complementares e experimentos com MongoDB.",
      details:
        "O modelo abrange entidades como pacientes, médicos, consultas, diagnósticos, receitas, exames, internações e pagamentos. O repositório também registra operações de índices e transações. Este é um projeto acadêmico; as fontes não indicam implantação em um hospital real.",
      links: {
        code: {
          url: "https://github.com/joseeric26/estudos/tree/main/2%C2%B0%20periodo/banco%20de%20dados/SistemaHospitalar",
        },
      },
      sources: [
        "Repositório estudos, pasta SistemaHospitalar e arquivos SQL/JavaScript.",
        "Repositório Sistema-Hospitalar, descrito como projeto de faculdade.",
      ],
    },
    {
      id: "modelo-relacional-produtos",
      category: "Modelagem de dados · Atividade individual",
      title: "Modelo relacional de produtos",
      summary:
        "Modelagem em PostgreSQL para separar produtos e tipos, organizar as relações e preservar a integridade dos dados.",
      problem:
        "Representar a classificação de produtos sem repetir descrições de tipos e com regras claras para inclusões e exclusões.",
      contribution:
        "A documentação identifica esta como uma atividade individual. Nela, preparei o modelo conceitual e relacional, o DDL, os dados de exemplo e os testes dos relacionamentos.",
      technologies: ["PostgreSQL", "SQL", "DBML"],
      result:
        "O modelo separa Produto e Tipo de Produto e os testes documentados verificam a chave estrangeira, duplicidade de identificadores e demais restrições.",
      details:
        "A entrega inclui diagramas, scripts SQL executáveis e uma explicação sobre normalização. A API Java do projeto de referência é citada como contexto e não foi migrada para PostgreSQL nesta atividade.",
      links: {
        code: {
          url: "https://github.com/joseeric26/minha-versao-products-master",
        },
      },
      sources: [
        "README.md, diagramas, scripts SQL e evidências do repositório minha-versao-products-master.",
      ],
    },
    {
      id: "comercio-poliglota",
      category: "Arquitetura de dados · Projeto acadêmico",
      title: "Comércio com persistência poliglota",
      summary:
        "Exercício de ERP que separa carrinhos, estoque e financeiro entre Redis, MongoDB e PostgreSQL.",
      problem:
        "Explorar como os contextos de venda, estoque e financeiro podem organizar dados e regras de acordo com seus padrões de acesso.",
      contribution:
        "No repositório estão documentados os contextos e scripts executáveis dos bancos. A integração por eventos é uma proposta arquitetural; os serviços e o broker são descritos, não implementados neste exercício.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Docker Compose", "Python"],
      result:
        "O README documenta testes automatizados nos três bancos, transações financeiras, consultas de estoque e expiração de carrinhos.",
      details:
        "O contexto financeiro usa PostgreSQL, o estoque usa documentos MongoDB e os carrinhos temporários usam Redis. A documentação também discute outbox, idempotência e compensações como evolução de produção. É um projeto acadêmico, não um ERP publicado para uso comercial.",
      links: {
        code: {
          url: "https://github.com/joseeric26/comercio",
        },
      },
      sources: [
        "README.md, scripts e testes do repositório comercio.",
      ],
    },
    {
      id: "ecommerce-mongodb",
      category: "Java · MongoDB · Projeto acadêmico",
      title: "Catálogo de e-commerce",
      summary:
        "Aplicação de catálogo em Java que explora documentos, filtros, índices e variações de produtos no MongoDB.",
      problem:
        "Modelar e consultar produtos com atributos comuns e variações, sem confundir propriedades de itens diferentes.",
      contribution:
        "No repositório público estão a aplicação Java com o driver oficial, os scripts de mongosh, testes e documentação do modelo. As fontes identificam a atividade como acadêmica, sem detalhar a divisão individual de tarefas.",
      technologies: ["Java 17+", "MongoDB", "Maven", "mongosh"],
      result:
        "O material cobre filtros por faixa de preço e texto, índices e uma consulta com $elemMatch para verificar atributos na mesma variação.",
      details:
        "A documentação delimita o escopo ao catálogo e a exemplos de dados para carrinho e pedido. Não apresenta um checkout ou integração real com gateway de pagamento. Os testes de integração descritos usam um banco MongoDB dedicado.",
      links: {
        code: {
          url: "https://github.com/joseeric26/e-comerce",
        },
      },
      sources: [
        "README.md, código Java e scripts mongosh do repositório e-comerce.",
      ],
    },
    {
      id: "api-cadastro-alunos",
      category: "Backend · API REST acadêmica",
      title: "API de cadastro de alunos",
      summary:
        "API em Java e Spring Boot com operações para listar, cadastrar, consultar, atualizar e excluir registros.",
      problem:
        "Praticar a organização de uma API backend em camadas e a persistência de entidades de aluno.",
      contribution:
        "Na pasta pública de estudos estão o controller, service, repository, entidade e DTOs associados às rotas de CRUD. A documentação geral a situa entre os estudos acadêmicos de backend; a fonte não especifica uma divisão de tarefas.",
      technologies: ["Java 21", "Spring Boot", "Spring Web MVC", "Spring Data JPA", "Maven"],
      result:
        "As rotas do controller permitem operações de leitura e gravação de registros por meio do serviço e do repositório.",
      details:
        "O projeto de aula tem endpoints para listar alunos, cadastrar, buscar por identificador, atualizar e excluir. O POM declara o driver PostgreSQL como dependência de runtime. Não há demonstração pública nem documentação de implantação em produção.",
      links: {
        code: {
          url: "https://github.com/joseeric26/estudos/tree/main/2%C2%B0%20periodo/API%20e%20backend/aula.sd/aula.sd",
        },
      },
      sources: [
        "Controller, service, model e pom.xml do projeto aula.sd no repositório estudos.",
      ],
    },
    {
      id: "recomendacoes-grafo",
      category: "Bancos de dados · Estudo acadêmico",
      title: "Recomendações com grafo e cache",
      summary:
        "Exercício de consultas de recomendação com Neo4j e de ciclo de vida de carrinhos com Redis.",
      problem:
        "Explorar relações de amizade e compras em comum para encontrar recomendações, além de tratar carrinhos temporários.",
      contribution:
        "Publiquei scripts Cypher e comandos Redis acompanhados de modelo, instruções e resultados esperados. A documentação deixa explícito que o exercício não foi executado em Neo4j ou Redis no ambiente de preparação.",
      technologies: ["Neo4j", "Cypher", "Redis"],
      result:
        "O material descreve consultas de amigos de amigos e de produtos comprados em comum, além de chaves de carrinho com expiração e invalidação.",
      details:
        "O modelo conecta usuários a usuários e a produtos. As consultas usam essas relações para sugerir itens; os scripts Redis ilustram expiração e remoção do carrinho no checkout. O README registra resultados esperados, não testes de integração executados.",
      links: {
        code: {
          url: "https://github.com/joseeric26/grafo",
        },
      },
      sources: [
        "README.md, arquivos Cypher e scripts Redis do repositório grafo.",
      ],
    },
    {
      id: "agriconecta",
      category: "Conceito de produto · Pitch",
      title: "AgriConecta",
      summary:
        "Proposta de plataforma para aproximar pequenos produtores rurais, compradores e varejistas.",
      problem:
        "A proposta aborda a dificuldade de pequenos produtores em divulgar produtos e encontrar novos compradores.",
      contribution:
        "O repositório público contém a descrição da proposta e um vídeo de pitch. As fontes não identificam minha contribuição individual nem apresentam uma aplicação implementada; por isso, registro apenas o material disponível.",
      technologies: [],
      result:
        "A ideia e seu fluxo de comercialização estão documentados em um README e em um vídeo de apresentação.",
      details:
        "A proposta apresenta cadastro e divulgação de produtores, descoberta de produtos e contato com compradores como possíveis funcionalidades. O README descreve uma visão de produto, não comprova que esses recursos tenham sido desenvolvidos.",
      links: {
        reference: {
          url: "https://github.com/joseeric26/-TechX-M01-AgriConecta/blob/main/pitch.mp4",
        },
      },
      sources: [
        "README.md e arquivo pitch.mp4 do repositório -TechX-M01-AgriConecta.",
      ],
    },
  ],
  skills: [
    {
      area: "Desenvolvimento web",
      name: "Next.js, TypeScript e interfaces web",
      description:
        "Pratico a construção de interfaces e rotas com App Router, componentes tipados e Tailwind CSS.",
      relatedProjectIds: ["gerenciador-tarefas"],
      source: "README.md e estrutura do projeto gerenciador-tarefas em estudos.",
    },
    {
      area: "Desenvolvimento backend",
      name: "APIs REST e operações CRUD",
      description:
        "Implemento rotas para criar, consultar, atualizar e remover registros em exercícios acadêmicos.",
      relatedProjectIds: ["gerenciador-tarefas", "api-cadastro-alunos"],
      source: "Rotas do gerenciador-tarefas e controller do projeto aula.sd.",
    },
    {
      area: "Banco de dados",
      name: "Modelagem relacional",
      description:
        "Estruturo entidades, relacionamentos, chaves e restrições em exercícios de banco de dados.",
      relatedProjectIds: [
        "sistema-hospitalar",
        "modelo-relacional-produtos",
      ],
      source:
        "Scripts SQL do SistemaHospitalar e atividade individual de modelagem relacional.",
    },
    {
      area: "Banco de dados",
      name: "Consultas SQL e transações",
      description:
        "Pratico consultas com junções, agregações, índices e operações transacionais.",
      relatedProjectIds: [
        "sistema-hospitalar",
        "modelo-relacional-produtos",
      ],
      source:
        "Arquivos SQL dos projetos SistemaHospitalar e modelo relacional de produtos.",
    },
    {
      area: "Arquitetura de dados",
      name: "Persistência poliglota",
      description:
        "Estudo como PostgreSQL, MongoDB e Redis atendem a contextos diferentes em um projeto documentado.",
      relatedProjectIds: ["comercio-poliglota"],
      source: "README.md do repositório comercio.",
    },
    {
      area: "Banco de dados",
      name: "Modelagem documental",
      description:
        "Pratico estruturas de documentos, filtros, índices e consultas sobre variações de produtos.",
      relatedProjectIds: ["ecommerce-mongodb", "gerenciador-tarefas"],
      source: "README e scripts dos repositórios e-comerce e estudos.",
    },
    {
      area: "Programação",
      name: "Orientação a objetos com Java",
      description:
        "Venho desenvolvendo fundamentos de programação orientada a objetos em atividades e estudos acadêmicos.",
      relatedProjectIds: ["ecommerce-mongodb", "api-cadastro-alunos"],
      source:
        "Certificação citada no currículo exportado do LinkedIn e materiais do repositório estudos.",
    },
    {
      area: "Desenvolvimento backend",
      name: "Spring MVC",
      description:
        "Aplico o framework em uma API acadêmica organizada em controller, service e repository.",
      relatedProjectIds: ["api-cadastro-alunos"],
      source:
        "Arquivos do projeto aula.sd e competência declarada no currículo exportado do LinkedIn.",
    },
    {
      area: "Desenvolvimento backend",
      name: "Segurança de APIs",
      description:
        "Competência que declarei no LinkedIn; ainda não associei a um projeto público específico.",
      source: "Competências listadas no currículo exportado do LinkedIn.",
    },
    {
      area: "Bancos de dados",
      name: "Consultas em grafos com Cypher",
      description:
        "Estudo consultas de relacionamento e recomendação em scripts Neo4j documentados.",
      relatedProjectIds: ["recomendacoes-grafo"],
      source: "README e scripts do repositório grafo.",
    },
    {
      area: "Programação",
      name: "Fundamentos de Python",
      description:
        "Pratico lógica e resolução de problemas em exercícios acadêmicos e testes de projetos.",
      relatedProjectIds: ["comercio-poliglota"],
      source:
        "Exercícios Python do repositório estudos e testes do repositório comercio.",
    },
    {
      area: "Desenvolvimento web",
      name: "HTML, CSS e JavaScript",
      description:
        "Venho praticando os fundamentos do front-end em exercícios e páginas do meu repositório de estudos.",
      source: "README e arquivos da pasta 2° periodo/html em estudos.",
    },
  ],
  education: [
    {
      course: "Engenharia da Computação",
      institution: "Universidade Ceuma",
      period: "fevereiro de 2026 – dezembro de 2030",
      status: "2º semestre em 2026",
      source: "Currículo exportado do LinkedIn, fornecido pelo usuário.",
    },
  ] satisfies Education[],
  certificates: [
    {
      title: "Modelagem de Banco de Dados",
      source: "Certificações citadas no currículo exportado do LinkedIn.",
    },
    {
      title: "Introduction to Object-Oriented Programming with Java",
      source: "Certificações citadas no currículo exportado do LinkedIn.",
    },
    {
      title: "Advanced Data Analysis with ChatGPT",
      source: "Certificações citadas no currículo exportado do LinkedIn.",
    },
    {
      title: "Introduction to Software Engineering",
      source: "Certificações citadas no currículo exportado do LinkedIn.",
    },
    {
      title: "Build Intelligent Agents Using DeepSeek & N8N",
      source: "Certificações citadas no currículo exportado do LinkedIn.",
    },
  ],
  hobbies: [],
  tools: [
    {
      name: "PostgreSQL",
      use: "Modelagem relacional, consultas e transações nos projetos acadêmicos.",
      relatedProjectIds: [
        "sistema-hospitalar",
        "modelo-relacional-produtos",
        "comercio-poliglota",
      ],
      source: "Scripts SQL dos projetos hospitalar e comércio.",
    },
    {
      name: "MongoDB",
      use: "Exploração de documentos, consultas e índices nos materiais de banco de dados.",
      relatedProjectIds: [
        "sistema-hospitalar",
        "comercio-poliglota",
        "gerenciador-tarefas",
        "ecommerce-mongodb",
      ],
      source: "Scripts e documentação nos repositórios dos projetos.",
    },
    {
      name: "Redis",
      use: "Armazenamento de carrinhos temporários com expiração nos exercícios de bancos de dados.",
      relatedProjectIds: ["comercio-poliglota", "recomendacoes-grafo"],
      source: "Scripts e README.md dos repositórios comercio e grafo.",
    },
    {
      name: "Docker Compose",
      use: "Execução local dos serviços da aplicação e dos bancos usados nos exercícios.",
      relatedProjectIds: ["gerenciador-tarefas", "comercio-poliglota"],
      source: "compose.yaml e instruções nos READMEs dos projetos.",
    },
    {
      name: "Next.js e Tailwind CSS",
      use: "Desenvolvimento da interface web e da aplicação de gerenciamento de tarefas.",
      relatedProjectIds: ["gerenciador-tarefas"],
      source: "README e arquivos do projeto gerenciador-tarefas.",
    },
    {
      name: "Spring Boot e Maven",
      use: "Desenvolvimento e organização das aplicações acadêmicas em Java.",
      relatedProjectIds: ["api-cadastro-alunos", "ecommerce-mongodb"],
      source: "POMs dos projetos aula.sd e e-comerce.",
    },
    {
      name: "Neo4j",
      use: "Modelagem de relações e consultas Cypher em um exercício de recomendações.",
      relatedProjectIds: ["recomendacoes-grafo"],
      source: "Scripts e README.md do repositório grafo.",
    },
    {
      name: "GitHub",
      use: "Publicação e organização dos meus repositórios de estudos e projetos.",
      source: "Perfil público e repositórios do GitHub.",
    },
  ],
  contacts: {
    email: {
      address: "joseericsilva0@gmail.com",
      source: "E-mail presente no currículo exportado do LinkedIn, compartilhado pelo usuário.",
    },
    other: [],
  },
  sources: {
    linkedinProfile: "Currículo em PDF exportado do LinkedIn e compartilhado pelo usuário.",
    githubProfile: "Perfil público do GitHub informado pelo usuário.",
    instagramProfile: "Link do Instagram fornecido pelo usuário; conteúdo do perfil não consultado.",
    studyRepository:
      "Repositório público github.com/joseeric26/estudos e arquivos consultados.",
    ecommerceRepository:
      "Repositório público e-comerce e documentação do catálogo MongoDB.",
    commerceRepository:
      "Repositório público comercio e documentação da arquitetura poliglota.",
    graphRepository:
      "Repositório público grafo e documentação das consultas Neo4j e Redis.",
    agriConectaRepository:
      "README e vídeo do pitch no repositório público TechX-M01-AgriConecta.",
  },
} as const;
