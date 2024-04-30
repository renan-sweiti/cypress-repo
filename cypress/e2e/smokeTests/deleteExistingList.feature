Feature: delet an existing list

 Scenario: Validate that the user can delet an existing list
        
       # Given the user will open My First board
        When click on list button
        And click on archive this list
        Then The list will be deleted successfully