class Personal {

  public get firstName() {
    return cy.get('#firstname')
  }

  public get lastName() {
    return cy.get('#lastname')
  }

  public get emailAddress() {
    return cy.get('#email')
  }

  public get genderMr() {
    return cy.get('#id_gender1')
  }

  public get genderMrs() {
    return cy.get('#id_gender2')
  }

  public get newsletter() {
    return cy.get('#newsletter')
  }

  public get offerOptIn() {
    return cy.get('#optin')
  }

  public get dobDays() {
    return cy.get('#days')
  }

  public get dobMonth() {
    return cy.get('#months')
  }

  public get dobYear() {
    return cy.get('#years')
  }
}

export default new Personal()
