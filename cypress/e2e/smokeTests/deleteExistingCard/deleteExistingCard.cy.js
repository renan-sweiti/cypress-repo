///  <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";
import DeleteExistingCardActions from "../../../../pageobject/deleteExistingCard/actions.cy";
import DeleteExistingCardAssertions from "../../../../pageobject/deleteExistingCard/assertions.cy";
import { APIKey,APIToken } from "../../../support/constants.cy";
import sharedDataUtils from "../../../../pageobject/shared/dataUtils.cy";
const DeleteExistingCardAction = new DeleteExistingCardActions();
const DeleteExistingCardAssertion = new DeleteExistingCardAssertions();
const dataUtils = new sharedDataUtils();
const boardName = "Renan board";
let boardUrl ,boardId, listId;


before (() => {

dataUtils.createBoard(boardName).then((resp)=>{
    
    boardUrl=resp.body.url
    boardId= resp.body.id
dataUtils.getList(boardId).then((resp)=>{
    listId = resp.body[0].id

dataUtils.createCard(listId)


})
})   


cy.loginToTrello()
cy.wait(3000)

})


Given("the user will open My board",()=>{

   cy.wait(3000)
   DeleteExistingCardAction.openBoard(boardUrl)
   cy.screenshot({capture:"fullPage"}) 

})


When("click on card field",()=>{

  cy.wait(3000)  
  DeleteExistingCardAction.clickOnCard()

})


When("click on archive this card",()=>{
  DeleteExistingCardAction.clickOnArchive()



})


Then("The card will be deleted successfully",()=>{
  DeleteExistingCardAssertion.cardVisiblity()

})
after(()=>{

dataUtils.deleteBoard(boardId)

})