interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  constructor(
    public make: string,
    public model: string,
    public year: number,
  ) {}

  start(): void {
    console.log("Car engine started");
  }
}

const car = new Car("Toyota", "Corolla", 2022);
car.start();
