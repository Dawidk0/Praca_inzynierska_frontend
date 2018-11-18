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
  }
}
