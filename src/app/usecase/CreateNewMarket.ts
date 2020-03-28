import * as MarketRepository from '../domain/MarketRepository'
import { Market } from '../domain/Market'

export const createNewMarketBuilder = (createMarket: MarketRepository.CreateMarket): (marketName: string) => Promise<Market> => {
  return async (marketName: string): Promise<Market> => {
    const market = {
      handle: 'azeazeazeaze',
      name: marketName
    }
    await createMarket(market)
    return market
  }
}
