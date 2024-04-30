/// <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";
import createNewListActions from "../../../../pageobject/createNewList/actions.cy";
import createNewListAssertions from "../../../../pageobject/createNewList/assertions.cy"; 
import createBoardActions from "../../../../pageobject/createBoard/actions.cy";
import createBoardAssertions from "../../../../pageobject/createBoard/assertions.cy";
import UpdateExistingListActions from "../../../../pageobject/updateExistingList/actions.cy";
import UpdateExistingListAssertions from "../../../../pageobject/updateExistingList/assertions.cy";
const createBoardAction = new createBoardActions();
const createBoardAssertion = new createBoardAssertions();
const createNewListAction = new createNewListActions();
const createNewListAssertion =  new createNewListAssertions();
const UpdateExistingListAction = new UpdateExistingListActions();
const UpdateExistingListAssertion = new UpdateExistingListAssertions();
const boardName = "My first board";
const listTitle = "To Do";

before(()=>{

    cy.loginToTrello()
    createBoardAction.clickOnCreateButton()
    createBoardAction.chooseCreateBoardOption()
    createBoardAction.typeBoardTitle(boardName)
    createBoardAction.clickOnCreateBoardButton()
    createNewListAction.typeListTitle(listTitle)
    createNewListAction.clickOnAddList()


})
//Given("Given the user will open My First board",()=>{



//})

When("click on list title input field",()=>{

   UpdateExistingListAction.clickOnTitleList() 
})

When("type new list title",()=>{
UpdateExistingListAction.typeNewListTitle()
    
})
Then("The list will be Updated successfully",()=>{
UpdateExistingListAssertion.checkListNameValue()
    
})