class NegotiationController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputDate = $("#date");
    this._inputQuantity = $("#quantity");
    this._inputValue = $("#value");

    this._negotiationList = new Bind(
      new NegotiationsList(),
      new NegotiationsView($("#negotiationsView")),
      "addNegotiations",
      "clearNegotiations"
    );

    this._message = new Bind(
      new Message(),
      new MessageView($("#messageView")),
      "text"
    );
  }

  add(event) {
    event.preventDefault();

    this._negotiationList.addNegotiations(this._createNegotiation());

    this._message.text = "Negociação adicionada com sucesso!";

    this._cleanForm();
  }

  clearNegotiations() {
    this._negotiationList.clearNegotiations();
    this._message.texto = "Negociações apagadas com sucesso";
  }

  importNegotiations() {
    let service = new NegotiationService();

    Promise.all([
      service.getWeekNegotiations(),
      service.getPreviousWeekNegotiations(),
      service.getlastWeeksNegotiations()
    ])
    .then(negotiations => {
      negotiations
        .reduce((newArr, item) => newArr.concat(item), [])
        .forEach(negotiation => this._negotiationList.addNegotiations(negotiation));
      this._message.text = 'Negociações importadas com sucesso';
    })
    .catch(error => this._message.text = error);
  }

  _createNegotiation() {
    return new Negotiation(
      DateHelper.formatInputData(this._inputDate.value),
      this._inputQuantity.value,
      this._inputValue.value
    );
  }

  _cleanForm() {
    this._inputDate.value = "";
    this._inputQuantity.value = 1;
    this._inputValue.value = 0.0;

    this._inputDate.focus();
  }
}
