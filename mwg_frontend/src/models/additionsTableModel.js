export default{
  detailsButton: false,
  path: 'additions',
  tableName: 'Dodatki',
  newItemTitle: 'Nowy dodatek',
  editItemTitle: 'Edytuj dodatek',
  headers: [
    {text: 'Nazwa', value: 'name'},
    {text: 'Typ dodatku', value: 'additionTypeId', relation: true, fromTable: 'additionTypes', toShow: 'name', selectField: true},
    {text: 'Akcje', value: 'actions'}
  ],
  polishLabels: [
    'Nazwa', 'Typ dodatku'
  ],
  model: {
    name: '',
    additionTypeId: -1
  }
}
