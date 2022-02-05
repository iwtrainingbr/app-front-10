describe('Testar Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it ('Testar se a tela funciona', () => {
    cy.contains('Minhas Finanças');

    cy.contains('Inicio');

    cy.contains('Teste').click();
  });
});
