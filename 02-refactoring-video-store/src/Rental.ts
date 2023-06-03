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

    getRentalCost() {
        let total_cost = 0;
        const daysRented = this.getDaysRented();
        switch (this.movie.getPriceCode()) {
            case Movie.REGULAR:
                total_cost = 2;
                if (daysRented > 2) {
                    total_cost += (daysRented - 2) * 1.5;
                }
                break;
            case Movie.NEW_RELEASE:
                total_cost = daysRented * 3;
                break;
            case Movie.CHILDRENS:
                total_cost = 1.5
                if (daysRented > 3) {
                    total_cost += (daysRented - 3) * 1.5;
                }
                break;
        }
        return total_cost;
    }
}