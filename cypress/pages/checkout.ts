class Checkout {

  public get proceedCheckout() {
    return cy.get('.cart_navigation > .button > span')
  }

  public get approveTerms() {
    return cy.get('#cgv')
  }

  public get bankWire() {
    return cy.get('.bankwire')
  }

  public get confirmOrderButton() {
    return cy.get('#cart_navigation > .button > span')
  }

  public get confirmOrderHeading() {
    return cy.get('.page-heading')
  }

  public completeCheckout() {
    this.proceedCheckout.click()
    this.proceedCheckout.click()
    this.approveTerms.click()
    this.proceedCheckout.click()
    this.bankWire.click()
    this.confirmOrderButton.click()
  }
}

export default new Checkout()
