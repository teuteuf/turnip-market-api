import * as InMemoryMarketRepository from '../app/infra/InMemoryMarketRepository'
import * as ShortIdGenerator from '../app/infra/ShortIdGenerator'
import { createNewMarketBuilder } from '../app/usecase/CreateNewMarket'
import { findMarketBuilder } from '../app/usecase/FindMarket'

export const createNewMarket = createNewMarketBuilder(
  InMemoryMarketRepository.saveMarket,
  ShortIdGenerator.generateId
)

export const findMarket = findMarketBuilder(
  InMemoryMarketRepository.findMarket
)
