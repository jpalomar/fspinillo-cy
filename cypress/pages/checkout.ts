class Checkout {

  public get proceedCheckout() {
    return cy.get('.cart_navigation > .button > span')
  }

  public get approveTerms() {
    return cy.get('#cgv')
  }
}

export default new Checkout()
