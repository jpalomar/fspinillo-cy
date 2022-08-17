class MyAccount {

  public get myPersonalInfo(){
    return cy.get('.myaccount-link-list > :nth-child(4) > a > span')
  }

  public get myAddresses() {
    return cy.get('.myaccount-link-list > :nth-child(3) > a > span')
  }

}

export default new MyAccount()
