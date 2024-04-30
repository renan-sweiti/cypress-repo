///  <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../../pageobject/shared/dataUtils.cy";
import hideTemplateFromListActions from "../../../../pageobject/hideTemplateFromList/actions.cy";
import hideTemplateFromListAssertions from "../../../../pageobject/hideTemplateFromList/assertions.cy";
const dataUtils = new sharedDataUtils();
const boardName = "Renan board";
const hideTemplateFromListAction =new hideTemplateFromListActions();
const hideTemplateFromListAssertion =new hideTemplateFromListAssertions();
let boardUrl ,boardId, listId,isTemplate,cardName;


before(()=>{

    dataUtils.createBoard(boardName).then((resp)=>{
    
        boardUrl=resp.body.url
        boardId= resp.body.id
    dataUtils.getList(boardId).then((resp)=>{
        listId = resp.body[0].id
    
    dataUtils.creatCardTemplate(listId,cardName,isTemplate)


    })


})

cy.loginToTrello()
cy.wait(3000)


})
Given("the user will open My board",()=>{

hideTemplateFromListAction.openBoard(boardUrl)


})
When("click on Template edit icon",()=>{
  cy.wait(3000)
  hideTemplateFromListAction.clickOnTemplateEditIcon()  

  
})
When("click on hide button from list",()=>{
cy.wait(3000)
hideTemplateFromListAction.clickOnHideFromList()

    
})
Then("The Template card will be hidden successfully",()=>{
cy.wait(3000)
hideTemplateFromListAssertion.templateCardHidden()

    
})
after(()=>{

    cy.wait(3000)

    dataUtils.deleteBoard(boardId)



})