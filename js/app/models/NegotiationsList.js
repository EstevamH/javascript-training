class NegotiationsList {
  
  constructor() {
    this._negociacoes = [];
  }

  addNegotiations(item) {
    this._negociacoes.push(item);
  }

  get negotiations() {
    return [].concat(this._negociacoes);
  }
}
