describe('water-watch', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.findByText('Ionic Blank').should('exist');
  });
});
