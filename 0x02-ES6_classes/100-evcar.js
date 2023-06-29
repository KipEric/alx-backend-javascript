const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');
const _range = Symbol('range');

class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  cloneCar() {
    const { [_brand]: brand, [_motor]: motor, [_color]: color } = this;
    return new Car(brand, motor, color);
  }

  toString() {
    return `Car { _brand: ${this[_brand]}, _motor: ${this[_motor]}, _color: ${this[_color]} }`;
  }
}

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  cloneCar() {
    const {
      [_brand]: brand, [_motor]: motor, [_color]: color, [_range]: range,
    } = this;
    return new Car(brand, motor, color, range);
  }

  toString() {
    return `EVCar { _brand: ${this[_brand]}, _motor: ${this[_motor]}, _color: ${this[_color]}, _range: ${this[_range]} }`;
  }
}

export default EVCar;
