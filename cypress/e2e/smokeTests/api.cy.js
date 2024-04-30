/// <reference types="cypress" />

describe("http",()=>{

it("",()=>{

    cy.request("GET","https://reqres.in/api/unknown/2").then((response)=>{

     expect(response.body.data.id).to.eq(2)
     expect(response.status).to.eq(200)
     expect(response.body.data.name).to.contain("fuchsia rose")


    })
    cy.request("POST","https://reqres.in/api/users",{}).then((response1)=>{

    expect(response1.status).to.eq(201)
    cy.log(response1)

    })
  
    cy.request("PUT","https://reqres.in/api/users/2",{}).then((response2)=>{

   expect(response2.status).to.eq(200)




    })




})
})