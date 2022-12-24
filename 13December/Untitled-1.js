const Automobile = {
  manufacturer: "Audi",
  model: "A8",
  year: 2018,
  speed: 120,
  fuelTank: 50,
  averageConsumption: 15,
  drivers: ["Andrii", "Taras", "Boghdan"],
  showInfo() {
    console.log(`Manufacturer: ${this.manufacturer},\nModel: ${this.model},\nYear: ${this.year},\nSpeed: ${this.speed},\nFuel Tank: ${this.fuelTank}.`)
  },
  addDriver(name) {
    this.drivers.push(name)
  },
  checkDriver(name) {
    return this.drivers.find(el => el === name) ? "yes, in the list" : "no, not in the list";
  },
  countSpeedAndTime(distance) {
    const time = distance / this.speed;
    const fuel = distance / 100 * this.averageConsumption;
    const rest = Math.floor(time / 4);
    const result = time + rest;
    return {
      time: +time.toFixed(2), fuel: +fuel.toFixed(2), time_and_rest: +result.toFixed(2)
  }
  }
}

Automobile.showInfo();

Automobile.addDriver("Alex");
console.log(Automobile.drivers)

console.log(Automobile.checkDriver("Taras"));
console.log(Automobile.checkDriver("Oleg"));

console.log(Automobile.countSpeedAndTime(990));