export default class TabletAccessoriesPage {
    
    checkJETechBrand(){
        cy.get("body > div:nth-child(1) > div:nth-child(30) > div:nth-child(10) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(2) > span:nth-child(6) > li:nth-child(1) > span:nth-child(1) > a:nth-child(1) > div:nth-child(1) > label:nth-child(1) > i:nth-child(2)").click({ force: true })
    }
    selectNewestArrivals(){
        cy.get(".a-dropdown-prompt").click()
        cy.get("#s-result-sort-select_4").click()
    }
    SearchlowestPricedItem(){
         // Get all the items with class "item"
    cy.get('.sg-col-inner').then(items => {
        let lowestPrice = Number.MAX_SAFE_INTEGER;
        let lowestPriceIndex = -1;
  
        // Loop through the items to find the lowest price
        items.each((index, item) => {
          const priceElement = Cypress.$(item).find('.a-price-whole');
          const priceText = priceElement.text().trim();
          const price = parseFloat(priceText.replace('$', ''));
  
          if (price < lowestPrice) {
            lowestPrice = price;
            lowestPriceIndex = index;
          }
        });
  
        // Click on the item with the lowest price
        if (lowestPriceIndex >= 0) {
          cy.get('.a-price-whole').eq(lowestPriceIndex).cy.get('.open-new-window-button').click();
        } else {
          // Handle the case where no item was found
          cy.log('No item found.');
        }
      });
            
    }
  }


  

   
