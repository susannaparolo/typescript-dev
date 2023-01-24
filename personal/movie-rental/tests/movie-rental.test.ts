import {returnCustomerRentalStatement, calculateFrequentRenterPoints, calculateAmountOwed, calculateEachMovieCost} from '../src/movie-rental'
import { customers, movies } from '../src/data'

describe("Movie Rental should", () => {
  it.each([
    [customers[0], movies, "Rental Record for Martin [ movie title: Ran, amount: 3.5] [ movie title: The Matrix, amount: 2] Amount owed is: 5.5. Customer earned: 2 frequent renter points."],
    [customers[1], movies, "Rental Record for Lori [ movie title: Avengers: End Game, amount: 2] [ movie title: Disney Hercules, amount: 1.5] [ movie title: Kung Fu Panda 2, amount: 1.5] Amount owed is: 5. Customer earned: 3 frequent renter points."]
  ])('return the correct rental record statement', (a, b, expected) => {
    expect(returnCustomerRentalStatement(a, b)).toBe(expected)
  });
});

describe("Movie Rental should", () => {
  it.each([
    [customers[0], movies, 5.5],
    [customers[1], movies, 5]
  ])('return the correct number of frequent renter points', (a, b, expected) => {
    expect(calculateAmountOwed(a, b)).toBe(expected)
  });
});

describe("Movie Rental should", () => {
  it.each([
    [customers[0], movies, 2],
    [customers[1], movies, 3]
  ])('return the correct total amount owed', (a, b, expected) => {
    expect(calculateFrequentRenterPoints(a, b)).toBe(expected)
  });
});

describe("Movie Rental should", () => {
  it.each([
    ['regular', 2, 2],
    ['new', 2, 6],
    ['childrens', 2, 1.5]
  ])('return the correct movie cost for each movie', (a, b, expected) => {
    expect(calculateEachMovieCost(a, b)).toBe(expected)
  });
});
