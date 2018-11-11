class Evaluation {

  get cedulaEvaluador (): number {
    return this.cedulaEvaluador;
  }
  set cedulaEvaluador (value: number) {
    this._cedulaEvaluador = value;
  }

  get cedulaEvaluado (): number {
    return this.cedulaEvaluado;
  }
  set cedulaEvaluado (value: number) {
    this._cedulaEvaluado = value;
  }

  get JSONEvaluacion (): string {
    return this.JSONEvaluacion;
  }
  set JSONEvaluacion (value: string) {
    this._JSONEvaluacion = value;
  }

  get tipoEvaluacion (): number {
    return this.tipoEvaluacion;
  }
  set tipoEvaluacion (value: number) {
    this._tipoEvaluacion = value;
  }


  private _cedulaEvaluador: number;
  private _cedulaEvaluado: number;
  private _JSONEvaluacion: string;
  private _tipoEvaluacion: number;

  constructor () {

  }
}

export { Evaluation }
