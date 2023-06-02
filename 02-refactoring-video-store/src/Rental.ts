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



    getRentalCost(each: Rental) {
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
}