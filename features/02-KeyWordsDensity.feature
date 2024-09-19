@TESTSET-2
Feature: The three most repeated words in density section

    Validate the three first words more repeated words in the density section

    @TEST-3
    Scenario: Get the words density, Get the three most repeated words
        Given the user has been entered to WordCounterHome page
        When the user type "one one two one two three"
        Then the WordCounterHome should contain a key density table with below info
            | one   | 3 | 50% |
            | two   | 2 | 33% |
            | three | 1 | 17% |

    @TEST-4
    Scenario: Get density of the words, When they have the sabe density
        Given the user has been entered to WordCounterHome page
        When the user type "one two three"
        Then the WordCounterHome should contain a key density table with below info
            | one   | 1 | 33% |
            | two   | 1 | 33% |
            | three | 1 | 33% |

    @TEST-5
    Scenario: Get density of the words, When the field is empty
        Given the user has been entered to WordCounterHome page
        When the user type ""
        Then the WordCounterHome should contain a key density table with the message "Start typing your document to get a list of most used keywords"