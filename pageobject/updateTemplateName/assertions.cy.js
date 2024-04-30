class updateTemplateNameAssertions{

cardTemplateVisibility(){
    cy.get(".window-header.js-card-detail-header").should("contain","Hello")
    return this;

}



}

export default updateTemplateNameAssertions