class moveTemplateToAnyListAssertions{
TemplateCardMoved(){

cy.get("li.bi0h3HALKXjfDq").eq(1).should("contain","This card is a template.")
return this;


}




}
export default moveTemplateToAnyListAssertions