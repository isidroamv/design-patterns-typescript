export class ChocolateBoiler {

    private empty: boolean = true;
    private boiled: boolean = false;
    private static instance: ChocolateBoiler;

    private constructor() {
        this.empty = true;
        this.boiled = false;
    }

    static getInstance(): ChocolateBoiler {
        if (!ChocolateBoiler.instance) {
            ChocolateBoiler.instance = new ChocolateBoiler();
        }
        return ChocolateBoiler.instance;
    }

    fill(): void {
        if (this.empty) {
            this.empty = false;
            this.boiled = false;
        }
    }

    drain(): void {
        if (!this.empty && this.boiled) {
            this.empty = true;
        }
    }

    boil(): void {
        if (!this.boiled && !this.empty) {
            this.boiled = true;
        }
    }
}