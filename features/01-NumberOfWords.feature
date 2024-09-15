Feature: Count the number of words

    Scenario: Number of words is 0 when enter the app
        When the user enters to WordCounterHome page
        Then the WordCounterHome contains a title with the number of words equal to "0"