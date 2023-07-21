import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../Page_Objects/HomePage";
import HamburgerMenuPage from "../../Page_Objects/HamburgerMenuPage";
import ComputersPage from "../../Page_Objects/ComputersPage";
import TabletAccessoriesPage from "../../Page_Objects/TabletAccessoriesPage";
import SwitchWindow from "../../Page_Objects/switchwindow";



/// <reference types="Cypress" />
//visit the Homepage
const homepage = new HomePage
Given("I am on the Amazon homepage", () => {
    homepage.visitAmazon();
  });

When("I click the hamburger menu", () => {
    homepage.openHamburgerMenu();
  });

// visit the computer page
const hamburgermenupage = new HamburgerMenuPage
When("I click on Computers", () => {
    hamburgermenupage.clickComputers();
  });
  //Visit the Tablet Accessories page
const computerpage = new ComputersPage
When("I click on Tablet Accessories", () => {
    computerpage.clickTabletAccessories();
  });
//In the Tablet Accessories page
 const tabletaccessoriespage = new TabletAccessoriesPage
When("I check the JETech brand", () => {
    tabletaccessoriespage.checkJETechBrand();
});
When("I filter JETech results with the Newest Arrivals", () => {
    tabletaccessoriespage.selectNewestArrivals();
  });
  
When('I find the lowest priced item', () => {
    tabletaccessoriespage.SearchlowestPricedItem();   
      });
      
     //switch a new window
const switchwindow = new SwitchWindow
 
Then("I should see the 'About this item' section",  ()=>{
switchwindow.AboutThisItem();

})
