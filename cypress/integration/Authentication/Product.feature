Feature: Authentication

    Scenario Outline: standard user can login and log out
        Given I navigate to the page: "Home"
         Then I see text "<welcomeMessage>" on the page
         When I login as a "<user>" user
         Then I see text "<text>" on the page
         When I click on item
         Then I navigate to cart
         Then I ensure that the item added in step_3 is displayed in the cart
         Then I log out

    Examples:
        | user     | text     | welcomeMessage |
        | Standard | Products | Swag Labs      | 

   