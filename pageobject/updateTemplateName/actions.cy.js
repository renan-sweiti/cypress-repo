class updateTemplateNameActions{

    openBoard(boardUrl){   

        cy.visit(boardUrl)

         return this;

}
clickOnTemplateCard(){

    cy.get("span.T8p0iZePEoaO1J").click()
    return this;

}
clickOnTemplateField(){


cy.get("textarea.mod-card-back-title.js-card-detail-title-input").click().clear
return this;

}
typeNewTitle(){

    cy.get("textarea.mod-card-back-title.js-card-detail-title-input").type("Hello{enter}")
    return this;

}


}
export default updateTemplateNameActions