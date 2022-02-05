describe('Fazer logout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport('iphone-6');
  });

  it('Testando a funcionalidade de categories', () => {
    cy.get('[data-cy="menu"]').click();
    cy.get('[data-cy="item-categories"]').click();

    cy.contains('Categorias')
    cy.contains('Cursos')
  });
});
