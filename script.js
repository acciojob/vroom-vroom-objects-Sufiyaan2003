function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function() {
  return this.make + " " + this.model;
};

function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model); // Call Car constructor with this context
  this.topSpeed = topSpeed;
}

// Inherit from Car.prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
