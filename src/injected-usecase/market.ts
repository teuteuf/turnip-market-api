import * as InMemoryMarketRepository from '../app/infra/InMemoryMarketRepository'
import { createNewMarketBuilder } from '../app/usecase/CreateNewMarket'

export const createNewMarket = createNewMarketBuilder(InMemoryMarketRepository.createMarket)
