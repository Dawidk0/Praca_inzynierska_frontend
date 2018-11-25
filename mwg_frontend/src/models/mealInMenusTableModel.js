export default{
  detailsButton: false,
  idField: 'mealInMenuId',
  fieldToShow: 'name',
  parentTable: 'menus',
  parentIdField: 'menuId',
  parentIdValue: -1,
  path: 'mealInMenus',
  newItemTitle: 'Nowe danie w menu',
  editItemTitle: 'Edytuj danie w menu',
  headers: [
    {text: 'Danie', value: 'mealId', relation: true, fromTable: 'meals', toShow: 'name', selectField: true},
    {text: 'Ilość na osobę', value: 'amountPerPerson'},
    {text: 'Jednostka', value: 'unit'},
    {text: 'Akcje', value: 'actions'}
  ],
  polishLabels: [
    'Danie', 'Ilość na osobę', 'Jednostka'
  ],
  model: {
    mealId: -1,
    amountPerPerson: '',
    unit: '',
    menuId: -1
  }
}
