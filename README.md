# PPGIA - Teste de software 2a avaliação
Projeto da disciplina de Teste de software do Programa de Pós Graduação em Informática Aplicada (PPGIA) na Universidade Federal Rural de Pernambuco (UFRPE)
**Objetivo:** Avaliação prática da ferramenta.

**Entregáveis:**
- [](Link para o documento de )

# Tutorial de instalação e configuração no windows 11
## 1. Pré-requisitos (De acordo com a [documentação oficial](https://docs.cypress.io/app/get-started/install-cypress#System-requirements)
### 1.A. Sistema Operacional
- macOS 10.15 e superior (Intel ou Apple Silicon 64 bits (x64 ou arm64)).
- Linux Ubuntu 20.04 e superior, Fedora 39 e superior e Debian 11 e superior (x64 ou arm64) (veja os pré-requisitos do Linux abaixo).
  - O Cypress descontinuou o uso do Node.js 16.x no Cypress 13.0.0. Recomendamos que os usuários atualizem para pelo menos o Node.js 18.x. Por motivos relacionados, o Cypress descontinua o uso de sistemas operacionais Linux com biblioteca glibc versões 2.17 - 2.27. O comando Linux CLI ldd --version exibe sua versão glibc.
- Windows 10 e superior (x64).

### 1.B. Node.js
O Cypress requer Node.js para instalar. Oferecemos suporte às versões listadas abaixo:
- Node.js 18.x, 20.x, 22.x e acima

### 1.C. CPU e Memória
- Mínimo de 2 CPUs para executar o Cypress
- 1 CPU adicional se a gravação de vídeo estiver habilitada
- 1 CPU adicional por processo que você executa fora do Cypress, como:
- Servidor de aplicativo (frontend)
- Servidor de aplicativo (backend)
- Banco de dados de aplicativo
- Qualquer infraestrutura adicional (Redis, Kafka, etc..)

- Memória: mínimo de 4 GB, 8 GB+ para execuções de teste mais longas

## 2. Instalação e execução
- Para instalar, utilizar o comando ```npm install cypress --save-dev```
- Para executar, utilizar o comando ```npx cypress open```
  - (Windows) Na primeira vez, será necessário fornecer permissões para uso.
