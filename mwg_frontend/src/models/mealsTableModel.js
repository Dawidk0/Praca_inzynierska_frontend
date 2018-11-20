export default{
  detailsButton: true,
  idField: 'mealId',
  path: 'meals',
  tableName: 'Dania',
  newItemTitle: 'Nowe danie',
  editItemTitle: 'Edytuj danie',
  headers: [
    {text: 'Nazwa', value: 'name', width: '2%'},
    {text: 'Typ', value: 'mealTypeId', relation: true, fromTable: 'mealTypes', toShow: 'name', selectField: true, width: '2%'},
    {text: 'Akcje', value: 'actions', align: 'center', width: '2%'}
  ],
  polishLabels: [
    'Nazwa', 'Typ', 'Akcje'
  ],
  model: {
    name: '',
    mealTypeId: 0
  }
}
