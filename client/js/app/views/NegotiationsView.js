class NegotiationsView extends View {

  constructor(element) {
    super(element)
  }

  template(model) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
        </thead>

        <tbody>
          ${model.negotiations.map(item => `

              <tr>
                <td>${DateHelper.getFormattedDate(item.date)}</td>
                <td>${item.quantity}</td>
                <td>${item.value}</td>
                <td>${item.volume}</td>
              </tr>

            `).join('')}
        </tbody>

        <tfoot>
          <td colspan="3"></td>
          <td>
            ${model.negotiations.reduce((total, item) => total + item.volume, 0.0)}
          </td>
        </tfoot>
      </table>
      `;
  }
}
