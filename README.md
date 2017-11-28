Minimum Coin Change
===================
Simple JavaScript application that given a number of pennies will calculate the minimum number of coins needed to make that amount.

## How to use
Download/clone the repository, and open `index.html` in a browser.

## Make change algorithm
This application uses a **Greedy algorithm** to compute minimum coins for a given amount.
The algorithm is defined in `src/make-coin-change.js`.

A **Dynamic Programming** approach is also included. It uses a **Recursion** approach with **Memoization**

## Application Structure
```
  App
    |-- README.md
    |-- assets
    |-- index.html
    |-- spec
    |   |-- CurrencyParserSpec.js
    |   |-- MakeCoinChangeSpec.js
    |   |-- SpecRunner.html
    |   |-- ValidatorSpec.js
    |   `-- lib
    |-- src
    |   |-- app.js
    |   |-- currency-parser.js
    |   |-- dynamic-programming-solution.js
    |   |-- make-coin-change.js
    |   `-- validator.js
    `-- vendor
        |-- css
        |   `-- bootstrap.min.css
        `-- js
            `-- angular.min.js

```
### `README/`
What you are reading now. :smiley:

### `index.html`
Contains the HTML for the application

### `src/`
Contains all Javascript code for various purposes

* **app.js** - This contains the [AngularJS](https://angularjs.org) code for the UI.
* **currency-parser.js** - Parses to user's input with/without currency symbols to pence for further processing.
* **make-coin-change.js** - Contains the functionality to calculate minimum number of coins for a the amount of pennies provided.
* **validator.js** - Validates user input against requirements.

### `vendor/`
Contains Bootstrap CSS and AngularJS source files.

### `assets/`
Mainly custom CSS for the application.

### `spec/`
Contains application unit tests, as well as Jasmine Testing Framework source files.

## Testing
The `spec/` folder contains unit tests for the application. The unit tests have been written in [Jasmine](https://jasmine.github.io) Testing Framework.
To run the tests, open `spec/SpecRunner.html` on a browser.

