export default{
  detailsButton: false,
  parentIdField: 'mealId',
  parentIdValue: -1,
  path: 'mealIngredients',
  tableName: 'Składniki w daniu',
  newItemTitle: 'Nowy składnik w daniu',
  editItemTitle: 'Edytuj składnik w daniu',
  headers: [
    {text: 'Składnik', value: 'ingredientId', relation: true, fromTable: 'ingredients', toShow: 'name', selectField: true},
    {text: 'Ilość na osobę', value: 'amountPerPerson'},
    {text: 'Jednostka', value: 'unit'},
    {text: 'Akcje', value: 'actions'}
  ],
  polishLabels: [
    'Składnik', 'Ilość na osobę', 'Jednostka'
  ],
  model: {
    ingredientId: -1,
    amountPerPerson: '',
    unit: '',
    mealId: -1
  }
}
