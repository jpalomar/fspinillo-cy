import {Account, HomePage, MyAccount, Personal, AddressInfo} from '../pages/index'
import {accountDetails} from '../fixtures/account'

describe('New User Checkout', () => {
  describe('Create New Account', () => {
    before('Open Create Home Page', () => {
      cy.visit(' http://automationpractice.com/index.php?controller=authentication&back=my-account')
    })
    it('Create New Account', () => {
      Account.enterEmail()
      Account.submitCreate.click()
      Account.genderMr.click()
      Account.firstName.type('Peter')
      Account.lastName.type('Parker')
      Account.enterPasswd()
      Account.enterDOB('August', '10', '2001')
      Account.newsletter.click()
      Account.offerOptIn.click()
      Account.streetAddress.type('20 Ingram Street')
      Account.city.type('New York')
      Account.selectState('New York')
      Account.selectCountry('United States')
      Account.postalCode.type('11375')
      Account.mobilePhone.type('(719) 266-2837')
      Account.addressAlias.clear()
      Account.addressAlias.type('petes')
      Account.submitAccount.click()
    })
  })
  describe('Personal Information', () => {
    it('Verify personal information', () => {
      Account.login(process.env.email, process.env.pass)
      cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
      MyAccount.myPersonalInfo.click()
      Personal.genderMr.should('be.checked')
      Personal.newsletter.should('be.checked')
      Personal.offerOptIn.should('be.checked')
    })
  })

  describe('My Address', () => {
    it('Verify Address information', () => {
      Account.login(process.env.email, process.env.pass)
      cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
      MyAccount.myAddresses.click()
      AddressInfo.phoneNumber.should('have.text', '(719) 266-2837')
      AddressInfo.streetAddress.should('have.text','20 Ingram Street')
    })
  })

  describe('Purchasing', () => {
    before('Log in', () => {
      Account.login(process.env.email, process.env.pass)
      cy.visit('http://automationpractice.com/index.php')
    })
    it('Buy dress from home page', () => {

    })
  })

})
