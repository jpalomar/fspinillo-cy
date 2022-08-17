class AddressInfo {

  public get streetAddress () {
    return cy.get('.address_address1')
  }

  public get phoneNumber() {
    return cy.get('.address_phone_mobile')
  }

}

export default new AddressInfo()
