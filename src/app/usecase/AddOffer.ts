import * as MarketRepository from '../domain/MarketRepository'
import { Offer } from '../domain/Offer'
import { Market } from '../domain/Market'

export const addOfferBuilder = (
  addMarketOffer: MarketRepository.AddMarketOffer
): (market: Market, offer: Offer) => Promise<Offer> => {
  return async (market: Market, offer: Offer): Promise<Offer> => {
    await addMarketOffer(market.id, offer)
    return offer
  }
}
