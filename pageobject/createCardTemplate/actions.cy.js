class createCardTemplateActions{

    openBoard(boardUrl){   

        cy.visit(boardUrl)

         return this;

}
    
    clickOnCreateCardIcon(){
    cy.get(".xJM_gd_GpGM0yl.bxgKMAm3lq5BpA.iUcMblFAuq9LKn.HAVwIqCeMHpVKh ").eq(0).click({force:true})

  
     return this;

    }  
    
    clickOnCreateNewTemplate(){

    cy.get(".MOjmDikQkFf2bj.bxgKMAm3lq5BpA ").click()
    return this;


    }
    typeTemplateTitle(){
   cy.get("[placeholder='Template title']").type("TemplateTitle")
   return this;

    }
    clickOnAddButton(){
  
  cy.get("[data-testid='new-template-card-submit-button']").click()
  return this;

    }

    




    




}
export default createCardTemplateActions