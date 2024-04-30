///  <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";
import createCardTemplateActions from "../../../../pageobject/createCardTemplate/actions.cy";
import createCardTemplateAssertions from "../../../../pageobject/createCardTemplate/assertions.cy";
import sharedDataUtils from "../../../../pageobject/shared/dataUtils.cy";
const boardName = "Renan board";
let boardUrl ,boardId, listId;
const createCardTemplateAction = new createCardTemplateActions;
const createCardTemplateAssertion = new createCardTemplateAssertions;
const dataUtils = new sharedDataUtils();





before(()=>{

    dataUtils.createBoard(boardName).then((resp)=>{
    
        boardUrl=resp.body.url
        boardId= resp.body.id
    dataUtils.getList(boardId).then((resp)=>{
        listId = resp.body[0].id
    
    })
    })
    
    cy.loginToTrello()
    cy.wait(3000)


})


Given("the user will open My board",()=>{
 
    createCardTemplateAction.openBoard(boardUrl)
    cy.wait(3000)


})
When("click on create Template icon",()=>{

    cy.wait(3000)

   createCardTemplateAction.clickOnCreateCardIcon()
    
})
When("click on create a new Template",()=>{
     
  cy.wait(3000)
  createCardTemplateAction.clickOnCreateNewTemplate()
    
})
When("type title on Template title field",()=>{
  cy.wait(3000)
  
  createCardTemplateAction.typeTemplateTitle()
    
})
When("click on Add button",()=>{

  createCardTemplateAction.clickOnAddButton()
    
})
Then("The card will be created successfully",()=>{

cy.wait(3000)
    createCardTemplateAssertion.TemplateCardVisiblity()
})
after(()=>{

dataUtils.deleteBoard(boardId)


})