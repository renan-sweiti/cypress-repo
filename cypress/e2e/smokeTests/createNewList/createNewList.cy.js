/// <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";
import createNewListActions from "../../../../pageobject/createNewList/actions.cy";
import createNewListAssertions from "../../../../pageobject/createNewList/assertions.cy"; 
import createBoardActions from "../../../../pageobject/createBoard/actions.cy";
import createBoardAssertions from "../../../../pageobject/createBoard/assertions.cy";
const createBoardAction = new createBoardActions();
const createBoardAssertion = new createBoardAssertions();
const createNewListAction = new createNewListActions();
const createNewListAssertion =  new createNewListAssertions();
const boardName = "My first board";
const listTitle = "To Do";

before(()=>{

    cy.loginToTrello()
    createBoardAction.clickOnCreateButton()
    createBoardAction.chooseCreateBoardOption()
    createBoardAction.typeBoardTitle(boardName)
    createBoardAction.clickOnCreateBoardButton()


})

//Given("the user will open My First board",()=>{




//})

When("Types in list title input field",()=>{


 createNewListAction.typeListTitle(listTitle)

})
When("Clicks on add list",()=>{

createNewListAction.clickOnAddList()


})
Then("The list will be created successfully",()=>{

createNewListAssertion.checkListNameValue(listTitle).addCardVisibility().addToListVisibility()

})
