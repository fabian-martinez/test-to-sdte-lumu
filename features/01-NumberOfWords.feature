@TESTSET-1
Feature: Count the number of words

    @TEST-1
    Scenario: Number of words is 0 when enter the app
        When the user enters to WordCounterHome page
        Then the WordCounterHome should contain a title with the number of words equal to "0"
        And the WordCounterHome should have a TextArea to type a text
        And the WordCounterHome should contain a title with the characters of words equal to "0"
    
    @TEST-2
    Scenario Outline: Count the number of words
        Given the user has been entered to WordCounterHome page
        When the user type "<text-typed>"
        Then the WordCounterHome should contain a title with the number of words equal to "<words-count>"
        And the WordCounterHome should contain a title with the characters of words equal to "<characters-count>"
        And this is a test step 

        Examples:
            | text-typed | words-count | characters-count |
            | A          | 1           | 1                |
            | A\nB       | 2           | 2                |
            | OneWord    | 1           | 7                |
            | Two Words  | 2           | 9                |
            | . @ £ 4    | 4           | 7                |