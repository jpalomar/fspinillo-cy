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

  public get dressAddCart() {
    return cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span')
  }

  public get addCartButton() {
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
