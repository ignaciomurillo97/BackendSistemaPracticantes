class SpeechForm {

  get id (): number {
    return this.id;
  }
  set id (value: number) {
    this._id = value;
  }

  get CedulaJuridica (): number {
    return this.CedulaJuridica;
  }
  set CedulaJuridica (value: number) {
    this._CedulaJuridica = value;
  }

  get idEvento (): number {
    return this.idEvento;
  }
  set idEvento (value: number) {
    this._idEvento = value;
  }

  get Expositor (): number {
    return this.Expositor;
  }
  set Expositor (value: number) {
    this._Expositor = value;
  }

  get Estado (): number {
    return this.Estado;
  }
  set Estado (value: number) {
    this._Estado = value;
  }


  private _id: number;
  private _CedulaJuridica: number;
  private _idEvento: number;
  private _Expositor: number;
  private _Estado: number;
}

export {SpeechForm}
