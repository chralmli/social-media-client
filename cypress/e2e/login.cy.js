describe('Login functionality', () => {
    it('allows the user to log in with valid credentials', () => {
        cy.visit('/');

        // Open login modal
        cy.get('button[data-auth="login"]').click();

        // Fill the login form and submit
        cy.get('#loginEmail').type('validuser@example.com');
        cy.get('#loginPassword').type('validpassword');
        cy.get('#loginForm').submit();


        cy.get('button[data-auth="logout"]').should('be.visible');
    });
});

describe('Login functionality with valid credentials', () => {
    it('prevents login and shows a message with invalid credentials', () => {
        cy.visit('/');
        
        // Open login modal
        cy.get('button[data-auth="login"]').click();

        // Fill the login form and submit
        cy.get('#loginEmail').type('validuser@example.com');
        cy.get('#loginPassword').type('validpassword');
        cy.get('#loginForm').submit();

        // Check for an error message
        cy.get('.error-message').should('be.visible').and('contain', 'Invalid email or password');
    });
});