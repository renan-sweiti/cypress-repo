class deleteExistingListAssertions{

    addListVisibility(){
    
        cy.findByTestId("list-name-textarea").should("not.be.visible")
        return this;
        
    }
    
    }
    export default deleteExistingListAssertions