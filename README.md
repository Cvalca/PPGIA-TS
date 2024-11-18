# PPGIA - Teste de software 2a avaliação
Projeto da disciplina de Teste de software do Programa de Pós Graduação em Informática Aplicada (PPGIA) na Universidade Federal Rural de Pernambuco (UFRPE)
**Objetivo:** Avaliação prática da ferramenta Cypress utilizando um exemplo de projeto conhecido pelo estudante, o [Arena Sport Club](https://www.arenasportclub.site/).

**Entregáveis:**
- [Link para o documento de planejamento e relatório](https://docs.google.com/document/d/1H_TRI9qgewez0ir-1ol4siIA7NKLFesZ/edit?usp=sharing&ouid=101682983741799546791&rtpof=true&sd=true).
- [Slides da apresentação](https://www.canva.com/design/DAGWTmXkgHc/zyAPOIrV4jfIhn1O13-Hbg/view?utm_content=DAGWTmXkgHc&utm_campaign=designshare&utm_medium=link&utm_source=editor).
- [Link para o documento de Plano de teste](https://docs.google.com/document/d/1CdMcSdXWWdFglLvoMA-9_hOMdk2Oo-5k/edit?usp=sharing&ouid=101682983741799546791&rtpof=true&sd=true).

# Caracterização da plataforma e da ferramenta de teste
## Cypress - Ferramenta de Teste
O Cypress é uma ferramenta de automação de testes end-to-end (E2E) voltada principalmente para aplicações web. Ele permite que desenvolvedores e testadores escrevam, executem e visualizem testes que simulam a interação do usuário com uma aplicação, verificando a funcionalidade e o comportamento do sistema de ponta a ponta. Algumas vantagens do Cypress incluem sua facilidade de configuração e uso, execução em tempo real e interface gráfica, escrito em JavaScript e integração com Node.js, controle Completo do Ambiente de Teste, simula de maneira precisa a experiência real do usuário, realização de testes rápidos e eficientes.
- Sua documentação pode ser facilmente encontrada no seguinte link: [Cypress DOCS](https://docs.cypress.io/app/get-started/why-cypress)

## Arena Sport Club - Plataforma testada
Trata-se de uma aplicação web para aqueles que desejam acompanhar diversos esportes simultaneamente, escolhida pela familiaridade do estudante com a plataforma, de sua intuitividade e disponibilidade Web.
- Link da plataforma: [Arena Sport Club](https://www.arenasportclub.site)

# Tutorial de instalação e configuração no windows 11
## 1 Pré-requisitos (De acordo com a [documentação oficial](https://docs.cypress.io/app/get-started/install-cypress#System-requirements))
### 1.A Sistema Operacional
- macOS 10.15 e superior (Intel ou Apple Silicon 64 bits (x64 ou arm64)).
- Linux Ubuntu 20.04 e superior, Fedora 39 e superior e Debian 11 e superior (x64 ou arm64) (veja os pré-requisitos do Linux abaixo).
  - O Cypress descontinuou o uso do Node.js 16.x no Cypress 13.0.0. Recomendamos que os usuários atualizem para pelo menos o Node.js 18.x. Por motivos relacionados, o Cypress descontinua o uso de sistemas operacionais Linux com biblioteca glibc versões 2.17 - 2.27. O comando Linux CLI ldd --version exibe sua versão glibc.
- Windows 10 e superior (x64).

### 1.B Node.js
O Cypress requer Node.js para instalar. Oferecemos suporte às versões listadas abaixo:
- Node.js 18.x, 20.x, 22.x e acima

### 1.C CPU e Memória
- Mínimo de 2 CPUs para executar o Cypress
- 1 CPU adicional se a gravação de vídeo estiver habilitada
- 1 CPU adicional por processo que você executa fora do Cypress, como:
- Servidor de aplicativo (frontend)
- Servidor de aplicativo (backend)
- Banco de dados de aplicativo
- Qualquer infraestrutura adicional (Redis, Kafka, etc..)

- Memória: mínimo de 4 GB, 8 GB+ para execuções de teste mais longas

## 2 Instalação e execução
No path do seu projeto, abra um terminal (pode ser feito no terminal do visual studio também).
- Para instalar, utilizar o comando ```npm install cypress --save-dev```
- Para executar localmente, basta utilizar o comando ```npx cypress open```
  - (Windows) Na primeira vez, será necessário fornecer permissões para uso.
- Para visualizar resultados anteriores, é preciso associar a um projeto do cypress cloud. Para isso, clique em runs e copie o código para rodar no terminal, então os resultados poderão ser vistos na plataforma web do cypress junto a vários dados para serem analisados.

### 2.A Configurando o projeto no primeiro uso
- Rodar o cypress pela primeira vez;
- Selecionar o tipo de teste a se realizar: "E2E Testing";  
  - Essa opção foi escolhida, pois o sistema a ser testado está disposto em uma plataforma web.
  - Selecione o navegador e clique em rodar.

### 2.B Gravação das rodagens no cloud
- Para gravar os resultados na cloud, deve ser rodado no terminal o seguinte comando:
```npx cypress run --record --key [sua_chave_aqui]```
Onde a chave do seu projeto deve ser colocada, para que seja gravado.