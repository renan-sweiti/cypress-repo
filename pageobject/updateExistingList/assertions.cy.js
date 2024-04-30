class UpdateExistingListAssertions{

    checkListNameValue(){

        cy.findByTestId("list-name").should("contain","Doing")
        return this;
        
        }

}
export default UpdateExistingListAssertions