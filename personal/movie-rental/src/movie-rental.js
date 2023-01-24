"use strict";
exports.__esModule = true;
exports.returnCustomerRentalStatement = exports.calculateEachMovieCost = exports.calculateAmountOwed = exports.calculateFrequentRenterPoints = void 0;
function calculateFrequentRenterPoints(customer, movies) {
    var frequentRenterPoints = 0;
    for (var _i = 0, _a = customer.rentals; _i < _a.length; _i++) {
        var r = _a[_i];
        var movie = movies[r.movieID];
        frequentRenterPoints++;
        if (movie.code === "new" && r.days > 2)
            frequentRenterPoints++;
    }
    return frequentRenterPoints;
}
exports.calculateFrequentRenterPoints = calculateFrequentRenterPoints;
function calculateAmountOwed(customer, movies) {
    var totalAmount = 0;
    for (var _i = 0, _a = customer.rentals; _i < _a.length; _i++) {
        var r = _a[_i];
        var movie = movies[r.movieID];
        totalAmount += calculateEachMovieCost(movie.code, r.days);
    }
    return totalAmount;
}
exports.calculateAmountOwed = calculateAmountOwed;
function calculateEachMovieCost(category, days) {
    var thisAmount = 0;
    switch (category) {
        case "regular":
            thisAmount = 2;
            if (days > 2) {
                thisAmount += (days - 2) * 1.5;
            }
            break;
        case "new":
            thisAmount = days * 3;
            break;
        case "childrens":
            thisAmount = 1.5;
            if (days > 3) {
                thisAmount += (days - 3) * 1.5;
            }
            break;
    }
    return thisAmount;
}
exports.calculateEachMovieCost = calculateEachMovieCost;
function returnCustomerRentalStatement(customer, movies) {
    var result = "Rental Record for ".concat(customer.name, " ");
    for (var _i = 0, _a = customer.rentals; _i < _a.length; _i++) {
        var r = _a[_i];
        var movie = movies[r.movieID];
        result += "[ movie title: ".concat(movie.title, ", amount: ").concat(calculateEachMovieCost(movie.code, r.days), "] ");
    }
    result += "Amount owed is: ".concat(calculateAmountOwed(customer, movies), ". ");
    result += "Customer earned: ".concat(calculateFrequentRenterPoints(customer, movies), " frequent renter points.");
    return result;
}
exports.returnCustomerRentalStatement = returnCustomerRentalStatement;
