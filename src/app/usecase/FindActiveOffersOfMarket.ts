import { Offer } from '../domain/Offer'
import * as MarketRepository from '../domain/MarketRepository'

type FindActiveOffersOfMarket = (marketId: string) => Promise<Offer[]>

export const findActiveOffersOfMarketBuilder = (
  findActiveOffersOfMarket: MarketRepository.FindActiveOffersOfMarket
): FindActiveOffersOfMarket => {
  return async (marketId: string): Promise<Offer[]> => {
    return findActiveOffersOfMarket(marketId)
  }
}
