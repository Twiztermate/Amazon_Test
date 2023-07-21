export default class HomePage{

    visitAmazon() {
        cy.visit("https://www.amazon.com/")
      
      }
    
      openHamburgerMenu() {
        cy.get("#nav-hamburger-menu").click()
        cy.contains('Hello')
        
      }

    }