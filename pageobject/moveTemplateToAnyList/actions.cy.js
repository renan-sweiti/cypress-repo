class moveTemplateToAnyListActions{

    openBoard(boardUrl){   

        cy.visit(boardUrl)

         return this;

    }
  clickOnTemplateEditIcon(){

  cy.get("[data-testid='EditIcon']").click({force:true})

   return this;

  }
 clickOnTemplateMoveButton(){

cy.get("[data-testid='quick-card-editor-move']").click()
return this;


 }
 clickMoveToAnyList(){

cy.get("[data-testid='move-card-popover-select-list-destination']").select("Doing",{force:true})



return this;
 }
 clickOnMove(){

    cy.wait(3000)
    cy.get(".nch-button.nch-button--primary.wide.js-submit").click({force:true})

  return this;
 }


}
export default moveTemplateToAnyListActions