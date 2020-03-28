import * as MarketRepository from '../domain/MarketRepository'
import { Market } from '../domain/Market'

export const findMarketBuilder = (
  findMarket: MarketRepository.FindMarket
): (marketId: string) => Promise<Market | undefined> => {
  return async (marketId: string): Promise<Market | undefined> => {
    return await findMarket(marketId)
  }
}
