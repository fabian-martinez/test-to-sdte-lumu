Feature: The three most repeated words in density section

    Validate the three first words more repeated words in the density section

    @testing
    Scenario: Order the three most repeated words
        Given the user has been entered to WordCounterHome page
        When the user type "one one two one two three"
        Then the WordCounterHome should contain a key density table with below info
            | one   | 3 | 50% |
            | two   | 2 | 33% |
            | three | 1 | 17% |