export default class LogItemToConsole{
    LogJETechItem(){
        cy.get('#featurebullets_feature_div').then((section) => {
            //  to get the text content of the element
            const sectionText = section.text();
      
            // Log the section text to the Cypress command log
            cy.log(sectionText);
      
            // use console.log to log the text to the browser console
            console.log(sectionText);
          });
    }

}