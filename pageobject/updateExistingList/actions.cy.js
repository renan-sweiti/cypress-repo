class UpdateExistingListActions{

clickOnTitleList(){

    cy.get("textarea.XmUgdJ5MepKUCB").click({force: true})
    return this;
}
typeNewListTitle(){
 
 cy.wait(3000)
 cy.get("textarea.XmUgdJ5MepKUCB").click({force: true}).clear().type("Doing" + "{enter}")
 return this;

}

}
export default UpdateExistingListActions