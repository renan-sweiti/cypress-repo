import { should } from "chai";

class createNewListAssertions {

checkListNameValue(listTitle){

cy.findByTestId("list-name").should("contain",listTitle)
return this;

}
addCardVisibility(){
cy.findByTestId("list-add-card-button").should("be.visible")
return this;

}
addToListVisibility(){

cy.findByTestId("list-composer-add-list-button").should("be.visible")
return this;

}

}
export default createNewListAssertions