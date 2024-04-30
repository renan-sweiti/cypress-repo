///  <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../../pageobject/shared/dataUtils.cy";
import moveTemplateToAnyListActions from "../../../../pageobject/moveTemplateToAnyList/actions.cy";
import moveTemplateToAnyListAssertions from "../../../../pageobject/moveTemplateToAnyList/assertions.cy";
const moveTemplateToAnyListAssertion = new moveTemplateToAnyListAssertions();
const moveTemplateToAnyListAction = new moveTemplateToAnyListActions();
const dataUtils = new sharedDataUtils();
const boardName = "Renan board";
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
 
moveTemplateToAnyListAction.openBoard(boardUrl)


})
When("click on Template edit icon",()=>{

cy.wait(3000)
moveTemplateToAnyListAction.clickOnTemplateEditIcon()

    
})
When("click on move Template button",()=>{

cy.wait(3000)
moveTemplateToAnyListAction.clickOnTemplateMoveButton()
    
})
When("click mmove to any list",()=>{

moveTemplateToAnyListAction.clickMoveToAnyList().clickOnMove()

    
})
Then("The Template card will be moved successfully",()=>{
cy.wait(3000)
moveTemplateToAnyListAssertion.TemplateCardMoved()

    
})
after(()=>{

    cy.wait(3000)

    dataUtils.deleteBoard(boardId)



})