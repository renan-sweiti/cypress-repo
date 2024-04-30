class createNewListActions {


typeListTitle(listTitle){
    
cy.wait(3000)
cy.findByTestId("list-name-textarea").type(listTitle)
return this;

}
clickOnAddList(){

    cy.findByTestId("list-composer-add-list-button").click()
    return this;

}



}
export default createNewListActions