describe('Teste na tela de lista e remover', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
 })

 it('Testando o remover', () => {

    cy.contains('[data-cy="Inicio"]');

    cy.get('[data-cy="menu"]').click();

    cy.get('[data-cy="item-categories').click();

    cy.get('[data-cy="remove-cat-8"]').click();


 })
})