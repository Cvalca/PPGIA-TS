describe('1 Login e Logout na plataforma', () => {
  it('1.a Login sem entradas', () => {
    cy.visit('/')
    cy.get('.nav-item').click()
    cy.get('.dropdown-menu > :nth-child(1)').click()
    cy.get('.btn-success').click()
    cy.get('.error-login').should('be.visible').and('have.text', 'Preencha todos os campos!')
  })

  it('1.b Login com email não cadastrado', () => {
    cy.login('joaovict@teste.com', '12345678')
    cy.get('.error-login').should('be.visible').and('have.text', 'Email não encontrado!')
  })

  it('1.c Login com email cadastrado e senha errada', () => {
    cy.login('joao@teste.com', 'abcd')
    cy.get('.error-login').should('be.visible').and('have.text', 'Senha incorreta!')
  })

  it('1.d Login válido', () => {
    cy.login('joao@teste.com', '12345678')
    cy.get('.nav-item').click()
    cy.get('.dropdown-item').should('contain.text', 'Sair')
  })

  it('1.e Logout', () => {
    cy.login('joao@teste.com', '12345678')
    cy.get('.nav-item').click()
    cy.get('.dropdown-item').click()
    cy.get('.nav-item').click()
    cy.get('.dropdown-menu').within(() => {
      cy.contains('Entrar').should('be.visible')
      cy.contains('Cadastrar').should('be.visible')
    })
  })
})

describe('2 Visualizar campeonatos e jogos', () => {
  beforeEach(() => {
    cy.login('joao@teste.com', '12345678')
  })

  it('2.a Favoritar campeonatos pela barra lateral', () => {
    cy.get('.match-header').click();
    cy.get('[href="/campeonato/1123"] > .list-group > #list-group-sidebar > .justify-content-md-center > .col-sidebar-left > #button-favorite-sidebar').click();
    cy.get(':nth-child(2) > .list-group > #list-group-sidebar > .justify-content-md-center > #name-camp-sidebar').should('contain.text', 'Campeonato Brasileiro'); 
  });

  it('2.b Visualizar detalhes de campeonato pela barra lateral', () => {
    cy.get('.match-header').click();
    cy.get(':nth-child(4) > .list-group > #list-group-sidebar > .justify-content-md-center > #name-camp-sidebar > span').click()
    cy.url().should('include', '/campeonato')
  })

  it('2.c Pesquisar e visualizar detalhes de campeonatos válidos', () => {
    cy.get('.search-header').type('Campeonato Brasileiro{enter}')
    cy.get('[href="/campeonato/1123"] > .justify-content-center-search > .col-search > .row > .name-search').click()
    cy.url().should('include', '/campeonato/1123')
  })

  //estático
  it('2.d Visualizar detalhes de jogo da aba resultados (Geral)', () => {
    cy.get('[href="/partida/28262"] > .match').click()
    cy.url().should('include', '/partida/28262')
  })
})

describe('3 Visualizar equipes', () => {
  beforeEach(() => {
    cy.login('joao@teste.com', '12345678')
  })

  it('3.a Pesquisar e Favoritar equipes na barra lateral', () => {
    cy.get('#button-favorite-sidebar > #title-text-side-bar').click()
    cy.get('#form-sidebar > .form-control').type('sport{enter}')
    cy.wait(5000)
    cy.get(':nth-child(1) > .justify-content-center-search > .col-md-1 > #button-favorite-sidebar').click()
    cy.get('[href="/equipe/1284"] > .list-group > #list-group-sidebar').should('be.visible')
  })

  it('3.b Pesquisar e Visualizar detalhes de equipe', () => {
    cy.get('.search-header').type('sport{enter}')
    cy.get('[href="/equipe/1284"] > .justify-content-center-search > .col-search > :nth-child(1) > .name-search').click()
    cy.url().should('include', '/equipe/1284')
  })

  it('3.c Ver equipes a partir de um campeonato', () => {
    cy.get('.match-header').click();
    cy.get(':nth-child(4) > .list-group > #list-group-sidebar > .justify-content-md-center > #name-camp-sidebar > span').click()
    cy.get(':nth-child(1) > .link-results > .match').click()
    cy.get(':nth-child(4) > .link-team-match > .teams-name').click()
    cy.url().should('include', '/equipe')
  })
})

describe('4 Visualizar notícias', () => {
  it('4.a Visualizar notícias', () => {
    cy.get('[href="/noticias"] > .nav-img').click()
    cy.get(':nth-child(1) > :nth-child(2) > .link2-news > .title-news').invoke('attr', 'href').then((href) => {
      cy.get(':nth-child(1) > :nth-child(2) > .link2-news > .title-news').click() 
        cy.url().should('eq', `${Cypress.config('baseUrl')}${href}`)
    })
  })
})

describe('5 Realizar previsão de partida', () => {
  beforeEach(() => {
    cy.login('joao@teste.com', '12345678')
  })

  it('5.a Realizar previsão de partida sem partida selecionada', () => {
    cy.get('[href="/previsoes"]').click()
    cy.get(':nth-child(3) > .btn').click()
    cy.get('.error-login').should('have.text', 'Selecione uma partida antes de realizar a previsão!')
  })

   //estático
  it('5.b Realizar previsão de partida', () => {
    cy.get('[href="/partida/28262"] > .match').click()
    cy.get('.link-results > #button-match').click()
    cy.get(':nth-child(3) > .btn').click()
    cy.get('#root > :nth-child(4) > :nth-child(2)').should('be.visible')
  })
})
