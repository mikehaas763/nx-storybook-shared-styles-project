describe('libo', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mincompcomponent--primary'));
  it('should render the component', () => {
    cy.get('testsharedstyles-min-comp').should('exist');
  });
});