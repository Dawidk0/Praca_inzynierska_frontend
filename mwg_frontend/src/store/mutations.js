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
  }
}
