import {Movie} from "./Movie";

export class Rental {
    constructor(movie: Movie, daysRented: number) {
        this.movie = movie;
        this.daysRented = daysRented;
    }

    public getDaysRented(): number {
        return this.daysRented;
    }

    public getMovie(): Movie {
        return this.movie;
    }

    private movie: Movie;
    private daysRented: number;



    getRentalCost(rental: Rental) {
        let total_cost = 0;
        switch (rental.getMovie().getPriceCode()) {
            case Movie.REGULAR:
                total_cost = 2;
                if (rental.getDaysRented() > 2) {
                    total_cost += (rental.getDaysRented() - 2) * 1.5;
                }
                break;
            case Movie.NEW_RELEASE:
                total_cost = rental.getDaysRented() * 3;
                break;
            case Movie.CHILDRENS:
                total_cost = 1.5
                if (rental.getDaysRented() > 3) {
                    total_cost += (rental.getDaysRented() - 3) * 1.5;
                }
                break;
        }
        return total_cost;
    }
}