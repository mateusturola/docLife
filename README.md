# DocLife - Sistema de Help Desk

Sistema de Help Desk com Docusaurus para documentação multimodular (Lifebooks, Kids, Volts, Backoffice).

## 📚 Módulos

- **Lifebooks**: Documentação completa e organizada
- **Kids**: Interface amigável para o público infantil  
- **Volts**: Gestão e monitoramento de energia
- **Backoffice**: Administração central do sistema

## 🎨 Design

- **Cor Primária**: #2c3c63
- **Cor Secundária**: #4e79f9
- Interface moderna e responsiva
- Suporte a modo claro/escuro

## 🚀 Começando

### Pré-requisitos

- Node.js 18.0 ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/mateusturola/docLife.git

# Entre no diretório
cd docLife

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
npm start
```

O site será aberto em `http://localhost:3000`

### Build

```bash
# Gera o build de produção
npm run build
```

Os arquivos estáticos serão gerados na pasta `build/`

### Servir Build Localmente

```bash
# Serve o build localmente para teste
npm run serve
```

## 📁 Estrutura de Diretórios

```
docLife/
├── docs/                  # Documentação em Markdown
│   ├── lifebooks/        # Módulo Lifebooks
│   ├── kids/             # Módulo Kids
│   ├── volts/            # Módulo Volts
│   └── backoffice/       # Módulo Backoffice
├── src/                  # Código fonte
│   ├── css/             # Estilos customizados
│   └── pages/           # Páginas customizadas
├── static/              # Arquivos estáticos
│   └── img/            # Imagens
├── docusaurus.config.js # Configuração do Docusaurus
├── sidebars.js         # Configuração das sidebars
└── package.json        # Dependências do projeto
```

## 📝 Template de Frontmatter

Ao criar novos documentos, use o seguinte template de frontmatter:

```markdown
---
id: identificador-unico
title: Título do Documento
description: Descrição breve do conteúdo
keywords: [palavra-chave1, palavra-chave2, palavra-chave3]
tags: [tag1, tag2, tag3]
module: nome-do-modulo
sidebar_position: 1
---
```

## 🌍 Internacionalização

O sistema está configurado para português brasileiro (pt-BR) por padrão. Para adicionar mais idiomas, consulte a [documentação do Docusaurus sobre i18n](https://docusaurus.io/docs/i18n/introduction).

## 🔍 Busca com Algolia

O sistema está preparado para integração com Algolia Search. Para configurar:

1. Crie uma conta no [Algolia](https://www.algolia.com/)
2. Obtenha suas credenciais (App ID, API Key, Index Name)
3. Descomente e configure a seção `algolia` em `docusaurus.config.js`

```javascript
algolia: {
  appId: 'SEU_APP_ID',
  apiKey: 'SUA_API_KEY',
  indexName: 'SEU_INDEX_NAME',
  contextualSearch: true,
},
```

## 🚀 Deploy

### Vercel

1. Importe o repositório no [Vercel](https://vercel.com)
2. O Vercel detectará automaticamente a configuração do Docusaurus
3. Deploy será feito automaticamente

### Netlify

1. Importe o repositório no [Netlify](https://www.netlify.com)
2. As configurações em `netlify.toml` serão aplicadas automaticamente
3. Deploy será feito automaticamente

### GitHub Pages

```bash
# Configure o repositório e branch no docusaurus.config.js
# Depois execute:
npm run deploy
```

## 🛠️ Tecnologias

- [Docusaurus 3](https://docusaurus.io/) - Framework de documentação
- [React 18](https://react.dev/) - Biblioteca JavaScript
- [MDX](https://mdxjs.com/) - Markdown + JSX

## 📄 Licença

Este projeto está sob a licença ISC.

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga estas etapas:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte, entre em contato através do repositório GitHub ou abra uma issue.