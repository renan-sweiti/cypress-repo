class createBoardAssertions {

checkBoardNameContainValue(boardName){

    cy.wait(3000)
    cy.findByTestId("board-name-display").should("contain",boardName)
    return this;
}

}
export default createBoardAssertions;