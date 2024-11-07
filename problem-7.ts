{
    class Car {
        make: string;
        model: string;
        year: number;

        constructor( make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge(): void {
            const currentYear = new Date().getFullYear();
            console.log(`${ currentYear - this.year} (assuming current year is 2024)`);
        }
    }

    // Input:
    const car = new Car("Honda", "Civic", 2018);

    car.getCarAge();   // Output 1: 6 (assuming current year is 2024)

}