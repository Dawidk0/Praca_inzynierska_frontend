export default{
  detailsButton: true,
  idField: 'weddingReceptionId',
  path: 'weddingReceptions',
  tableName: 'Przyjęcia weselne',
  newItemTitle: 'Nowe przyjęcie weselne',
  editItemTitle: 'Edytuj przyjęcie weselne',
  headers: [
    {text: 'Data podpisania', value: 'signingDate', dateField: true, width: '1%'},
    {text: 'Data wesela', value: 'weddingDate', dateField: true, width: '1%', required: true},
    {text: 'Dorośli', value: 'numberOfAdults', width: '1%'},
    {text: 'Dzieci', value: 'numberOfChildren', width: '1%'},
    {text: 'Klient', value: 'clientId', relation: true, fromTable: 'clients', toShow: 'name', selectField: true, width: '5%'},
    {text: 'Poprawiny', value: 'afterParty', width: '1%'},
    {text: 'Akcje', value: 'actions', align: 'center', width: '13%'}
  ],
  polishLabels: [
    'Data podpisania umowy', 'Data przyjęcia', 'Liczba osób dorosłych', 'Liczba dzieci', 'Klient', 'Poprawiny'
  ],
  model: {
    signingDate: '',
    weddingDate: '',
    numberOfAdults: '',
    numberOfChildren: '',
    clientId: 0,
    afterParty: 'tak'
  },
  uniqueField: 'weddingDate',
  connectionTable: 'weddingReceptionMeals'
}
