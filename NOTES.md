## What are Unit Tests?

* A building block of your app
* Ideally, the smallest possible building block
  * function, class, component
* An application is made up of many units
* If all units were tested, the overall app should work

## Why Unit Testing

* Avoids endless amounts of manual testing
* Allows you to cover (close to) 100% of your code & scenarios
* Code changes are tested against all scenarious (almost) instantly
* Write cleaner & better code (because testing then becomes easier)

## Unit, Integration & End-to-End (E2E) Testing

* Unit testing - test the individual building blocks of the application.  Every building block (unit) is tested standalone.  If all building blocks work, the overall app works.  Unit testing allows to quickly spot and pinpoint breaking changes and errors, but it ignores actual user flows and interfaces

* Integration testing - test the combination of building blocks and verify if building blocks (units) work together.  Even if all units work standalone, the combination could fail.

* End-to-End (E2E) Testing - Test entire flows and application features; test the actual "things" real users would do

## Test-Driver Development (TDD)

* A framework / philosophy for writing tests

1. Write a failing test first
2. Implement the code to make the test succeed
3. Refactor

## AAA - Arrange, Act, Assert

* Arrange - Define the testing envirnment & values
* Act - Run the actual code / function that should be tested
* Assert - Evaluate the produced value / result and compare it to the expected value / result