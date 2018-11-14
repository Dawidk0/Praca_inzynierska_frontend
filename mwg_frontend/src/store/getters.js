export default {
  getTableItems: state => tableName => {
    return state.tables[tableName]
  },
  getDetailItem: (state) => {
    return state.detailsItem
  },
  getRelationName: (state) => ({tableName, propsToCompare, props, propsToShow}) => {
    let returnTable = state.tables[tableName].find(x => x[propsToCompare] === props)
    if (typeof returnTable === 'undefined' ||
      returnTable == null ||
      returnTable.length < 0) {
      return state.tables[tableName].find(x => x[propsToCompare] === 4)[propsToShow]
    } else {
      return returnTable[propsToShow]
    }
  }
}
