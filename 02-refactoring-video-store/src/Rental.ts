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

    getCost() {
        let total_cost = 0;

        switch (this.movie.getPriceCode()) {
            case Movie.REGULAR:
                total_cost = 2;
                if (this.getDaysRented() > 2) {
                    total_cost += (this.getDaysRented() - 2) * 1.5;
                }
                break;
            case Movie.NEW_RELEASE:
                total_cost = this.getDaysRented() * 3;
                break;
            case Movie.CHILDRENS:
                total_cost = 1.5
                if (this.getDaysRented() > 3) {
                    total_cost += (this.getDaysRented() - 3) * 1.5;
                }
                break;
        }
        return total_cost;
    }
}