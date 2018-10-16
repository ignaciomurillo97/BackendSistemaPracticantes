class Person {
  get cedula() {
    return this._cedula;
  }

  get nombre() {
    return this._nombre;
  }

  get segundoNombre() {
    return this._segundoNombre;
  }

  get apellido() {
    return this._apellido;
  }

  get segundoApellido() {
    return this._segundoApellido;
  }

  constructor (data) {
    Object.assign(this, data);
  }
}
