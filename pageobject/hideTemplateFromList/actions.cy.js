class hideTemplateFromListActions{


    openBoard(boardUrl){   

        cy.visit(boardUrl)

         return this;

    }
  clickOnTemplateEditIcon(){

  cy.get("[data-testid='EditIcon']").click({force:true})

   return this;

  }
  clickOnHideFromList(){
  
    cy.get("[data-testid='quick-card-editor-archive']").click()
    return this;
 

  }


}
export default hideTemplateFromListActions