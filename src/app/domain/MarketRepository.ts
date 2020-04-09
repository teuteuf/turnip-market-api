import { Market } from './Market'
import { Offer } from './Offer'

export type SaveMarket = (market: Market) => Promise<void>
export type FindMarket = (id: string) => Promise<Market | undefined>
export type FindActiveOffersOfMarket = (marketId: string) => Promise<Offer[]>
export type AddMarketOffer = (marketId: string, offer: Offer) => Promise<void>
