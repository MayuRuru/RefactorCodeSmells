export class Movie {
    public static CHILDRENS: number = 2;
    public static REGULAR: number = 0;
    public static NEW_RELEASE: number = 1;

    private title: string;
    private priceCode: number;

    constructor(title: string, priceCode: number) {
        this.title = title;
        this.priceCode = priceCode;
    }

    public getPriceCode(): number {
        return this.priceCode;
    }

    public setPriceCode(code: number) {
        this.priceCode = code;
    }

    public getTitle(): string {
        return this.title;
    }

    getMovieCost(daysRented: number) {
        let total_cost = 0;
        switch (this.getPriceCode()) {
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