class DeleteExistingCardActions {
    
    
openBoard(url){   

        cy.visit(url)

         return this;

}
clickOnCard(){


    cy.get(".amUfYqLTZOvGsn").click()
    
     return this;
}
clickOnArchive(){

    cy.get(".js-archive-card > .js-sidebar-action-text").click()
  
return this;

}

}
export default DeleteExistingCardActions;