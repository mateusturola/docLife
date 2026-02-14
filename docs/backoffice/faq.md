---
id: faq
title: FAQ - Backoffice
description: Perguntas frequentes sobre o módulo Backoffice
keywords: [backoffice, faq, perguntas frequentes, administração, suporte]
tags: [backoffice, faq, admin]
module: backoffice
sidebar_position: 3
---

# FAQ - Backoffice

Perguntas frequentes sobre o módulo Backoffice.

## Gestão de Usuários

### Como adiciono novos usuários ao sistema?

Acesse Usuários > Novo Usuário no painel de controle e preencha os dados necessários. Um email de convite será enviado automaticamente.

### Posso importar usuários em lote?

Sim, use a função de importação CSV disponível na seção de usuários para adicionar múltiplos usuários de uma vez.

### Como revogo o acesso de um usuário?

Você pode desativar a conta do usuário temporariamente ou excluí-la permanentemente através da página de gestão de usuários.

### Como redefino a senha de um usuário?

Acesse o perfil do usuário e selecione "Redefinir Senha". Um link de redefinição será enviado por email.

## Permissões e Segurança

### Como configuro permissões granulares?

Use o editor de permissões para definir acesso específico por módulo, funcionalidade e tipo de operação (leitura, escrita, exclusão).

### O sistema suporta autenticação de dois fatores?

Sim, 2FA pode ser habilitado globalmente ou por grupo de usuários nas configurações de segurança.

### Como implemento Single Sign-On (SSO)?

Configure a integração SSO na seção de Integrações > Autenticação. Suportamos SAML, OAuth e OpenID Connect.

## Configurações do Sistema

### Posso personalizar a aparência do sistema?

Sim, através das configurações de branding você pode customizar logo, cores, favicon e outros elementos visuais.

### Como altero o idioma padrão?

Acesse Configurações > Idioma e Localização para definir o idioma padrão e idiomas disponíveis.

### As alterações de configuração requerem reinicialização?

A maioria das configurações é aplicada imediatamente. Algumas alterações críticas podem requerer reinicialização do serviço.

## Backups e Recuperação

### Com que frequência devo fazer backup?

Recomendamos backups diários automáticos para ambientes de produção, com retenção mínima de 30 dias.

### Quanto tempo leva para restaurar um backup?

O tempo de restauração depende do tamanho dos dados, mas geralmente leva de alguns minutos a algumas horas.

### Os backups incluem todos os dados?

Sim, backups completos incluem banco de dados, arquivos, configurações e logs.

### Posso fazer download dos backups?

Sim, administradores podem baixar backups para armazenamento local ou em nuvem externa.

## Performance e Monitoramento

### Como monitoro a saúde do sistema?

Use o dashboard de monitoramento que exibe métricas de CPU, memória, disco e rede em tempo real.

### O que fazer quando o sistema está lento?

Verifique o dashboard de performance, revise os logs de erro e considere otimizar consultas ou aumentar recursos.

### Como vejo quem está online?

A seção de Usuários > Ativos mostra todos os usuários conectados no momento.

## Integrações

### Quais integrações estão disponíveis?

O sistema suporta integrações com diversos serviços: email (SMTP), autenticação (SSO), analytics (Google Analytics, Algolia), e APIs RESTful.

### Como configuro integração com Algolia?

Acesse Integrações > Busca e insira suas credenciais do Algolia. A indexação inicial será feita automaticamente.

### Posso criar integrações personalizadas?

Sim, através da nossa API RESTful você pode criar integrações customizadas. Consulte a documentação da API.

## Atualizações e Manutenção

### Como sei quando há atualizações disponíveis?

O sistema notifica automaticamente quando há atualizações. Você também pode verificar manualmente em Sistema > Atualizações.

### As atualizações causam downtime?

Atualizações menores geralmente não causam interrupção. Updates maiores são agendados em janelas de manutenção.

### Posso reverter uma atualização?

Sim, é possível fazer rollback para a versão anterior através da gestão de versões, desde que tenha um backup válido.

---

**Suporte Administrativo**: Para questões administrativas complexas, entre em contato com nosso suporte especializado para administradores.
