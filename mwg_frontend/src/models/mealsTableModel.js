export default{
  detailsButton: false,
  path: 'meals',
  tableName: 'Dania',
  newItemTitle: 'Nowe danie',
  editItemTitle: 'Edytuj danie',
  headers: [
    {text: 'Nazwa', value: 'name'},
    {text: 'Typ', value: 'mealTypeId', relation: true, fromTable: 'mealTypes', toShow: 'name', selectField: true},
    {text: 'Akcje', value: 'actions'}
  ],
  polishLabels: [
    'Nazwa', 'Typ', 'Akcje'
  ],
  model: {
    name: '',
    mealTypeId: -1
  }
}
