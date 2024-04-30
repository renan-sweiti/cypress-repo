class createCardTemplateAssertions{

TemplateCardVisiblity(){

cy.get("h3._Ex_mdzYTq8Rj3").should("contain","This is a Template card.")

return this;

}




}

export default createCardTemplateAssertions