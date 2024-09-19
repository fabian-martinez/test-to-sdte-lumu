# test-to-sdte-lumu
This repo is the test to show my capabilities about test automation to lumu. With this repto I test three features of page https://wordcounter.net/

- The number of words
- The number of characters
- Key words density section

For that, The project is made up of jsavascript, cucumber and selenium. Where the src folder is the logic of steps and celenium configuration, the steps folders has the implentation of steps and the features folder contains the scenarios redacted in gherkin sintax.

## Test Environment
To this tests the environment was limitated to firefox browser. So, the configration necesary to run the scenarios is below:
 - Firefox version 130.x enable to run automatic tests
 - Node version 20.x

 ## Run tests
To run tests you must follow the next steps:
1. Clone and enter in the repository
~~~
git clone https://github.com/fabian-martinez/test-to-sdte-lumu.git

cd test-to-sdte-lumu
~~~
2. Instal dpendencies
~~~
npm init
~~~
3. Run tests
~~~
npm test
~~~
4. Run a specific tests or test set
~~~
npm test -- --tags=@ID-TEST/@ID-TESTSET
~~~
## To create a new Scenario
The steps to create a new scenario are felow
1. Create or enter to a feature file 
2. Redact the scenario following the gherkin sintax [Gherkin Sintax](https://cucumber.io/docs/gherkin/reference/)
3. Add a tag (`@TEST-ID`) following the below extricture
~~~
@TESTSET-1
Feature: Count the number of words

    @TEST-1
    Scenario: Number of words is 0 when enter the app
        When the user enters to WordCounterHome page
        Then the WordCounterHome should contain a title with the number of words equal to "0"
        And the WordCounterHome should have a TextArea to type a text
        Then the WordCounterHome should contain a title with the characters of words equal to "0"
~~~
4. Run the test `npm test -- --tags=@TEST-ID`. When the test run cucumber recomend a snippet code to implement, follow the instructions
~~~
   ? And this is a test step
       Undefined. Implement with the following snippet:
       
         Then('this is a test step', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
~~~
5. The snippet should be put in `steps/featureToTest.js`
6. The logic to manipulate DOM shoul be put in `src/pages/NomberOfPage.js
