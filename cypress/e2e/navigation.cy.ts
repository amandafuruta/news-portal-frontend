describe('navigation portal', () => {

  it('navigation to login', () => {    
    cy.visit('/') // Home page
    cy.get('[data-id="login-header-btn"]').click() // Login button
    cy.url().should('include', '/login') // should redirect to login page
  })

  it('login and logout', () => {
    cy.visit('/login') // in login page

    // fill with user informatio
    cy.get('[data-id="username-field"]').type('reader@teste.com') // email
    cy.get('[data-id="password-field"]').type('asdasdasd') // password
    cy.get('[data-id="login-enter-btn"]').click() // enter button

    cy.url().should('include', '/authenticated/reader-profile') // should redirect
    cy.getCookie('user_token').should('exist') // should have token

    // LOGOUT
    cy.get('[data-id="logout-bnt"]').click() // logout
    cy.getCookie('user_token').should('not.exist') // should not have token
  })
  
})

describe.only('admin', () => {
  before(() => {
    cy.visit('/admin-login')
    cy.intercept('POST', `http://127.0.0.1:8000/api/token-team-auth/`).as('loginRequest')

    cy.get('[data-id="admin-email-field"]').type('admin@teste.com')
    cy.get('[data-id="admin-password-field"]').type('asdasdasd')
    cy.get('[data-id="admin-login-btn"]').click()

    cy.wait('@loginRequest').then((interception) => {
      // Check if the response status code is 200 (successful login)
      expect(interception.response?.statusCode).to.eq(200)
      
      // Verify if the token was set in cookies
      cy.getCookie('userteam_token').should('exist')

      // Verify that the user was redirected to the home page
      cy.url().should('include', '/authenticated/admin/home')
    })

  })
  
  // it('admin add news', () => {
  //   cy.get('[data-id="add_news"]').should('exist')
  //   cy.get('[data-id="add_news"]').click()
  //   cy.url({timeout: 5000}).should('include', '/authenticated/admin/add-edit-post')
  //   cy.get('[data-id="post-title-field"]').type('Teste Cypress Title')
  //   cy.get('[data-id="post-subtitle-field"]').type('Teste Cypress Subtitle')
  //   cy.get('[role="combobox"]').click(); // Open the dropdown
  //   cy.get('li[role="option"]').contains('Saúde').click(); // Select a category
  // })
})