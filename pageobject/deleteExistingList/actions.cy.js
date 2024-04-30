class deleteExistingListActions{

    clickOnListButton(){
    
    cy.wait(3000)
    cy.findByTestId("list-edit-menu-button").trigger("click")
    return this;
    
    }
    
    clickOnArchList(){
    
    cy.get("a.js-close-list").click({force: true})
    return this;
    
    }
    }
    export default deleteExistingListActions 