export default{
  detailsButton: false,
  path: 'weddingReceptions',
  tableName: 'Przyjęcia weselne',
  newItemTitle: 'Nowe przyjęcie weselne',
  editItemTitle: 'Edytuj przyjęcie weselne',
  headers: [
    {text: 'Data podpisania umowy', value: 'signingDate', dateField: true},
    {text: 'Data przyjęcia', value: 'weddingDate', dateField: true},
    {text: 'Liczba osób dorosłych', value: 'numberOfAdults'},
    {text: 'Liczba dzieci', value: 'numberOfChildren'},
    {text: 'Klient', value: 'clientId', relation: true, fromTable: 'clients', toShow: 'name', selectField: true},
    {text: 'Poprawiny', value: 'afterParty'},
    {text: 'Akcje', value: 'actions'}
  ],
  polishLabels: [
    'Data podpisania umowy', 'Data przyjęcia', 'Liczba osób dorosłych', 'Liczba dzieci', 'Klient', 'Poprawiny'
  ],
  model: {
    signingDate: '',
    weddingDate: '',
    numberOfAdults: '',
    numberOfChildren: '',
    clientId: -1,
    afterParty: 'tak'
  }
}
