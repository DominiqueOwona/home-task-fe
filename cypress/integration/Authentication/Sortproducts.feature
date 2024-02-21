Feature: Authentication

    Scenario Outline: sort items of products in Descending Order
        Given I navigate to the page: "Home"
         Then I see text "<welcomeMessage>" on the page
         When I login as a "<user>" user
         Then I see text "<text>" on the page
         Then I sort items in descending order with "<value>" value
         Then I Verify that the items are displayed in the descending order within "<value>" value
         Then I log out

    Examples:
        | user     | text     | welcomeMessage |  value  |
        | Standard | Products | Swag Labs      |  za     |
   