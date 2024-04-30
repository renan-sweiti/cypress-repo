class DeleteExistingCardAssertions {

cardVisiblity(){

    cy.wait(3000)
    cy.get("[data-testid=card-back-archive-banner]").should("contain","This card is archived.")
    return this;

}


}
export default DeleteExistingCardAssertions;