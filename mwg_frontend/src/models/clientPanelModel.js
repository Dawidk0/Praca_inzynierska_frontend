export default {
  headers: {
    mealsHeaders: [
      {text: 'Danie', value: 'mealId', relation: true, fromTable: 'meals', toShow: 'name', selectField: true},
      {text: 'Liczba osób', value: 'numberOfPeople', textField: true},
      {text: 'Komentarz', value: 'comment', textField: true}
    ],
    additionsHeaders: [
      {text: 'Dodatek', value: 'additionId', relation: true, fromTable: 'additions', toShow: 'name', selectField: true},
      {text: 'Opis', value: 'description', textField: true}
    ],
    bookingsHeaders: [
      {text: 'Miejsce', value: 'bedId', relation: true, fromTable: 'beds', toShow: 'name', selectField: true},
      {text: 'Data przyjazdy', value: 'dateIn', dateField: true},
      {text: 'Data wyjazdu', value: 'dateOut', dateField: true},
      {text: 'Opis', value: 'description', textField: true}
    ]
  },
  tableLabels: ['Dania', 'Dodatki', 'Noclegi'],
  tableName: ['meals', 'additions', 'beds'],
  itemKeysCheckbox: ['mealId', 'additionId', 'bedId']
}
