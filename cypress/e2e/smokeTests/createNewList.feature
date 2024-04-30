Feature: create a new list

 Scenario: Validate that the user can create a new list
        
       # Given the user will open My First board
        When Types in list title input field 
        And Clicks on add list
        Then The list will be created successfully