import { RESPONSE_WITH_MULTIPLE_RESULTS } from '../../fixtures/search-response-with-multiple-results';

const searchSectionSelector = '[data-test-id="search-results-section"]';
const inputWrapperSelector = '[data-test-id="search-text-field"]';
const searchFieldSelector = `${inputWrapperSelector} input`;
const inputLabelSelector = `${inputWrapperSelector} label`;

describe('Home page', () => {
  const mockSearchSuccess = (response) => {
    cy.server();

    cy.route('GET', '/api/search/*', response).as('searchStores');
  };

  beforeEach(() => {
    cy.visit(Cypress.env('base_url'));
  });

  it('should have a header', () => {
    cy.get('header')
      .should('have.length', 1) // will retry until it passes or timeout reached
      .within(() => {
        cy.get('a').should('have.length', 1).and('have.text', 'Home');
      });
  });

  it('should have a title with the correct text', () => {
    cy.get('h1').should('have.length', 1).and('have.text', 'Search Stores');
  });

  it('should have a textbox with correct label', () => {
    cy.get(searchFieldSelector).should('have.length', 1);

    cy.get(inputLabelSelector)
      .should('have.attr', 'for', 'search-text-field')
      .and('have.text', 'Enter a search term');
  });

  it('should update the value of the textbox when user types', () => {
    cy.get(searchFieldSelector).type('Lon').should('have.value', 'Lon');
  });

  describe('Store search', () => {
    it('should display search results as user types', () => {
      mockSearchSuccess(RESPONSE_WITH_MULTIPLE_RESULTS);
      cy.get(searchFieldSelector).type('London');

      cy.get(searchSectionSelector).within(() => {
        cy.get('ul').should('exist');
        cy.get('ul li').should('have.length', 2);
        cy.get('h3').contains('Displaying 2 stores');

        // verify each list item
        [
          ['1', '1 - London Colney'],
          ['2', '2 - London Holborn'],
        ].forEach(([code, text], index) => {
          cy.get('ul li a') // get all anchor elements
            .eq(index)
            .should('have.text', text) // verify that the link text is correct
            .and('have.attr', 'href', `/store/${code}`); // verify that the url is correct
        });
      });
    });

    it('should display message when no results are retrieved', () => {
      mockSearchSuccess([]);
      cy.get(searchFieldSelector).type('London');

      cy.get(searchSectionSelector).within(() => {
        cy.contains('No results found!');
      });
    });
  });
});
