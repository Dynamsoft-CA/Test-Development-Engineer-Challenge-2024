import calculatorPage from "../page/calcualtorFunctions"

describe('template spec', () => {
  before(() => {
    calculatorPage.visit();
  })

  it('can add number', () => {
    // cy.visit('http://localhost:8080/')
    calculatorPage.visit();
    calculatorPage.enterNumber(32)

  })

  it('can subtract number', () => {
    // cy.visit('http://localhost:8080/')
    calculatorPage.visit();
    calculatorPage.enterNumber(32)

  })

  it('can divide number', () => {
    // cy.visit('http://localhost:8080/')
    calculatorPage.visit();
    calculatorPage.enterNumber(32)

  })
})