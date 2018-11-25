export default {
  getTableItems: state => ({tableName, parentId, parentIdField}) => {
    if (parentId) {
      // eslint-disable-next-line
      return state.tables[tableName].filter(x => x[parentIdField] == parentId)
    } else {
      return state.tables[tableName]
    }
  },
  getDetailItem: (state) => {
    return state.detailsItem
  },
  getAccountDetail: (state) => ({tableName, field, value}) => {
    // eslint-disable-next-line
    return state.tables[tableName].filter(x => x[field] == value)[0]
  },
  getRelationName: (state) => ({tableName, propsToCompare, props, propsToShow}) => {
    let returnTable = state.tables[tableName].find(x => x[propsToCompare] === props)
    // if (typeof returnTable === 'undefined' ||
    //   returnTable == null ||
    //   returnTable.length < 0) {
    //   return state.tables[tableName].find(x => x[propsToCompare] === 4)[propsToShow]
    // } else {
    return returnTable[propsToShow]
  },
  authentication: (state) => ({login, password}) => {
    // eslint-disable-next-line
    let users = state.tables['accounts'].filter(x => x['login'] == login)
    if (users.length > 0) {
      // eslint-disable-next-line
      if (users[0].password == password) { state.isAuthenticated = true }
      return state.isAuthenticated
    }
    return false
  },
  isAuthenticated: state => {
    return state.isAuthenticated
  },
  getMaxId: (state) => ({tableName, idField}) => {
    let table = state.tables[tableName]
    let value = Math.max(...table.map(o => o[idField]))
    return value < 1 ? 1 : value
  },
  getRole: (state) => {
    return state.role
  },
  getClientId: (state) => {
    return state.clientId
  }
}
