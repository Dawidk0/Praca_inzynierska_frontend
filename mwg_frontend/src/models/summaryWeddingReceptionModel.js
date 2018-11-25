export default {
  idField: 'weddingReceptionId',
  headers: {
    clientHeaders: [
      {text: 'Imie Pani', value: 'brideFirstName'},
      {text: 'Nazwisko Pani', value: 'brideLastName'},
      {text: 'Imie Pana', value: 'groomFirstName'},
      {text: 'Nazwisko Pana', value: 'groomLastName'},
      {text: 'Email', value: 'email'},
      {text: 'Telefon', value: 'phone'}
    ],
    mealsHeaders: [
      {text: 'Danie', value: 'mealId', relation: true, fromTable: 'meals', toShow: 'name', selectField: true},
      {text: 'Liczba osób', value: 'numberOfPeople'},
      {text: 'Komentarz', value: 'comment'}
    ],
    additionsHeaders: [
      {text: 'Dodatek', value: 'additionId', relation: true, fromTable: 'additions', toShow: 'name', selectField: true},
      {text: 'Opis', value: 'description'}
    ],
    bookingsHeaders: [
      {text: 'Data przyjazdu', value: 'dateIn', dateField: true},
      {text: 'Data wyjazdu', value: 'dateOut', dateField: true},
      {text: 'Opis', value: 'description'},
      {text: 'Miejsce', value: 'bedId', relation: true, fromTable: 'beds', toShow: 'name', selectField: true}
    ]
  },
  tableLabels: ['Klient', 'Dania', 'Dodatki', 'Noclegi'],
  tableName: ['clients', 'weddingReceptionMeals', 'weddingAdditions', 'bookings']
}
