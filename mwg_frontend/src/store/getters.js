export default{
  getTableItems: state => tableName => {
    return state.tables[tableName]
  },
  getDetailItem: (state) => {
    return state.detailsItem
  },
  getRelationName: (state) => ({tableName, propsToCompare, props, propsToShow}) => {
    return state.tables[tableName].find(x => x[propsToCompare] === props)[propsToShow]
  }
}
