export function calculateFrequentRenterPoints(customer, movies) {
    let frequentRenterPoints = 0;
    for (let r of customer.rentals) {
      let movie = movies[r.movieID];
      frequentRenterPoints++;
      if (movie.code === "new" && r.days > 2) frequentRenterPoints++;
    }
    return frequentRenterPoints;
  }

export function calculateAmountOwed(customer, movies) {
    let totalAmount = 0;
    for (let r of customer.rentals) {
      let movie = movies[r.movieID];
        totalAmount += calculateEachMovieCost(movie.code, r.days);
      }
    return totalAmount;
  }

export function calculateEachMovieCost(category: string, days: number) {
  let thisAmount = 0;
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

export function returnCustomerRentalStatement(customer, movies) {
  let result = `Rental Record for ${customer.name} `;
  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    result += `[ movie title: ${movie.title}, amount: ${calculateEachMovieCost(movie.code, r.days)}] `;
  }
  result += `Amount owed is: ${calculateAmountOwed(customer, movies)}. `;
  result += `Customer earned: ${calculateFrequentRenterPoints(customer, movies)} frequent renter points.`;
  return result;
}