# Portfólio — José Eric Alves Uchoa Wanderley da Silva

Portfólio pessoal de página única, desenvolvido com Next.js App Router, TypeScript e Tailwind CSS. O conteúdo é estático e editável localmente; o site não consulta LinkedIn, GitHub ou serviços de certificados durante a navegação.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para verificar os tipos e gerar a versão de produção:

```bash
npm run typecheck
npm run build
npm run start
```

## Atualizar o conteúdo

Edite [`src/data/portfolio.ts`](./src/data/portfolio.ts). Esse arquivo centraliza perfis, apresentação, projetos, habilidades, formação, certificados, hobbies, ferramentas e contatos. Os componentes leem esses dados e ocultam seções e links opcionais quando não há conteúdo.

- **Perfis e apresentação:** atualize os links em `profiles` e os textos em `presentation`. Cada endereço de perfil fica definido uma só vez.
- **Projetos:** adicione um item em `projects`, com um identificador único, resumo, problema, contribuição, tecnologias e resultado. Configure `links.code`, `links.demo` ou `links.publication` independentemente; deixe sem valor o que não existir. O campo `sources` registra a origem das informações.
- **Habilidades e ferramentas:** adicione itens em `skills` e `tools`; habilidades podem apontar para projetos relacionados pelo identificador.
- **Formação e certificados:** edite `education` e `certificates`. Informe emissor, data, carga horária, URL de validação e/ou caminho do PDF somente quando disponíveis.
- **Hobbies e contatos:** preencha `hobbies` e `contacts` somente com informações que autoriza divulgar. Não inclua dados pessoais por suposição.

Coloque imagens em `public/images/` (há pastas separadas para projetos e hobbies) e use caminhos como `/images/projects/nome-do-projeto.webp`. Sempre preencha o texto alternativo. Coloque certificados em PDF em `public/certificates/` e informe, por exemplo, `/certificates/curso.pdf` no item correspondente. Links externos são exibidos em nova aba; imagens, PDFs e botões opcionais não aparecem sem um caminho válido.

## Fontes usadas nesta versão

- Currículo em PDF exportado do LinkedIn e fornecido pelo usuário: apresentação, formação, competências, certificados e e-mail.
- Perfil público [GitHub](https://github.com/joseeric26) e, como referência principal, o repositório [estudos](https://github.com/joseeric26/estudos): aplicação de tarefas, API Java, sistema hospitalar e exercícios de programação, web e bancos de dados.
- Repositório [e-comerce](https://github.com/joseeric26/e-comerce): catálogo acadêmico em Java e MongoDB.
- Repositório [minha-versao-products-master](https://github.com/joseeric26/minha-versao-products-master): atividade individual de modelagem relacional e integridade de dados.
- Repositório [comercio](https://github.com/joseeric26/comercio): scripts e testes de uma proposta acadêmica de persistência poliglota.
- Repositório [grafo](https://github.com/joseeric26/grafo): modelagem Neo4j/Cypher e exercício de cache com Redis.
- Repositório [AgriConecta](https://github.com/joseeric26/-TechX-M01-AgriConecta): proposta e pitch; sem atribuição individual ou aplicativo implementado nas fontes consultadas.
- Link do Instagram fornecido pelo usuário: exibido como contato; o conteúdo do perfil não foi usado para inferir interesses ou hobbies.

O LinkedIn não pôde ser consultado diretamente sem autenticação; o conteúdo acima foi extraído do PDF compartilhado. O Instagram também não pôde ser consultado sem login, então é usado somente como link de contato. Não foram publicados telefone, imagens pessoais, hobbies ou links de validação de certificados sem fonte disponível. A divisão de contribuições dos trabalhos acadêmicos não está detalhada nas fontes.
