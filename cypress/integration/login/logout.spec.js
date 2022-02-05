describe('Fazer logout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport('iphone-6');
  });

  it('Testando a funcionalidade de logout', () => {
    cy.get('[data-cy="menu"]').click();

    cy.get('[data-cy="item-logout"]').click();

    cy.contains('Login');

    cy.contains('Entrar');
  });
})
