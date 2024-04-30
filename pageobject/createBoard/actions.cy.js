class createBoardActions {

//openTrelloWebsite(){
  //  cy.visit("/")
    //return this;

//}
clickOnCreateButton(){
cy.findByTestId("header-create-menu-button").click()
return this;
}

chooseCreateBoardOption(){
cy.findByTestId("header-create-board-button").click()

}

typeBoardTitle(boardName){

cy.findByTestId("create-board-title-input").type(boardName)
return this;
}

clickOnCreateBoardButton(){
cy.findByTestId("create-board-submit-button").click()
return this;

}

}
export default createBoardActions