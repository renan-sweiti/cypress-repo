Feature: Update an existing list

 Scenario: Validate that the user can Update an existing list
        
       # Given the user will open My First board
        When click on list title input field 
        And type new list title
        Then The list will be Updated successfully