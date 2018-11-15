export default{
  detailsButton: false,
  parentIdField: 'weddingReceptionId',
  parentIdValue: -1,
  path: 'weddingReceptionMeals',
  tableName: 'Dania na weselu',
  newItemTitle: 'Nowe danie na weselu',
  editItemTitle: 'Edytuj danie na weselu',
  headers: [
    {text: 'Danie', value: 'mealId', relation: true, fromTable: 'meals', toShow: 'name', selectField: true},
    {text: 'Liczba osób', value: 'numberOfPeople'},
    {text: 'Komentarz', value: 'comment'},
    {text: 'Akcje', value: 'actions'}
  ],
  polishLabels: [
    'Danie', 'Liczba osób', 'Komentarz'
  ],
  model: {
    mealId: -1,
    numberOfPeople: '',
    comment: '',
    weddingReceptionId: -1
  }
}
