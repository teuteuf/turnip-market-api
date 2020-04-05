import { Offer } from '../domain/Offer'
import * as MarketRepository from '../domain/MarketRepository'

type FindActiveOffersOfMarket = (marketId: string) => Promise<Offer[]>

export const findActiveOffersOfMarketBuilder = (
  findMarket: MarketRepository.FindMarket
): FindActiveOffersOfMarket => {
  return async (marketId: string): Promise<Offer[]> => {
    const market = await findMarket(marketId)
    if (!market) {
      return []
    }

    const now = new Date()
    return market.offers.filter((offer) => offer.startTime <= now && offer.endTime >= now)
  }
}
