import {Rental} from "./Rental";
import {Movie} from "./Movie";

export class Customer {
    constructor(name: string) {
        this.name = name;
    }

    public addRental(rental: Rental) {
        this.rentals.push(rental);
    }

    public getName(): string {
        return this.name;
    }

    public statement(): string {
        let totalAmount = 0;
        let frequentRenterPoints = 0;
        const rentals = this.rentals.entries();
        let result = "Rental Record for " + this.getName() + "\n";

        for(const [index, each] of rentals) {
            let thisAmount = 0;
            thisAmount += this.getTotalCost(each);

            frequentRenterPoints++;

            if (each.getMovie().getPriceCode() == Movie.NEW_RELEASE
                && each.getDaysRented() > 1)
                frequentRenterPoints++;

            result += "\t" + each.getMovie().getTitle() + "\t"
                + new String(thisAmount.toFixed(1)) + "\n";
            totalAmount += thisAmount;

        }

        result += "You owed " + new String(totalAmount.toFixed(1)) + "\n";
        result += "You earned " + new String(frequentRenterPoints) + " frequent renter points\n";

        return result;
    }


    private getTotalCost(each: Rental) {
        let total_cost = 0;
        // determines the amount for each line
        switch (each.getMovie().getPriceCode()) {
            case Movie.REGULAR:
                total_cost = 2;
                if (each.getDaysRented() > 2) {
                    total_cost += (each.getDaysRented() - 2) * 1.5;
                }
                break;
            case Movie.NEW_RELEASE:
                total_cost = each.getDaysRented() * 3;
                break;
            case Movie.CHILDRENS:
                total_cost = 1.5
                if (each.getDaysRented() > 3) {
                    total_cost += (each.getDaysRented() - 3) * 1.5;
                }
                break;
        }
        return total_cost;
    }

    private name: string;
    private rentals = Array<Rental>();
}