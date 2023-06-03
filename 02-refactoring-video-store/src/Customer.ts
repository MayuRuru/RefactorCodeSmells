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

        for(const [index, rental] of rentals) {
            let thisAmount = 0;
            thisAmount += this.getCost(rental);

            frequentRenterPoints++;

            if (rental.getMovie().getPriceCode() == Movie.NEW_RELEASE
                && rental.getDaysRented() > 1)
                frequentRenterPoints++;

            result += "\t" + rental.getMovie().getTitle() + "\t"
                + new String(thisAmount.toFixed(1)) + "\n";
            totalAmount += thisAmount;

        }

        result += "You owed " + new String(totalAmount.toFixed(1)) + "\n";
        result += "You earned " + new String(frequentRenterPoints) + " frequent renter points\n";

        return result;
    }


    private getCost(rental: Rental) : number{
        return rental.getCost()
    }

    private name: string;
    private rentals = Array<Rental>();
}