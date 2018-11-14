export default{
  detailsButton: true,
  path: 'menus',
  tableName: 'Menu',
  newItemTitle: 'Nowe menu',
  editItemTitle: 'Edytuj menu',
  headers: [
    {text: 'Nazwa', value: 'name'},
    {text: 'Opis', value: 'description'},
    {text: 'Akcje', value: 'actions'}
  ],
  polishLabels: [
    'Nazwa', 'Opis'
  ],
  model: {
    name: '',
    description: ''
  }
}
