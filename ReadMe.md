## Cypress

- Cypress is an open-source, locally-installed front end testing tool built for the modern web.

- Cypress runs locally in the browser, so the browser needs to be installed on your machine, apart from Electron that comes baked in with Cypress.

- Cypress runs in the browser and is executed in the same environment as your application. 

- It has access to all the resources that your application has. Because Cypress operates within your application, that means it has native access to every single object. Whether it is the window, the document, a DOM element, your application instance, a function, a timer, a service worker, or anything else - you have access to it in your Cypress tests. 

- Cypress is best suited for developers, to enable them to write tests as they build the application locally. TDD at its best!

- Cypress enables you to write all types of tests:

    * End-to-end tests
    * Integration tests
    * Unit tests
    
- Features
    * Time travel
    * Debugging
    * Automatic waiting/Retry-ability
    * Spying/Stubbing/Control network traffic 
        - Can test empty responses, error responses. You don't even need to have your API in place before writing your tests, and the application code.
    * Screenshots and videos
    * Cross browser testing
        - Supports Firefox and Chrome-family browsers (including Edge and Electron).
    * Blacklist hosts
        - Blacklist network requests to third party libraries like Google analytics, OneTrust so that they don't interfere with our tests
    * Code coverage

