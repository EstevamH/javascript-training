class DateHelper {

  constructor() { 
    throw new Error('Esta classe não deve ser instanciada'); 
  }

  static formatInputData(value){

    if (!/\d{4}-\d{2}-\d{2}/.test(value))
      throw new Error('Deve estar no formato yyyy-MM-dd');

    return new Date(...value.split('-').map((item, index) => item - index % 2));
  }

  static getFormattedDate = (date) => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}