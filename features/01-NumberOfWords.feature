Feature: Count the number of words

    Scenario: Number of words is 0 when enter the app
        When the user enters to WordCounterHome page
        Then the WordCounterHome should contain a title with the number of words equal to "0"
        And the WordCounterHome should have a TextArea to type a text
    
    Scenario Outline: Count the number of words
        Given the user has been entered to WordCounterHome page
        When the user type "<text-typed>"
        Then the WordCounterHome should contain a title with the number of words equal to "<words-count>"

        Examples:
            | text-typed | words-count |
            | OneWord    | 1           |
            | Two Words  | 2           |
            | . @ £ 4    | 4           |