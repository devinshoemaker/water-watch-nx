// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// eslint-disable-next-line @typescript-eslint/no-namespace
// declare namespace Cypress {
//   interface Chainable<Subject> {
//     login(email: string, password: string): void;
//   }
// }
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => {
//   console.log('Custom command example: Login', email, password);
// });
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    loginWithEmail(): void;
    clearFirebaseLocalStorage(): void;
  }
}

Cypress.Commands.add('loginWithEmail', () => {
  cy.server();
  cy.route({
    method: 'POST',
    url:
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=*'
  }).as('getAccountInfo');

  cy.visit('/login');
  cy.get('.firebaseui-id-email').type(Cypress.env('user'));
  cy.get('.firebaseui-id-submit').click();
  cy.get('.firebaseui-id-password').type(Cypress.env('pass'));
  cy.get('.firebaseui-id-submit').click();

  cy.wait('@getAccountInfo');
  cy.url().should('eq', 'http://localhost:4200/home');
});

Cypress.Commands.add('clearFirebaseLocalStorage', () => {
  localStorage.removeItem('authenticated');
  indexedDB.deleteDatabase('firebaseLocalStorageDb');
});
