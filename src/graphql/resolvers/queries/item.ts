import AWS from 'aws-sdk';
import { Item } from '../../../generated/schema';

async function item(_: unknown, input: { id: string }): Promise<Item | undefined> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()

  const params = {
    TableName: process.env.ITEM_TABLE,
    Key: {
      itemId: input.id,
    },
  }

  const { Item } = await dynamoDb.get(params).promise()

  if (!Item) {
    return undefined
  }
  return {
    ...Item,
    id: Item.itemId,
  }
}

export default item
