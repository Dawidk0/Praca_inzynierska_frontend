export default{
  detailsButton: false,
  idField: 'bookingId',
  path: 'bookings',
  tableName: 'Noclegi',
  newItemTitle: 'Nowy nocleg',
  editItemTitle: 'Edytuj nocleg',
  headers: [
    {text: 'Data przyjazdu', value: 'dateIn', dateField: true, required: true},
    {text: 'Data wyjazdu', value: 'dateOut', dateField: true},
    {text: 'Opis', value: 'description'},
    {text: 'Wesele', value: 'weddingReceptionId', relation: true, fromTable: 'weddingReceptions', toShow: 'weddingDate', selectField: true, required: true},
    {text: 'Miejsce', value: 'bedId', relation: true, fromTable: 'beds', toShow: 'name', selectField: true, required: true},
    {text: 'Akcje', value: 'actions'}
  ],
  polishLabels: [
    'Data przyjazdu', 'Data wyjazdu', 'Opis', 'Wesele', 'Miejsce'
  ],
  model: {
    dateIn: '',
    dateOut: '',
    description: '',
    weddingReceptionId: -1,
    bedId: -1
  }
}
