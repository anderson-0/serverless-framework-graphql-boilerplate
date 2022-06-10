import AWS from 'aws-sdk';

import { Item } from '../../../generated/schema';

async function items(_: unknown): Promise<Item[]> {
  const dynamoDb = new AWS.DynamoDB.DocumentClient()

  const params = {
    TableName: process.env.ITEM_TABLE,
  }

  const result = await dynamoDb.scan(params).promise()

  if (!result.Items) {
    return []
  }

  const items = result.Items?.map((record) => {
    return {
      id: record.itemId,
      ...record,
    }
  })

  return items
  
}

export default items
