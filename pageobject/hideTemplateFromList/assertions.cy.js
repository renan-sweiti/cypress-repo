class hideTemplateFromListAssertions{

templateCardHidden(){

cy.get("li.bi0h3HALKXjfDq").eq(0).should("not.contain","This is a Template card.")
return this;


}





}
export default hideTemplateFromListAssertions