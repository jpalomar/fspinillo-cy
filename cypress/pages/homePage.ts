class HomePage {

  public get loginButton() {
    return cy.get('.login')
  }

  public get homeButton() {
    return cy.get('.icon-home')
  }

  public get searchField() {
    return cy.get('#search_query_top')
  }

  public get firstAddCartButton() {
    return cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span')
  }

  public addCartButton() {
    return cy.get('.ajax_add_to_cart_button > span')
  }

  public get closeModal() {
    return cy.get('.cross')
  }

  public get viewCart() {
    return cy.get('[title="View my shopping cart"]')
  }

}

export default new HomePage()
