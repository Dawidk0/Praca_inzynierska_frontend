export default{
  detailsButton: true,
  idField: 'menuId',
  path: 'menus',
  tableName: 'Menu',
  newItemTitle: 'Nowe menu',
  editItemTitle: 'Edytuj menu',
  headers: [
    {text: 'Nazwa', value: 'name', width: '2%', required: true},
    {text: 'Opis', value: 'description', width: '2%'},
    {text: 'Akcje', value: 'actions', align: 'center', width: '2%'}
  ],
  polishLabels: [
    'Nazwa', 'Opis'
  ],
  model: {
    name: '',
    description: ''
  },
  uniqueField: 'name',
  connectionTable: 'mealInMenus'
}
