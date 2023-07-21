export default class HamburgerMenuPage {
    clickComputers() {
        cy.get("[data-ref-tag='nav_em_1_1_1_7']").click()
    cy.contains('Computers')
    
    }
  }
  