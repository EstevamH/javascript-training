class NegotiationService {

  constructor() {
    this._http = new HttpService();
  }
  getWeekNegotiations() {
    return new Promise((resolve, reject) => {   
      this._http.get('negociacoes/semana')
        .then(negotiations => {
          resolve(negotiations.map((item) => new Negotiation(new Date(item.data), item.quantidade, item.valor)));
        })
        .catch(error => {
          reject('Não foi possível obter as negociações da semana');
        });
    });
  }

  getPreviousWeekNegotiations() {
    return new Promise((resolve, reject) => {   
      this._http.get('negociacoes/anterior')
        .then(negotiations => {
          resolve(negotiations.map((item) => new Negotiation(new Date(item.data), item.quantidade, item.valor)));
        })
        .catch(error => {
          reject('Não foi possível obter as negociações da semana anterior');
        });
    });
  }

  getlastWeeksNegotiations() {
    return new Promise((resolve, reject) => {   
      this._http.get('negociacoes/retrasada')
        .then(negotiations => {
          resolve(negotiations.map((item) => new Negotiation(new Date(item.data), item.quantidade, item.valor)));
        })
        .catch(error => {
          reject('Não foi possível obter as negociações da semana retrasada');
        });
    });
  }
}
