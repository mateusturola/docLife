import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/lifebooks/intro">
            Começar Agora 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const modules = [
    {
      title: '📚 Lifebooks',
      link: '/docs/lifebooks/intro',
      description: 'Documentação completa e organizada para gerenciamento de conteúdo.',
      badge: 'module-badge--lifebooks'
    },
    {
      title: '🎨 Kids',
      link: '/docs/kids/intro',
      description: 'Módulo especializado para o público infantil com interface amigável.',
      badge: 'module-badge--kids'
    },
    {
      title: '⚡ Volts',
      link: '/docs/volts/intro',
      description: 'Sistema de monitoramento e gestão de energia em tempo real.',
      badge: 'module-badge--volts'
    },
    {
      title: '⚙️ Backoffice',
      link: '/docs/backoffice/intro',
      description: 'Administração central e gestão completa do sistema.',
      badge: 'module-badge--backoffice'
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {modules.map((module, idx) => (
            <div key={idx} className="col col--6" style={{marginBottom: '2rem'}}>
              <div className="card">
                <div className="card__header">
                  <h3>
                    <span className={`module-badge ${module.badge}`}>
                      {module.title.split(' ')[1] || module.title}
                    </span>
                    {module.title}
                  </h3>
                </div>
                <div className="card__body">
                  <p>{module.description}</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    to={module.link}>
                    Acessar Documentação
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bem-vindo ao ${siteConfig.title}`}
      description="Sistema de Help Desk com Documentação Multimodular">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
