class NegotiationController {

  constructor() {

    let $ = document.querySelector.bind(document);

    this._inputDate = $("#date");
    this._inputQuantity = $("#quantity");
    this._inputValue = $("#value");
    this._negotiationList = new NegotiationsList();

    this._negotiationsView = new NegotiationsView($('#negotiationsView'));
    this._negotiationsView.update(this._negotiationList);
  
    this._message = new Message();
    this._messageView = new MessageView($('#messageView'));
    this._messageView.update(this._message);
  }

  add(event) {
    event.preventDefault();

    this._negotiationList.addNegotiations(this._createNegotiation());
    this._negotiationsView.update(this._negotiationList);

    this._message.text = 'Negociação adicionada com sucesso!';
    this._messageView.update(this._message);

    this._cleanForm();
  }

  _createNegotiation() {

    return new Negotiation(
      DateHelper.formatInputData(this._inputDate.value),
      this._inputQuantity.value,
      this._inputValue.value
    );
  }

  _cleanForm() {

    this._inputDate.value = ''; 
    this._inputQuantity.value = 1; 
    this._inputValue.value = 0.0;
    
    this._inputDate.focus();
  }
}
