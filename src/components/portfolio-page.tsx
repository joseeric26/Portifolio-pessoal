"use client";

import { useEffect, useState } from "react";

import { CopyEmailButton } from "@/components/copy-email-button";
import { portfolio } from "@/data/portfolio";

const projectsById = new Map(
  portfolio.projects.map((project) => [project.id, project]),
);

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`external-link ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} (abre em nova aba)`}
    >
      <span>{children}</span>
      <span className="external-link__icon" aria-hidden="true">
        ↗
      </span>
      <span className="sr-only">(abre em nova aba)</span>
    </a>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  text,
  id,
}: {
  number: string;
  eyebrow: string;
  title: string;
  text: string;
  id: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-heading__number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
        <p className="section-heading__text">{text}</p>
      </div>
    </div>
  );
}

function ProjectReferences({
  ids,
}: {
  ids: readonly string[] | undefined;
}) {
  if (!ids?.length) return null;

  const projects = ids
    .map((id) => projectsById.get(id))
    .filter((project) => project !== undefined);

  if (!projects.length) return null;

  return (
    <div className="related-projects">
      <span>Em projeto:</span>
      {projects.map((project) => (
        <a key={project.id} href={`#project-${project.id}`}>
          {project.title}
        </a>
      ))}
    </div>
  );
}

const navItems = [
  { label: "Início", href: "#inicio", visible: true },
  {
    label: "Projetos",
    href: "#projetos",
    visible: portfolio.projects.length > 0,
  },
  {
    label: "Habilidades",
    href: "#habilidades",
    visible: portfolio.skills.length > 0,
  },
  {
    label: "Formação",
    href: "#formacao",
    visible: portfolio.education.length + portfolio.certificates.length > 0,
  },
  {
    label: "Hobbies",
    href: "#hobbies",
    visible: portfolio.hobbies.length > 0,
  },
  {
    label: "Ferramentas",
    href: "#ferramentas",
    visible: portfolio.tools.length > 0,
  },
  {
    label: "Contato",
    href: "#contato",
    visible:
      Boolean(portfolio.contacts.email.address) ||
      portfolio.contacts.other.length > 0 ||
      Object.keys(portfolio.profiles).length > 0,
  },
].filter((item) => item.visible);

export function PortfolioPage() {
  const linkedin = portfolio.profiles.linkedin;
  const github = portfolio.profiles.github;
  const instagram = portfolio.profiles.instagram;
  const email = portfolio.contacts.email.address;
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(currentTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Início — José Eric">
          <span className="brand__mark">JE</span>
          <span>José Eric</span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="theme-toggle"
          type="button"
          role="switch"
          aria-checked={theme === "dark"}
          aria-label={
            theme === "dark"
              ? "Ativar tema claro"
              : "Ativar tema escuro"
          }
          onClick={toggleTheme}
        >
          <span className="theme-toggle__icon" aria-hidden="true">
            {theme === "dark" ? "☾" : "☀"}
          </span>
          <span className="theme-toggle__track" aria-hidden="true">
            <span className="theme-toggle__thumb" />
          </span>
        </button>
      </header>

      <main id="conteudo">
        <section
          className="hero-section page-shell"
          id="inicio"
          aria-labelledby="introducao-titulo"
        >
          <div className="hero-copy">
            <p className="hero-eyebrow">
              <span className="status-dot" aria-hidden="true" />
              {portfolio.presentation.eyebrow}
            </p>
            <h1 id="introducao-titulo">
              Olá, eu sou
              <br />
              <span>José Eric.</span>
            </h1>
            <p className="hero-full-name">{portfolio.name}</p>
            <p className="hero-title">{portfolio.title}</p>
            <p className="hero-summary">{portfolio.presentation.summary}</p>
            <p className="hero-introduction">
              {portfolio.presentation.introduction}
            </p>
            <div className="hero-actions">
              <a className="button button--lime" href="#projetos">
                Ver projetos <span aria-hidden="true">↓</span>
              </a>
              {email && (
                <a className="button button--light-outline" href="#contato">
                  Entrar em contato <span aria-hidden="true">↗</span>
                </a>
              )}
              {linkedin && (
                <ExternalLink href={linkedin.url} className="hero-link">
                  Ver meu LinkedIn
                </ExternalLink>
              )}
            </div>
          </div>

          <div className="hero-art" aria-label="Apresentação de José Eric">
            <div className="hero-art__grid" aria-hidden="true" />
            <img
              className="portrait-image"
              src="https://github.com/joseeric26.png?size=512"
              alt="Foto de perfil de José Eric no GitHub"
            />
            <div className="hero-note hero-note--top">
              <span className="hero-note__symbol" aria-hidden="true">
                {"{ }"}
              </span>
              <span>curiosidade em prática</span>
            </div>
            <div className="hero-note hero-note--bottom">
              <span className="hero-note__index">01 / 07</span>
              <span>construindo fundamentos</span>
            </div>
            <span className="hero-orbit hero-orbit--one" aria-hidden="true" />
            <span className="hero-orbit hero-orbit--two" aria-hidden="true" />
          </div>

          <div className="hero-bottom">
            <p>{portfolio.presentation.lookingFor}</p>
            <a href="#projetos" aria-label="Ir para projetos">
              Explore os projetos <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        {portfolio.projects.length > 0 && (
          <section
            className="content-section page-shell"
            id="projetos"
            aria-labelledby="projetos-titulo"
          >
            <SectionHeading
              number="02"
              eyebrow="Trabalhos selecionados"
              title="Projetos"
              text="Projetos acadêmicos e estudos que mostram como transformo perguntas em prática."
              id="projetos-titulo"
            />
            <div className="project-grid">
              {portfolio.projects.map((project, index) => (
                <article
                  className="project-card"
                  id={`project-${project.id}`}
                  key={project.id}
                >
                  {project.image?.src && project.image.alt && (
                    <img
                      className="project-card__image"
                      src={project.image.src}
                      alt={project.image.alt}
                    />
                  )}
                  <div className="project-card__top">
                    <span className="project-card__number">
                      0{index + 1}
                    </span>
                    <span className="project-card__category">
                      {project.category}
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-card__summary">{project.summary}</p>
                  {project.technologies.length > 0 && (
                    <ul className="tag-list" aria-label="Tecnologias">
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  )}

                  <details className="project-details">
                    <summary>
                      Explorar detalhes <span aria-hidden="true">＋</span>
                    </summary>
                    <div className="project-details__content">
                      <div>
                        <h4>O desafio</h4>
                        <p>{project.problem}</p>
                      </div>
                      <div>
                        <h4>Minha contribuição</h4>
                        <p>{project.contribution}</p>
                      </div>
                      <div>
                        <h4>O que foi desenvolvido</h4>
                        <p>{project.details}</p>
                      </div>
                      <div>
                        <h4>Resultado</h4>
                        <p>{project.result}</p>
                      </div>
                    </div>
                  </details>

                  <div className="project-card__links">
                    {project.links.code && (
                      <ExternalLink href={project.links.code.url}>
                        Ver código no GitHub
                      </ExternalLink>
                    )}
                    {project.links.demo && (
                      <ExternalLink href={project.links.demo.url}>
                        Abrir demonstração
                      </ExternalLink>
                    )}
                    {project.links.publication && (
                      <ExternalLink href={project.links.publication.url}>
                        Ver publicação no LinkedIn
                      </ExternalLink>
                    )}
                    {project.links.reference && (
                      <ExternalLink href={project.links.reference.url}>
                        Assistir ao pitch
                      </ExternalLink>
                    )}
                  </div>
                </article>
              ))}
            </div>
            {github && (
              <div className="section-outro">
                <p>Mais exercícios e repositórios estão no meu GitHub.</p>
                <ExternalLink href={github.url}>Visitar meu GitHub</ExternalLink>
              </div>
            )}
          </section>
        )}

        {portfolio.skills.length > 0 && (
          <section
            className="content-section content-section--tinted"
            id="habilidades"
            aria-labelledby="habilidades-titulo"
          >
            <div className="page-shell">
              <SectionHeading
                number="03"
                eyebrow="O que venho praticando"
                title="Habilidades técnicas"
                text="Habilidades desenvolvidas nos estudos e projetos, sem escalas artificiais."
                id="habilidades-titulo"
              />
              <div className="skill-grid">
                {portfolio.skills.map((skill) => (
                  <article className="skill-card" key={skill.name}>
                    <span className="skill-card__area">{skill.area}</span>
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                    <ProjectReferences ids={skill.relatedProjectIds} />
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {(portfolio.education.length > 0 ||
          portfolio.certificates.length > 0) && (
          <section
            className="content-section page-shell"
            id="formacao"
            aria-labelledby="formacao-titulo"
          >
            <SectionHeading
              number="04"
              eyebrow="Aprendizado contínuo"
              title="Formação e certificados"
              text="Minha jornada acadêmica e as credenciais mencionadas nas fontes disponíveis."
              id="formacao-titulo"
            />
            {portfolio.education.length > 0 && (
              <div className="education-timeline">
                {portfolio.education.map((item) => (
                  <article className="education-item" key={item.course}>
                    <span
                      className="education-item__marker"
                      aria-hidden="true"
                    />
                    <div className="education-item__meta">
                      <span>{item.period}</span>
                      <span>{item.status}</span>
                    </div>
                    <h3>{item.course}</h3>
                    <p>{item.institution}</p>
                    <span className="education-item__location">
                      {portfolio.location}
                    </span>
                  </article>
                ))}
              </div>
            )}
            {portfolio.certificates.length > 0 && (
              <div className="certificates">
                <div className="certificates__heading">
                  <p className="eyebrow">Aprendizados complementares</p>
                  <p>
                    O currículo menciona estas certificações; emissor, data,
                    carga horária e links de validação não constam no material
                    recebido.
                  </p>
                </div>
                <ul className="certificate-list">
                  {portfolio.certificates.map((certificate) => (
                    <li key={certificate.title}>
                      <span className="certificate-list__icon" aria-hidden="true">
                        ↗
                      </span>
                      <div>
                        <h3>{certificate.title}</h3>
                        {(certificate.issuer || certificate.date || certificate.hours) && (
                          <p>
                            {[certificate.issuer, certificate.date, certificate.hours]
                              .filter(Boolean)
                              .join(" · ")}
                          </p>
                        )}
                      </div>
                      <div className="certificate-list__links">
                        {certificate.validationUrl && (
                          <ExternalLink href={certificate.validationUrl}>
                            Validar credencial
                          </ExternalLink>
                        )}
                        {certificate.pdfPath && (
                          <a
                            className="external-link"
                            href={certificate.pdfPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Abrir PDF (abre em nova aba)"
                          >
                            <span>Abrir PDF</span>
                            <span aria-hidden="true">↗</span>
                            <span className="sr-only">(abre em nova aba)</span>
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {portfolio.hobbies.length > 0 && (
          <section
            className="content-section content-section--tinted"
            id="hobbies"
            aria-labelledby="hobbies-titulo"
          >
            <div className="page-shell">
              <SectionHeading
                number="05"
                eyebrow="Além da tecnologia"
                title="Hobbies pessoais"
                text="Interesses e projetos pessoais que também fazem parte de quem sou."
                id="hobbies-titulo"
              />
              <div className="hobby-grid">
                {portfolio.hobbies.map((hobby) => (
                  <article className="hobby-card" key={hobby.title}>
                    {hobby.image?.src && hobby.image.alt && (
                      <img src={hobby.image.src} alt={hobby.image.alt} />
                    )}
                    <div>
                      <span className="eyebrow">Tempo pessoal</span>
                      <h3>{hobby.title}</h3>
                      <p>{hobby.description}</p>
                      {hobby.link && (
                        <ExternalLink href={hobby.link.url}>
                          {hobby.link.label}
                        </ExternalLink>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {portfolio.tools.length > 0 && (
          <section
            className="content-section page-shell"
            id="ferramentas"
            aria-labelledby="ferramentas-titulo"
          >
            <SectionHeading
              number="06"
              eyebrow="No meu fluxo de trabalho"
              title="Ferramentas que utilizo"
              text="As ferramentas e plataformas que aparecem na prática dos meus projetos."
              id="ferramentas-titulo"
            />
            <div className="tool-list">
              {portfolio.tools.map((tool, index) => (
                <article className="tool-row" key={tool.name}>
                  <span className="tool-row__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{tool.name}</h3>
                  <p>{tool.use}</p>
                  <ProjectReferences ids={tool.relatedProjectIds} />
                </article>
              ))}
            </div>
          </section>
        )}

        {(email || portfolio.contacts.other.length > 0) && (
          <section
            className="contact-section"
            id="contato"
            aria-labelledby="contato-titulo"
          >
            <div className="page-shell contact-layout">
              <div>
                <p className="eyebrow">07 · Vamos conversar?</p>
                <h2 id="contato-titulo">
                  Boas ideias começam
                  <br />
                  com uma conversa.
                </h2>
                <p className="contact-section__text">
                  Estou aberto a conversar sobre estágios, projetos e
                  colaborações. Será um prazer conhecer o que você está
                  construindo.
                </p>
              </div>
              <div className="contact-panel">
                <p className="contact-panel__label">Meu principal canal profissional</p>
                {linkedin && (
                  <ExternalLink
                    href={linkedin.url}
                    className="contact-panel__primary"
                  >
                    Conversar pelo LinkedIn
                  </ExternalLink>
                )}
                {email && (
                  <div className="contact-email">
                    <span className="contact-panel__label">E-mail</span>
                    <a href={`mailto:${email}`}>{email}</a>
                    <div className="contact-email__actions">
                      <a className="button button--lime" href={`mailto:${email}`}>
                        Enviar e-mail <span aria-hidden="true">↗</span>
                      </a>
                      <CopyEmailButton email={email} />
                    </div>
                  </div>
                )}
                <div className="contact-profiles">
                  {github && (
                    <ExternalLink href={github.url}>GitHub</ExternalLink>
                  )}
                  {instagram && (
                    <ExternalLink href={instagram.url}>Instagram</ExternalLink>
                  )}
                  {portfolio.contacts.other.map((contact) => (
                    <ExternalLink href={contact.url} key={contact.label}>
                      {contact.label}
                    </ExternalLink>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="site-footer page-shell">
        <a className="brand" href="#inicio">
          <span className="brand__mark">JE</span>
          <span>José Eric</span>
        </a>
        <p>
          {portfolio.name} <span aria-hidden="true">·</span> {portfolio.location}
        </p>
        {github && (
          <ExternalLink href={github.url}>Repositórios no GitHub</ExternalLink>
        )}
      </footer>
    </>
  );
}
