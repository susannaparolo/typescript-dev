"use strict";
exports.__esModule = true;
var movie_rental_1 = require("../src/movie-rental");
var data_1 = require("../src/data");
describe("Movie Rental should", function () {
    it.each([
        [data_1.customers[0], data_1.movies, "Rental Record for Martin [ movie title: Ran, amount: 3.5] [ movie title: The Matrix, amount: 2] Amount owed is: 5.5. Customer earned: 2 frequent renter points."],
        [data_1.customers[1], data_1.movies, "Rental Record for Lori [ movie title: Avengers: End Game, amount: 2] [ movie title: Disney Hercules, amount: 1.5] [ movie title: Kung Fu Panda 2, amount: 1.5] Amount owed is: 5. Customer earned: 3 frequent renter points."]
    ])('return the correct rental record statement', function (a, b, expected) {
        expect((0, movie_rental_1.returnCustomerRentalStatement)(a, b)).toBe(expected);
    });
});
describe("Movie Rental should", function () {
    it.each([
        [data_1.customers[0], data_1.movies, 5.5],
        [data_1.customers[1], data_1.movies, 5]
    ])('return the correct number of frequent renter points', function (a, b, expected) {
        expect((0, movie_rental_1.calculateAmountOwed)(a, b)).toBe(expected);
    });
});
describe("Movie Rental should", function () {
    it.each([
        [data_1.customers[0], data_1.movies, 2],
        [data_1.customers[1], data_1.movies, 3]
    ])('return the correct total amount owed', function (a, b, expected) {
        expect((0, movie_rental_1.calculateFrequentRenterPoints)(a, b)).toBe(expected);
    });
});
describe("Movie Rental should", function () {
    it.each([
        ['regular', 2, 2],
        ['new', 2, 6],
        ['childrens', 2, 1.5]
    ])('return the correct movie cost for each movie', function (a, b, expected) {
        expect((0, movie_rental_1.calculateEachMovieCost)(a, b)).toBe(expected);
    });
});
