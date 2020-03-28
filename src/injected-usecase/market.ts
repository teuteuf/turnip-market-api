import * as InMemoryMarketRepository from '../app/infra/InMemoryMarketRepository'
import * as ShortIdGenerator from '../app/infra/ShortIdGenerator'
import { createNewMarketBuilder } from '../app/usecase/CreateNewMarket'

export const createNewMarket = createNewMarketBuilder(
  InMemoryMarketRepository.saveMarket,
  ShortIdGenerator.generateId
)
