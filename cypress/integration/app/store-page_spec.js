const titleSelector = '[data-test-id="store-details-title"]';
const storeSectionSelector = '[data-test-id="store-details-section"]';

const API_URL = '/api/store/0002';

describe('store page', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('base_url')}/store/0002`);
    cy.server();
  });

  it('should have a title', () => {
    // actual api call
    cy.get(titleSelector)
      .should('have.length', 1) // will retry until it passes or timeout reached
      .and('have.text', 'Store Details');
    cy.get(storeSectionSelector).should('exist');
  });

  it('should display Loading message when store data is being fetched', () => {
    cy.route({
      url: API_URL,
      response: { code: '1', name: 'London Colney' },
      delay: 2000, // simulate a slow network connection.
    }).as('getStoreDetails');

    cy.get(storeSectionSelector).within(() => {
      // should display Loading message
      cy.get('h3').should('have.text', 'Loading!!');

      // wait for API call to finish.
      cy.wait('@getStoreDetails');

      // should display Store details
      cy.get('h3').should('have.text', 'Showing details for London Colney');
    });
  });

  it('should display error message when store not found', () => {
    cy.route({
      url: API_URL,
      response: {},
      status: 404,
    }).as('getStoreDetails');
    cy.wait('@getStoreDetails');

    cy.get(storeSectionSelector).within(() => {
      // should display error message
      cy.get('h3').should('have.text', 'Store not found');
    });
  });

  it('should display error message when some other error occurred', () => {
    cy.route({
      url: API_URL,
      response: {},
      status: 503,
    }).as('getStoreDetails');
    cy.wait('@getStoreDetails');

    cy.get(storeSectionSelector).within(() => {
      // should display error message
      cy.get('h3').should('have.text', 'Oops! Something went wrong!');
    });
  });
});
