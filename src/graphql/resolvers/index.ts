import item from './queries/item'
import items from './queries/items'
import createItem from './mutations/createItem'
import updateItem from './mutations/updateItem'
import sendBooleanValues from './mutations/sendBooleanValues'

export default {
  Query: {
    item,
    items
  },
  Mutation: {
    createItem,
    updateItem,
    sendBooleanValues
  },
}
