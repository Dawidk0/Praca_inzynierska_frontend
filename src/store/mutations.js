export default{
  saveTable: (state, {name, table}) => {
    state.tables[name] = table
  },
  setDetailsItem: (state, {id, path, item}) => {
    state.detailsItemId = id
    state.detailsItemCategory = path
    state.detailsItem = item
  },
  saveItem: (state, item) => {
    let index = state.menus.indexOf(state.detailsItem)
    state.menus[index] = item
    state.detailsItem = item
    state.detailsItemId = item.id
  },
  addItem: (state, {tableName, item}) => {
    state.tables[tableName].push(item)
  },
  setDetailsComponentFlag: state => {
    state.detailsComponent = true
  },
  disableDetailsComponentFlag: state => {
    state.detailsComponent = false
  },
  setDetailsItemField: state => field => {
    state.detailsItemField = field
  },
  logout: state => {
    state.isAuthenticated = false
    return state.isAuthenticated
  },
  addAccount: (state, clientId) => {
    let id = Math.max(...state.tables.accounts.map(o => o.accountId))
    let newId = id > 0 ? (id + 1) : 1
    let newAccount = {accountId: newId, clientId: clientId, login: '', password: '', role: '', creationDate: new Date().toJSON().slice(0, 10), expireDate: '', active: 'Nieaktywne'}
    state.tables.accounts.push(newAccount)
  },
  setRole: (state, user) => {
    // eslint-disable-next-line
    let account = state.tables['accounts'].filter(x => x['login'] == user.login)[0]
    state.role = account.role
    state.clientId = account.clientId
  }
}
