export default{
  detailsButton: false,
  idField: 'additionId',
  path: 'additions',
  tableName: 'Dodatki',
  newItemTitle: 'Nowy dodatek',
  editItemTitle: 'Edytuj dodatek',
  headers: [
    {text: 'Nazwa', value: 'name', required: true},
    {text: 'Typ dodatku', value: 'additionTypeId', relation: true, fromTable: 'additionTypes', toShow: 'name', selectField: true},
    {text: 'Akcje', value: 'actions'}
  ],
  polishLabels: [
    'Nazwa', 'Typ dodatku'
  ],
  model: {
    name: '',
    additionTypeId: 0
  },
  uniqueField: 'name'
}
