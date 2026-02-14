# Prompt para GitHub Copilot - Sistema de Help Desk

## 🎯 Objetivo do Projeto

Criar um sistema de Help Desk profissional para documentação de múltiplos módulos de software, com foco em:

* Facilidade de documentação (Markdown)

* Facilidade de busca para usuários

* Preparação para integração futura com IA (bot WhatsApp)

* Edição pelo time via GitHub

* Hospedagem gratuita com integração GitHub

---

## 🏗️ Stack Tecnológica

### Framework Principal

* **Docusaurus** (gerador de sites estáticos para documentação)

* Versão: Latest stable

### Hospedagem

* **Vercel** ou **Netlify** (ambos têm integração automática com GitHub e plano gratuito)

* Deploy automático a cada push na branch `main`

### Repositório

* GitHub (público ou privado)

* Estrutura de branches: `main` para produção

### CMS (Opcional para Fase 2)

* **Decap CMS** (antigo Netlify CMS) para edição visual

* Integração via GitHub OAuth

---

## 🎨 Identidade Visual

### Cores do Sistema

```css
:root {
    --background: #fff;
    --foreground: #262b29;
    --card: #f7f8f8;
    --popover: #f7f8f8;
    --popover-foreground: #262b29;
    --primary: #2c3c63;
    --primary-foreground: #f0f7ff;
    --secondary: #4e79f9;
    --secondary-foreground: #dce3fa;
}
```

### Aplicação no Docusaurus

* Primary color: `#2c3c63` (azul escuro)

* Secondary color: `#4e79f9` (azul royal)

* Background: `#fff`

* Cards: `#f7f8f8`

---

## 📁 Estrutura de Pastas

```
help-desk/
├── docs/
│   ├── lifebooks/                    # Módulo principal (ativo)
│   │   ├── introducao/
│   │   │   └── visao-geral.md
│   │   ├── conta/
│   │   │   ├── ativar-e-acessar-conta.md
│   │   │   └── recuperar-senha.md
│   │   ├── configuracoes/
│   │   └── erros-comuns/
│   │
│   ├── novo-convertido/              # Em breve
│   │   └── _placeholder.md
│   │
│   ├── kids/                         # Em breve
│   │   └── _placeholder.md
│   │
│   ├── volts/                        # Em breve
│   │   └── _placeholder.md
│   │
│   └── backoffice/                   # Em breve
│       └── _placeholder.md
│
├── static/
│   ├── img/
│   │   ├── lifebooks/               # Imagens do módulo Lifebooks
│   │   ├── kids/
│   │   ├── volts/
│   │   └── logo.svg
│   └── fonts/
│
├── src/
│   ├── css/
│   │   └── custom.css               # Customização de cores
│   └── pages/
│       └── index.js                 # Homepage customizada
│
├── docusaurus.config.js             # Configuração principal
├── sidebars.js                      # Configuração do menu lateral
└── package.json
```

---

## 📝 Padrão de Documentação (Frontmatter)

### Template Obrigatório para Todos os Arquivos .md

```markdown
---
id: nome-do-arquivo
title: Título Completo da Página
sidebar_label: Nome Curto no Menu
description: Descrição breve para SEO e IA (máx 160 caracteres)
keywords: [palavra1, palavra2, palavra3]
tags: [categoria, tipo]
module: lifebooks
---

# Título Principal

## 📌 Quando usar
Contexto de quando o usuário deve seguir este guia.

## ✅ Passo a passo
1. Primeiro passo
2. Segundo passo
3. Terceiro passo

## ⚠️ Problemas comuns
- **Erro X:** Solução Y
- **Erro Z:** Solução W

## 🔗 Artigos relacionados
- [Link para outro artigo](../outro-artigo)

## 🔎 Palavras-chave para busca
termo1, termo2, termo3
```

### Regras de Ouro

1. **Um arquivo = Uma pergunta/problema**

2. **Títulos descritivos:** "Como ativar conta" em vez de "Ativação"

3. **Imagens sempre com alt text:** `![Descrição da imagem](../img/lifebooks/screenshot.png)`

4. **Links relativos:** Use `../` para navegar entre pastas

---

## ⚙️ Configuração do docusaurus.config.js

```javascript
module.exports = {
  title: 'Help Desk Central',
  tagline: 'Documentação completa dos nossos sistemas',
  url: 'https://seu-dominio.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  
  organizationName: 'seu-usuario-github',
  projectName: 'help-desk',
  
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/seu-usuario/help-desk/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Help Desk',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'lifebooks/introducao/visao-geral',
          position: 'left',
          label: 'Lifebooks',
        },
        {
          type: 'dropdown',
          label: 'Outros Módulos',
          position: 'left',
          items: [
            {
              label: 'Novo Convertido (em breve)',
              to: '/docs/novo-convertido',
            },
            {
              label: 'Kids (em breve)',
              to: '/docs/kids',
            },
            {
              label: 'Volts (em breve)',
              to: '/docs/volts',
            },
            {
              label: 'Backoffice (em breve)',
              to: '/docs/backoffice',
            },
          ],
        },
        {
          href: 'https://github.com/seu-usuario/help-desk',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Lifebooks',
              to: '/docs/lifebooks/introducao/visao-geral',
            },
          ],
        },
        {
          title: 'Suporte',
          items: [
            {
              label: 'Abrir Chamado',
              href: '#',
            },
            {
              label: 'Status do Sistema',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Help Desk Central.`,
    },
    
    // Busca (Algolia - configurar depois)
    algolia: {
      appId: 'SEU_APP_ID',
      apiKey: 'SUA_API_KEY',
      indexName: 'help-desk',
      contextualSearch: true,
    },
    
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};
```

---

## 🎨 Customização de Cores (src/css/custom.css)

```css
:root {
  /* Cores Primárias */
  --ifm-color-primary: #2c3c63;
  --ifm-color-primary-dark: #26354d;
  --ifm-color-primary-darker: #233047;
  --ifm-color-primary-darkest: #1c2739;
  --ifm-color-primary-light: #324479;
  --ifm-color-primary-lighter: #354a7f;
  --ifm-color-primary-lightest: #3d5495;

  /* Cores Secundárias */
  --ifm-color-secondary: #4e79f9;
  
  /* Background */
  --ifm-background-color: #fff;
  --ifm-card-background-color: #f7f8f8;
  
  /* Texto */
  --ifm-font-color-base: #262b29;
  
  /* Links */
  --ifm-link-color: #4e79f9;
  --ifm-link-hover-color: #2c3c63;
  
  /* Código */
  --ifm-code-font-size: 95%;
  
  /* Navbar */
  --ifm-navbar-background-color: #2c3c63;
  --ifm-navbar-link-color: #fff;
}

/* Dark mode (opcional) */
[data-theme='dark'] {
  --ifm-color-primary: #4e79f9;
  --ifm-background-color: #1a1a1a;
  --ifm-card-background-color: #262b29;
}

/* Customizações adicionais */
.navbar {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.hero {
  background: linear-gradient(135deg, #2c3c63 0%, #4e79f9 100%);
  color: white;
}

/* Cards de módulos */
.module-card {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.module-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  transform: translateY(-4px);
}
```

---

## 📋 Configuração do Menu Lateral (sidebars.js)

```javascript
module.exports = {
  lifebooks: [
    {
      type: 'category',
      label: '🚀 Introdução',
      items: ['lifebooks/introducao/visao-geral'],
    },
    {
      type: 'category',
      label: '👤 Conta',
      items: [
        'lifebooks/conta/ativar-e-acessar-conta',
        'lifebooks/conta/recuperar-senha',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Configurações',
      items: [],
    },
    {
      type: 'category',
      label: '⚠️ Erros Comuns',
      items: [],
    },
  ],
  
  // Outros módulos (preparados para o futuro)
  kids: [
    {
      type: 'doc',
      id: 'kids/_placeholder',
    },
  ],
  
  volts: [
    {
      type: 'doc',
      id: 'volts/_placeholder',
    },
  ],
  
  backoffice: [
    {
      type: 'doc',
      id: 'backoffice/_placeholder',
    },
  ],
};
```

---

## 🚀 Comandos para Iniciar o Projeto

### 1\. Criar o projeto Docusaurus

```bash
npx create-docusaurus@latest help-desk classic --typescript false
cd help-desk
```

### 2\. Instalar dependências adicionais

```bash
npm install
```

### 3\. Rodar localmente

```bash
npm start
```

### 4\. Build para produção

```bash
npm run build
```

### 5\. Testar build localmente

```bash
npm run serve
```

---

## 🌐 Deploy (Vercel ou Netlify)

### Opção 1: Vercel

1. Conecte o repositório GitHub no painel da Vercel

2. Configure:

* **Build Command:** `npm run build`

* **Output Directory:** `build`

* **Install Command:** `npm install`

1. Deploy automático a cada push

### Opção 2: Netlify

1. Conecte o repositório GitHub no painel da Netlify

2. Configure:

* **Build Command:** `npm run build`

* **Publish Directory:** `build`

1. Deploy automático a cada push

### Arquivo netlify.toml (opcional)

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🤖 Preparação para IA (Fase Futura)

### Por que essa estrutura é perfeita para IA?

1. **Markdown estruturado:** Fácil de parsear e indexar

2. **Frontmatter rico:** Metadados para busca semântica

3. **Keywords explícitas:** A IA sabe exatamente sobre o que é cada página

4. **Hierarquia clara:** Módulos → Categorias → Artigos

5. **Imagens locais:** Contexto visual disponível

### Próximos Passos para Integração com WhatsApp Bot

#### Fase 1: Indexação

* Usar **Algolia DocSearch** (grátis para docs públicas)

* Ou criar índice vetorial com **Supabase + pgvector** (grátis até 500MB)

#### Fase 2: API de Busca

* Endpoint que recebe pergunta do usuário

* Busca nos documentos indexados

* Retorna o artigo mais relevante

#### Fase 3: Bot WhatsApp

* Integrar com WhatsApp Business API

* Usuário pergunta → API busca → LLM resume → Responde

* Fluxo: WhatsApp → Webhook → Backend → Busca Vetorial → OpenAI/Claude → Resposta

---

## 📦 Arquivo Inicial: [ativar-e-acessar-conta.md](http://ativar-e-acessar-conta.md)

```markdown
---
id: ativar-e-acessar-conta
title: Como Ativar e Acessar sua Conta no Lifebooks
sidebar_label: Ativação de Conta
description: Guia completo para primeiro acesso e ativação de conta no sistema Lifebooks.
keywords: [login, ativação, primeiro acesso, senha, lifebooks]
tags: [conta, autenticação, início]
module: lifebooks
---

# Ativar e Acessar sua Conta no Lifebooks

## 📌 Quando usar
Use este guia quando você receber o e-mail de boas-vindas e precisar fazer o primeiro acesso ao sistema.

## ✅ Passo a passo

### 1. Receba o e-mail de ativação
Você receberá um e-mail com o assunto "Bem-vindo ao Lifebooks".

![E-mail de boas-vindas](../../static/img/lifebooks/email-boas-vindas.png)

### 2. Clique no link de ativação
Clique no botão "Ativar Conta" no e-mail.

### 3. Crie sua senha
- Mínimo de 8 caracteres
- Pelo menos uma letra maiúscula
- Pelo menos um número

![Tela de criação de senha](../../static/img/lifebooks/criar-senha.png)

### 4. Faça login
Use seu e-mail e a senha que você acabou de criar.

![Tela de login](../../static/img/lifebooks/tela-login.png)

## ⚠️ Problemas comuns

### Link de ativação expirado
**Solução:** Clique em "Reenviar e-mail de ativação" na tela de login.

### E-mail não chegou
**Solução:** Verifique a caixa de spam ou entre em contato com o suporte.

### Senha não aceita
**Solução:** Certifique-se de que sua senha atende aos requisitos mínimos.

## 🔗 Artigos relacionados
- [Como recuperar senha](./recuperar-senha)
- [Como editar perfil](../configuracoes/editar-perfil)

## 🔎 Palavras-chave para busca
login, entrar, acessar, ativar conta, primeiro acesso, senha, cadastro
```

---

## ✅ Checklist de Implementação

### Fase 1: Setup Inicial

* \[ \] Criar repositório no GitHub

* \[ \] Rodar `npx create-docusaurus@latest`

* \[ \] Configurar `docusaurus.config.js` com as cores

* \[ \] Criar estrutura de pastas para todos os módulos

* \[ \] Adicionar logo e favicon em `/static/img/`

* \[ \] Customizar `custom.css` com as cores do projeto

### Fase 2: Conteúdo

* \[ \] Migrar arquivo `ativar-e-acessar-conta.md` para `/docs/lifebooks/conta/`

* \[ \] Adicionar imagens em `/static/img/lifebooks/`

* \[ \] Criar página de introdução (`visao-geral.md`)

* \[ \] Configurar `sidebars.js` com a navegação

* \[ \] Criar placeholders para módulos futuros

### Fase 3: Deploy

* \[ \] Conectar repositório com Vercel ou Netlify

* \[ \] Configurar domínio personalizado (se houver)

* \[ \] Testar deploy automático (fazer um commit de teste)

* \[ \] Verificar se todas as imagens carregam corretamente

### Fase 4: Busca (Opcional agora)

* \[ \] Aplicar para Algolia DocSearch (grátis)

* \[ \] Configurar chaves no `docusaurus.config.js`

* \[ \] Testar busca no site

### Fase 5: CMS Visual (Opcional)

* \[ \] Instalar Decap CMS

* \[ \] Configurar `config.yml`

* \[ \] Configurar autenticação GitHub OAuth

* \[ \] Testar edição via `/admin`

---

## 🎯 Resultado Esperado

Ao final, você terá:

✅ Site de documentação profissional\
✅ Navegação por módulos (Lifebooks, Kids, Volts, etc.)\
✅ Busca interna funcionando\
✅ Deploy automático via GitHub\
✅ Estrutura pronta para IA\
✅ Custo: R$ 0,00

---

## 📞 Próximos Passos Após Deploy

1. **Documentar 5-10 páginas do Lifebooks** (quanto mais conteúdo, melhor)

2. **Aplicar para Algolia DocSearch** (busca grátis)

3. **Planejar integração com IA:**

* Escolher entre OpenAI, Claude ou modelo open-source

* Decidir arquitetura (RAG com Supabase ou Pinecone)

* Criar endpoint de API para o bot

1. **Integrar com WhatsApp Business API**

---

## 🧠 Dicas para o GitHub Copilot

Ao trabalhar no projeto, use prompts como:

* "Crie um arquivo markdown seguindo o template de documentação"

* "Configure o sidebar para incluir a categoria X"

* "Adicione uma nova cor no custom.css"

* "Crie um componente React para card de módulo"

* "Configure o Algolia search no docusaurus.config"

---

**Versão do Documento:** 1.0\
**Data:** 2026-02-14\
**Autor:** Sistema de Help Desk Central
