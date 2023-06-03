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

    getCost() {
        const daysRented = this.daysRented;
        let total_cost = this.getMovieCost(daysRented);
        return total_cost;
    }

    private getMovieCost(daysRented: number) {
        let total_cost = 0;
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

    private movie: Movie;
    private daysRented: number;
}