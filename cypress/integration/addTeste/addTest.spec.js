describe('Adicionar Categoria', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('http://localhost:3000');
      });

  it('Testando a funcionalidade de logout', () => {
    cy.get('[data-cy="menu"]').click();

    cy.get('[data-cy="item-categories"]').click();

    cy.get('[data-cy="add-categories"]').click();

    cy.contains('Minhas Finanças');

    cy.contains('Nova Categoria');

    let newCat = 'Categoria teste '+(Math.floor(Math.random() * 100) + 1);

    cy.get('[data-cy="input-cat-name"]').type(newCat);

    cy.contains('PRONTO').click();

    cy.contains(newCat);


  });
})
