import { APIKey,APIToken } from "../../cypress/support/constants.cy"


class sharedDataUtils{
  
    createBoard =(boardName)=>{

      return  cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)


    }

    getList =(boardId)=>{

    return  cy.request("GET",`https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`)
    


    }
    creatCardTemplate =(listId,cardName,isTemplate)=>{

  return cy.request({
method:"POST",

url:`https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`,
body: {name: cardName, isTemplate:true},

  });




    }
    
   
    
   createCard = (listId)=>{


    return cy.request("POST", `https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`)

   }


   

   deleteBoard = (boardId)=>{

    return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)


   }


}
export default sharedDataUtils