export default{
  detailsButton: false,
  path: 'ingredients',
  tableName: 'Składniki',
  newItemTitle: 'Nowy składnik',
  editItemTitle: 'Edytuj składnik',
  headers: [
    {text: 'Nazwa', value: 'name'},
    {text: 'Ilość', value: 'amount'},
    {text: 'Jednostka', value: 'shoppingUnit'},
    {text: 'Dostawca', value: 'supplierId', relation: true, fromTable: 'suppliers', toShow: 'name', selectField: true},
    {text: 'Typ', value: 'ingredientTypeId', relation: true, fromTable: 'ingredientTypes', toShow: 'name', selectField: true},
    {text: 'Akcje', value: 'actions'}
  ],
  polishLabels: [
    'Nazwa', 'Jednostka', 'Ilość', 'Dostawca', 'Typ', 'Akcje'
  ],
  model: {
    name: '',
    amount: '',
    shoppingUnit: '',
    supplierId: -1,
    ingredientTypeId: -1
  }
}
