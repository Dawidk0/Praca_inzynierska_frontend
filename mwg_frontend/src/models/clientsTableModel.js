export default{
  detailsButton: false,
  path: 'clients',
  tableName: 'Klienci',
  newItemTitle: 'Nowy klient',
  editItemTitle: 'Edytuj klienta',
  headers: [
    {text: 'Imie Pani Młodej', value: 'brideFirstName'},
    {text: 'Nazwisko Pani Młodej', value: 'brideLastName'},
    {text: 'Imie Pana Młodego', value: 'groomFirstName'},
    {text: 'Nazwisko Pana Młodego', value: 'groomLastName'},
    {text: 'Email', value: 'email'},
    {text: 'Telefon', value: 'phone'},
    {text: 'Akcje', value: 'actions'}
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
