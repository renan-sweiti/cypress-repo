///  <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";
import updateTemplateNameActions from "../../../../pageobject/updateTemplateName/actions.cy";
import updateTemplateNameAssertions from "../../../../pageobject/updateTemplateName/assertions.cy";
import sharedDataUtils from "../../../../pageobject/shared/dataUtils.cy";


const updateTemplateNameAction = new updateTemplateNameActions();
const updateTemplateNameAssertion = new updateTemplateNameAssertions();
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

updateTemplateNameAction.openBoard(boardUrl)

})
When("click on Template card",()=>{

cy.wait(6000)
updateTemplateNameAction.clickOnTemplateCard()
    
})
When("click on Template card field",()=>{
cy.wait(3000)
updateTemplateNameAction.clickOnTemplateField()

    
})
When("type new title on Template title field",()=>{

updateTemplateNameAction.typeNewTitle()
    
})
Then("The card will be updated successfully",()=>{

cy.wait(3000)    
updateTemplateNameAssertion.cardTemplateVisibility()
    
})
after(()=>{

    cy.wait(3000)

    dataUtils.deleteBoard(boardId)



})