export default {
  fields: {
    header: 'Konto',
    textFields: [{text: 'Login', value: 'login'}],
    selectFields: [
      {label: 'Status', value: 'active', items: ['Aktywne', 'Nieaktywne']}
    ],
    dateFields: [
      {text: 'Data utworzenia', value: 'creationDate', dateField: true, input: ''},
      {text: 'Data wygasnięcia', value: 'expireDate', dateField: true, input: ''}
    ],
    password: [{text: 'Hasło', value: 'password'}]
  },
  uniqueField: 'login'
}
