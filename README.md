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
    |-- assets
    |  -- css
    |      -- styles.css
    |-- index.html
    |-- src
    |   |-- app.js
    |   |-- currency-parser.js
    |   |-- dynamic-programming-solution.js
    |   |-- make-coin-change.js
    |   -- validator.js
     -- vendor
        |-- css
        |   -- bootstrap.min.css
        -- js
            -- angular.min.js
```

