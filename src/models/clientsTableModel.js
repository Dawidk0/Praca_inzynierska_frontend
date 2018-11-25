export default{
  detailsButton: true,
  idField: 'clientId',
  buttonName: 'Konto',
  path: 'clients',
  tableName: 'Klienci',
  newItemTitle: 'Nowy klient',
  editItemTitle: 'Edytuj klienta',
  headers: [
    {text: 'Imie Pani', value: 'brideFirstName', width: '1%'},
    {text: 'Nazwisko', value: 'brideLastName', width: '3%'},
    {text: 'Imie Pana', value: 'groomFirstName', width: '1%'},
    {text: 'Nazwisko ', value: 'groomLastName', width: '3%'},
    {text: 'Email', value: 'email', width: '3%'},
    {text: 'Telefon', value: 'phone', width: '1%'},
    {text: 'Akcje', value: 'actions', align: 'center', width: '20%'}
  ],
  polishLabels: [
    'Imie Pani Młodej', 'Nazwisko Pani Młodej', 'Imie Pana Młodego', 'Nazwisko Pana Młodego', 'Email', 'Telefon', 'Akcje'
  ],
  model: {
    brideFirstName: '',
    brideLastName: '',
    groomFirstName: '',
    groomLastName: '',
    email: '',
    phone: ''
  }
}
