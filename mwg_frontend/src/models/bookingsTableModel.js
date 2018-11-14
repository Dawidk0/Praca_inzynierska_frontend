export default{
  detailsButton: false,
  path: 'bookings',
  tableName: 'Noclegi',
  newItemTitle: 'Nowy nocleg',
  editItemTitle: 'Edytuj nocleg',
  headers: [
    {text: 'Data przyjazdy', value: 'dateIn', dateField: true},
    {text: 'Data wyjazdu', value: 'dateOut', dateField: true},
    {text: 'Opis', value: 'description'},
    {text: 'Wesele', value: 'weddingReceptionId', relation: true, fromTable: 'weddingReceptions', toShow: 'name', selectField: true, input: false},
    {text: 'Miejsce', value: 'bedId', relation: true, fromTable: 'beds', toShow: 'name', selectField: true, input: false},
    {text: 'Akcje', value: 'actions'}
  ],
  polishLabels: [
    'Data przyjazdy', 'Data wyjazdu', 'Opis', 'Wesele', 'Miejsce'
  ],
  model: {
    dateIn: '',
    dateOut: '',
    description: '',
    weddingReceptionId: -1,
    bedId: -1
  }
}
