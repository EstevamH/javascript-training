class MessageView extends View {

  constructor(element) {
    super(element)
  }

  template(message) {
    return message.text ? `<p class="alert alert-info">${message.text}</p>` : `<p></p>`;
  }
}