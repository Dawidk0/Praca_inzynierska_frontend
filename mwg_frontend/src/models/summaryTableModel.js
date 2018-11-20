export default{
  idField: 'weddingReceptionId',
  detailsButton: true,
  path: 'weddingReceptions',
  tableName: 'Przyjęcia weselne',
  newItemTitle: 'Nowe przyjęcie weselne',
  editItemTitle: 'Edytuj przyjęcie weselne',
  headers: [
    {text: 'Data przyjęcia', value: 'weddingDate', dateField: true},
    {text: 'Klient', value: 'clientId', relation: true, fromTable: 'clients', toShow: 'name', selectField: true},
    {text: 'Poprawiny', value: 'afterParty'},
    {text: 'Akcje', value: 'actions', align: 'center'}
  ],
  polishLabels: [
    'Data przyjęcia', 'Klient', 'Poprawiny'
  ],
  model: {
    weddingDate: '',
    clientId: -1,
    afterParty: 'tak'
  }
}
