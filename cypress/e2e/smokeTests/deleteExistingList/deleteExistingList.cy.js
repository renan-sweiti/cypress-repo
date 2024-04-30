/// <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";
import createNewListActions from "../../../../pageobject/createNewList/actions.cy";
import createNewListAssertions from "../../../../pageobject/createNewList/assertions.cy"; 
import createBoardActions from "../../../../pageobject/createBoard/actions.cy";
import createBoardAssertions from "../../../../pageobject/createBoard/assertions.cy";
import deleteExistingListActions from "../../../../pageobject/deleteExistingList/actions.cy";
import deleteExistingListAssertions from "../../../../pageobject/deleteExistingList/assertions.cy";

const createBoardAction = new createBoardActions();
const createBoardAssertion = new createBoardAssertions();
const createNewListAction = new createNewListActions();
const createNewListAssertion =  new createNewListAssertions();
const deleteExistingListAction = new deleteExistingListActions();
const deleteExistingListAssertion = new deleteExistingListAssertions();
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
When("click on list button",()=>{

    deleteExistingListAction.clickOnListButton()
    
    
    })
    When("click on archive this list",()=>{
    
   deleteExistingListAction.clickOnArchList()
        
    })
    Then("The list will be deleted successfully",()=>{
    
    deleteExistingListAssertion.addListVisibility()
        
    })