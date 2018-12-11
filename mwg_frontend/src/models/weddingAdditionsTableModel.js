export default{
  detailsButton: false,
  idField: 'weddingAdditionId',
  path: 'weddingAdditions',
  tableName: 'Dodatki na weselu',
  newItemTitle: 'Nowy dodatek na weselu',
  editItemTitle: 'Edytuj dodatek na weselu',
  headers: [
    {text: 'Wesele', value: 'weddingReceptionId', relation: true, fromTable: 'weddingReceptions', toShow: 'weddingDate', selectField: true, required: true},
    {text: 'Dodatek', value: 'additionId', relation: true, fromTable: 'additions', toShow: 'name', selectField: true, required: true},
    {text: 'Opis', value: 'description'},
    {text: 'Akcje', value: 'actions'}
  ],
  polishLabels: [
    'Wesele', 'Dodatek', 'Opis'
  ],
  model: {
    weddingReceptionId: -1,
    additionId: -1,
    description: ''
  }
}
