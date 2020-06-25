describe('Post Resource', () => {
  it('Creating a New Post', () => {
    cy.visit(
      'https://www.neuefische.de/weiterbildung/web-development?location=hamburg'
    ); // 1.

    cy.get('[id=mce-FIRSTNAME]').type('Hallo');

    cy.get('[id=mce-LASTNAME]').type('Gesche');

    cy.get('[id=mce-EMAIL]').type('gruessevon@hh-w3.de');

    cy.get('[value=2]').click({ force: true, multiple: true });

    cy.contains('Remote').click();

    cy.contains('anfordern').click();
  });
});
