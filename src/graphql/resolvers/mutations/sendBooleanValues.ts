import {  SendBooleanValuesInput } from '../../../generated/schema'

async function sendBooleanValues(
  _: unknown,
  { input }: { input: SendBooleanValuesInput },
): Promise<boolean> {
  
  console.log(typeof input.NutritionFacts)
  return true
}

export default sendBooleanValues
