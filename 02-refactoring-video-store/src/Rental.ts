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
        return this.movie.getMovieCost(daysRented)
    }

    private movie: Movie;
    private daysRented: number;
}