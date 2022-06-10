import item from './queries/item'
import items from './queries/items'
import createItem from './mutations/createItem'

export default {
  Query: {
    item,
    items
  },
  Mutation: {
    createItem,
  },
}
