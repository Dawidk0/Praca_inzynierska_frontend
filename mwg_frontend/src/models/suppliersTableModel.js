export default{
  detailsButton: false,
  path: 'suppliers',
  tableName: 'Dostawcy',
  newItemTitle: 'Nowy dostawca',
  editItemTitle: 'Edytuj dostawce',
  headers: [
    {text: 'Nazwa', value: 'name'},
    {text: 'Telefon', value: 'phone'},
    {text: 'Email', value: 'email'},
    {text: 'Opis', value: 'description'},
    {text: 'Akcje', value: 'actions'}
  ],
  polishLabels: [
    'Nazwa', 'Telefon', 'Email', 'Opis'
  ],
  model: {
    name: '',
    phone: '',
    email: '',
    description: ''
  }
}
