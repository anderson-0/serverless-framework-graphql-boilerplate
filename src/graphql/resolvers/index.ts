import item from './queries/item'
import items from './queries/items'
import createItem from './mutations/createItem'
import updateItem from './mutations/updateItem'

export default {
  Query: {
    item,
    items
  },
  Mutation: {
    createItem,
    updateItem
  },
}
