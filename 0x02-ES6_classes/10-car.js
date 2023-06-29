const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const { [_brand]: brand, [_motor]: motor, [_color]: color } = this;
    return new Car(brand, motor, color);
  }
}

export default Car;
