export default class ComputersPage {
    clickTabletAccessories() {
        cy.get("ul[class='hmenu hmenu-visible hmenu-translateX'] li:nth-child(15) a:nth-child(1)").click({ force: true })
    }
  }










