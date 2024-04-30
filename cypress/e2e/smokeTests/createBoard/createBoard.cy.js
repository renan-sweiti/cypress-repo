/// <reference types="cypress" />
import { Given, Then, When , Before , After } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../../pageobject/createBoard/actions.cy";
import createBoardAssertions from "../../../../pageobject/createBoard/assertions.cy";
const createBoardAction = new createBoardActions();
const createBoardAssertion = new createBoardAssertions();
const boardName = "My first board";



Given ("The user login in trello website",()=>{

//createBoardAction.openTrelloWebsite()
cy.loginToTrello()


})

When ("Clicks on create  button in navbar",()=>{
    
    createBoardAction.clickOnCreateButton()


})
When ("Chooses Create Board option",()=>{
    
createBoardAction.chooseCreateBoardOption()


})
When("Types in Board title input field the board name",()=>{
   
    
createBoardAction.typeBoardTitle(boardName)


})

When ("Clicks on Create button",()=>{

createBoardAction.clickOnCreateBoardButton()

})
Then ("The Board will be created sucessfully",()=>{

    createBoardAssertion.checkBoardNameContainValue(boardName)


})