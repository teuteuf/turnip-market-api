import * as MarketRepository from '../domain/MarketRepository'
import * as IdGenerator from '../domain/IdGenerator'
import { Market } from '../domain/Market'

export const createNewMarketBuilder = (
  saveMarket: MarketRepository.SaveMarket,
  generateId: IdGenerator.GenerateId
): (marketName: string) => Promise<Market> => {
  return async (marketName: string): Promise<Market> => {
    const market: Market = {
      id: generateId(),
      name: marketName,
      activeOffers: []
    }
    await saveMarket(market)
    return market
  }
}
