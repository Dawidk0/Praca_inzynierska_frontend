export default {
  headers: {
    clientHeaders: [
      {text: 'Imie Pani Młodej', value: 'brideFirstName'},
      {text: 'Nazwisko Pani Młodej', value: 'brideLastName'},
      {text: 'Imie Pana Młodego', value: 'groomFirstName'},
      {text: 'Nazwisko Pana Młodego', value: 'groomLastName'},
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
      {text: 'Data przyjazdy', value: 'dateIn', dateField: true},
      {text: 'Data wyjazdu', value: 'dateOut', dateField: true},
      {text: 'Opis', value: 'description'},
      {text: 'Miejsce', value: 'bedId', relation: true, fromTable: 'beds', toShow: 'name', selectField: true}
    ]
  },
  tableLabels: ['Klient', 'Dania', 'Dodatki', 'Noclegi'],
  tableName: ['clients', 'weddingReceptionMeals', 'weddingAdditions', 'bookings']
}
