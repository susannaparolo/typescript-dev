# Movie Rental Refactor Task
The `returnCustomerRentalStatement` function in `refactoring-task.ts` returns a statement of a customer's movie rental history. The code is valid and correct but has a number of code smells, violates some clean coding practices and is not easy to write unit tests for.

## Task:
Fork and refactor the code however you see fit.
* Add unit test coverage (example: should return the correct frequent renter points)
* Think about the solid principals, which of these principals is the `returnCustomerRentalStatement` function violating.
* The business requires that the `returnCustomerRentalStatement` function always returns the expected output as shown in the unit test `returns the correct rental record`. If that unit test fails the business will be angry!
* In the future the business would like to add a new `movie code`.
* When completed, raise a PR and explain to the group your reason for refactoring certain aspects of the code. 

**Running Tests**:

Navigate to `/movie-rental` folder and run the below commands to run the tests.

```    
    npm install -g jest 
    npm install -g typescript 
    tsc tests/movie-rental.test.ts
    jest tests/movie-rental.test.js
```
## Advanced:
* Customers and Movies are currently stored in an array. 
    * How else may we want to retrieve this data?

---
![Blockbusters](https://i.giphy.com/media/lQDluyWSAjHa3oOZh0/giphy.webp)
---
Code Credit: [Zoe Stanley](https://codesandbox.io/s/volusion-refactoring-exercise-in-typescript-zrvz1)


